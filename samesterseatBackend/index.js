require("dotenv").config();

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { jwtVerify, SignJWT } = require("jose");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = Number(process.env.PORT || process.env.BACKEND_PORT || 5000);
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const dbName = process.env.MONGODB_DB_NAME || "campusseat";

app.use(cors({
    origin: process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(",") : true,
    credentials: true,
}));
app.use(express.json({ limit: "10mb" }));

let db;
let mongoClient;

function serialize(document) {
    if (!document) return document;
    const { _id, ...rest } = document;
    return { id: _id.toString(), ...rest };
}

function validObjectId(id) {
    return ObjectId.isValid(id);
}

const sessionSecret = new TextEncoder().encode(
    process.env.ADMIN_SESSION_SECRET || "campusseat-local-development-secret-change-this"
);

app.get("/", (_request, response) => {
    response.json({
        name: "CampusSeat Backend",
        status: "running",
        apiBase: "/api",
        health: "/api/health",
    });
});

async function createToken(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("12h")
        .sign(sessionSecret);
}

async function requireAdmin(request, response, next) {
    const authorization = request.headers.authorization || "";
    const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
    if (!token) return response.status(401).json({ error: "Unauthorized." });
    try {
        const { payload } = await jwtVerify(token, sessionSecret);
        if (payload.role !== "admin") throw new Error("Invalid role");
        request.admin = payload;
        next();
    } catch {
        response.status(401).json({ error: "Unauthorized." });
    }
}

function normalizeCourseFees(value) {
    if (!Array.isArray(value)) return [];
    return value.map((course) => ({
        name: String(course.name || "").trim(),
        fee: Number(course.fee || 0),
        duration: String(course.duration || "").trim(),
    })).filter((course) => course.name);
}

app.get("/api/health", (_request, response) => {
    response.json({ status: "ok", database: dbName });
});

app.post("/api/auth/send-otp", async (request, response, next) => {
    try {
        const email = String(request.body.email || "").trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return response.status(400).json({ error: "Enter a valid email address." });
        }
        const otp = process.env.NODE_ENV === "production" ? String(crypto.randomInt(100000, 999999)) : "123456";
        await db.collection("otp_requests").updateOne(
            { email },
            { $set: { otpHash: await bcrypt.hash(otp, 10), expiresAt: new Date(Date.now() + 5 * 60 * 1000), updatedAt: new Date() } },
            { upsert: true }
        );
        if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.NODE_ENV === "production") {
            const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
            await transporter.sendMail({
                from: process.env.SMTP_FROM || process.env.SMTP_USER,
                to: email,
                subject: "Your CampusSeat verification code",
                text: `Your CampusSeat verification code is ${otp}. It expires in 5 minutes.`,
            });
        }
        response.json({ success: true, message: process.env.NODE_ENV === "production" ? "OTP sent successfully." : "Development OTP is 123456." });
    } catch (error) {
        next(error);
    }
});

app.post("/api/auth/verify-otp", async (request, response, next) => {
    try {
        const email = String(request.body.email || "").trim().toLowerCase();
        const otp = String(request.body.otp || "");
        const record = await db.collection("otp_requests").findOne({ email });
        if (!record || !record.expiresAt || record.expiresAt < new Date()) {
            return response.status(400).json({ error: "OTP has expired. Request a new one." });
        }
        if (!(await bcrypt.compare(otp, record.otpHash))) {
            return response.status(400).json({ error: "Invalid OTP." });
        }
        await db.collection("otp_requests").deleteOne({ email });
        let user = await db.collection("users").findOne({ email });
        if (!user) {
            const result = await db.collection("users").insertOne({
                email,
                mobile: String(request.body.mobile || "").trim(),
                name: String(request.body.name || "").trim(),
                role: "student",
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            user = { _id: result.insertedId, email, role: "student", mobile: request.body.mobile, name: request.body.name };
        }
        const token = await createToken({ sub: user._id.toString(), email, role: "student" });
        response.json({ success: true, token, user: { id: user._id.toString(), email, mobile: user.mobile, name: user.name } });
    } catch (error) {
        next(error);
    }
});

app.post("/api/admin/login", (request, response) => {
    const email = String(request.body.email || "").trim().toLowerCase();
    const password = String(request.body.password || "");
    if (email !== String(process.env.ADMIN_EMAIL || "admin@campusseat.com").toLowerCase() ||
        password !== String(process.env.ADMIN_PASSWORD || "CampusSeat@123")) {
        return response.status(401).json({ error: "Invalid admin credentials." });
    }
    createToken({ role: "admin", email }).then((token) => response.json({ success: true, token }));
});

app.get("/api/admin/session", requireAdmin, (_request, response) => response.json({ authenticated: true }));
app.post("/api/admin/logout", (_request, response) => response.json({ success: true }));

app.get("/api/admin/dashboard", requireAdmin, async (_request, response, next) => {
    try {
        const [students, enquiries, newEnquiries, bookings, colleges, countries] = await Promise.all([
            db.collection("users").countDocuments({ role: { $ne: "admin" } }),
            db.collection("enquiries").countDocuments({}),
            db.collection("enquiries").countDocuments({ status: "New" }),
            db.collection("counsellingBookings").countDocuments({}),
            db.collection("colleges").countDocuments({}),
            db.collection("countries").countDocuments({}),
        ]);
        response.json({ students, enquiries, newEnquiries, bookings, colleges, countries });
    } catch (error) {
        next(error);
    }
});

app.get("/api/users/students", requireAdmin, async (_request, response, next) => {
    try {
        const students = await db.collection("users").find({ role: { $ne: "admin" } }).sort({ createdAt: -1 }).limit(100).toArray();
        response.json(students.map(serialize));
    } catch (error) {
        next(error);
    }
});

app.get("/api/colleges", async (request, response, next) => {
    try {
        const search = String(request.query.search || "").trim();
        const query = search ? { $or: [
            { name: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { category: { $regex: search, $options: "i" } },
        ] } : {};
        const colleges = await db.collection("colleges").find(query).sort({ name: 1 }).toArray();
        response.json(colleges.map(serialize));
    } catch (error) {
        next(error);
    }
});

app.get("/api/colleges/:id", async (request, response, next) => {
    if (!validObjectId(request.params.id)) return response.status(400).json({ error: "Invalid college ID." });
    try {
        const college = await db.collection("colleges").findOne({ _id: new ObjectId(request.params.id) });
        if (!college) return response.status(404).json({ error: "College not found." });
        response.json(serialize(college));
    } catch (error) {
        next(error);
    }
});

app.post("/api/colleges", requireAdmin, async (request, response, next) => {
    try {
        const body = request.body;
        const name = String(body.name || "").trim();
        if (!name) return response.status(400).json({ error: "College name is required." });
        const college = {
            name, shortName: String(body.shortName || "").trim(), location: String(body.location || "").trim(),
            type: String(body.type || "").trim(), institutionType: String(body.institutionType || "").trim() || (/university|institute/i.test(name) ? "University" : "College"), category: String(body.category || "").trim(),
            description: String(body.description || "").trim(), image: String(body.image || "").trim(),
            fees: String(body.fees || "Varies by programme"), courses: Array.isArray(body.courses) ? body.courses.map(String) : [],
            courseFees: normalizeCourseFees(body.courseFees), averageSalary: Number(body.averageSalary || 0),
            highestSalary: Number(body.highestSalary || 0), rating: Number(body.rating || 0),
            website: String(body.website || "").trim(), featured: Boolean(body.featured), isActive: body.isActive !== false,
            createdAt: new Date(), updatedAt: new Date(),
        };
        const result = await db.collection("colleges").insertOne(college);
        response.status(201).json(serialize({ _id: result.insertedId, ...college }));
    } catch (error) {
        next(error);
    }
});

app.patch("/api/colleges/:id", requireAdmin, async (request, response, next) => {
    if (!validObjectId(request.params.id)) return response.status(400).json({ error: "Invalid college ID." });
    try {
        const body = request.body;
        const updates = { updatedAt: new Date() };
        ["name", "shortName", "location", "type", "institutionType", "category", "description", "image", "fees", "website"].forEach((key) => {
            if (typeof body[key] !== "undefined") updates[key] = String(body[key]).trim();
        });
        ["averageSalary", "highestSalary", "rating"].forEach((key) => {
            if (typeof body[key] !== "undefined") updates[key] = Number(body[key] || 0);
        });
        if (Array.isArray(body.courses)) updates.courses = body.courses.map(String);
        if (Array.isArray(body.courseFees)) updates.courseFees = normalizeCourseFees(body.courseFees);
        if (typeof body.featured !== "undefined") updates.featured = Boolean(body.featured);
        if (typeof body.isActive !== "undefined") updates.isActive = Boolean(body.isActive);
        const result = await db.collection("colleges").updateOne({ _id: new ObjectId(request.params.id) }, { $set: updates });
        if (!result.matchedCount) return response.status(404).json({ error: "College not found." });
        response.json({ success: true });
    } catch (error) {
        next(error);
    }
});

app.delete("/api/colleges/:id", requireAdmin, async (request, response, next) => {
    if (!validObjectId(request.params.id)) return response.status(400).json({ error: "Invalid college ID." });
    try {
        const result = await db.collection("colleges").deleteOne({ _id: new ObjectId(request.params.id) });
        if (!result.deletedCount) return response.status(404).json({ error: "College not found." });
        response.json({ success: true });
    } catch (error) {
        next(error);
    }
});

app.post("/api/colleges/:id/courses", requireAdmin, async (request, response, next) => {
    if (!validObjectId(request.params.id)) return response.status(400).json({ error: "Invalid college ID." });
    const course = { name: String(request.body.name || "").trim(), fee: Number(request.body.fee || 0), duration: String(request.body.duration || "").trim() };
    if (!course.name) return response.status(400).json({ error: "Course name is required." });
    try {
        const result = await db.collection("colleges").updateOne({ _id: new ObjectId(request.params.id) }, { $addToSet: { courses: course.name }, $push: { courseFees: course }, $set: { updatedAt: new Date() } });
        if (!result.matchedCount) return response.status(404).json({ error: "College not found." });
        response.status(201).json(course);
    } catch (error) {
        next(error);
    }
});

app.patch("/api/colleges/:id/courses/:courseName", requireAdmin, async (request, response, next) => {
    if (!validObjectId(request.params.id)) return response.status(400).json({ error: "Invalid college ID." });
    try {
        const oldName = decodeURIComponent(request.params.courseName);
        const college = await db.collection("colleges").findOne({ _id: new ObjectId(request.params.id) });
        if (!college) return response.status(404).json({ error: "College not found." });
        const course = { name: String(request.body.name || oldName).trim(), fee: Number(request.body.fee || 0), duration: String(request.body.duration || "").trim() };
        const courseFees = (college.courseFees || []).map((item) => item.name === oldName ? course : item);
        const courses = [...new Set((college.courses || []).map((item) => item === oldName ? course.name : item))];
        await db.collection("colleges").updateOne({ _id: new ObjectId(request.params.id) }, { $set: { courseFees, courses, updatedAt: new Date() } });
        response.json(course);
    } catch (error) {
        next(error);
    }
});

app.delete("/api/colleges/:id/courses/:courseName", requireAdmin, async (request, response, next) => {
    if (!validObjectId(request.params.id)) return response.status(400).json({ error: "Invalid college ID." });
    try {
        const courseName = decodeURIComponent(request.params.courseName);
        const result = await db.collection("colleges").updateOne(
            { _id: new ObjectId(request.params.id) },
            { $pull: { courseFees: { name: courseName }, courses: courseName }, $set: { updatedAt: new Date() } }
        );
        if (!result.matchedCount) return response.status(404).json({ error: "College not found." });
        response.json({ success: true });
    } catch (error) {
        next(error);
    }
});

app.patch("/api/colleges/:id/salary", requireAdmin, async (request, response, next) => {
    if (!validObjectId(request.params.id)) return response.status(400).json({ error: "Invalid college ID." });
    try {
        const averageSalary = Number(request.body.averageSalary || 0);
        const highestSalary = Number(request.body.highestSalary || 0);
        const result = await db.collection("colleges").updateOne({ _id: new ObjectId(request.params.id) }, { $set: { averageSalary, highestSalary, updatedAt: new Date() } });
        if (!result.matchedCount) return response.status(404).json({ error: "College not found." });
        response.json({ averageSalary, highestSalary });
    } catch (error) {
        next(error);
    }
});

app.get("/api/countries", async (_request, response, next) => {
    try {
        const countries = await db.collection("countries").find({}).sort({ name: 1 }).toArray();
        response.json(countries.map(serialize));
    } catch (error) {
        next(error);
    }
});

app.post("/api/countries", requireAdmin, async (request, response, next) => {
    try {
        const country = {
            name: String(request.body.name || "").trim(),
            slug: String(request.body.slug || "").trim().toLowerCase(),
            code: String(request.body.code || "").trim().toUpperCase(),
            isActive: request.body.isActive !== false,
            popularCourses: Array.isArray(request.body.popularCourses) ? request.body.popularCourses.map(String) : [],
            updatedAt: new Date(),
        };
        if (!country.name || !country.slug) return response.status(400).json({ error: "Country name and slug are required." });
        const result = await db.collection("countries").insertOne(country);
        response.status(201).json(serialize({ _id: result.insertedId, ...country }));
    } catch (error) {
        next(error);
    }
});

app.patch("/api/countries/:id", requireAdmin, async (request, response, next) => {
    if (!validObjectId(request.params.id)) return response.status(400).json({ error: "Invalid country ID." });
    try {
        const updates = { updatedAt: new Date() };
        ["name", "code"].forEach((key) => { if (typeof request.body[key] !== "undefined") updates[key] = String(request.body[key]).trim(); });
        if (typeof request.body.slug !== "undefined") updates.slug = String(request.body.slug).trim().toLowerCase();
        if (typeof request.body.isActive !== "undefined") updates.isActive = Boolean(request.body.isActive);
        if (Array.isArray(request.body.popularCourses)) updates.popularCourses = request.body.popularCourses.map(String);
        const result = await db.collection("countries").updateOne({ _id: new ObjectId(request.params.id) }, { $set: updates });
        if (!result.matchedCount) return response.status(404).json({ error: "Country not found." });
        response.json({ success: true });
    } catch (error) {
        next(error);
    }
});

app.delete("/api/countries/:id", requireAdmin, async (request, response, next) => {
    if (!validObjectId(request.params.id)) return response.status(400).json({ error: "Invalid country ID." });
    try {
        await db.collection("countries").deleteOne({ _id: new ObjectId(request.params.id) });
        response.json({ success: true });
    } catch (error) {
        next(error);
    }
});

app.get("/api/enquiries", requireAdmin, async (request, response, next) => {
    try {
        const status = request.query.status ? { status: String(request.query.status) } : {};
        const enquiries = await db.collection("enquiries").find(status).sort({ createdAt: -1 }).limit(100).toArray();
        response.json(enquiries.map(serialize));
    } catch (error) {
        next(error);
    }
});

app.post("/api/enquiries", async (request, response, next) => {
    try {
        const body = request.body;
        const firstName = String(body.firstName || "").trim();
        const email = String(body.email || "").trim().toLowerCase();
        const phone = String(body.phone || "").trim();
        if (!firstName || !email || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return response.status(400).json({ error: "Name, email and phone are required." });
        }
        if (body.consent !== true) return response.status(400).json({ error: "Please provide consent before submitting." });
        const reference = `CS-${Date.now().toString().slice(-8)}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
        const lastName = String(body.lastName || "").trim();
        const enquiry = {
            reference, firstName, lastName, name: `${firstName} ${lastName}`.trim(), email, phone,
            countryCode: String(body.countryCode || ""), homeCountry: String(body.homeCountry || ""),
            nationality: String(body.nationality || ""), city: String(body.city || ""),
            educationLevel: String(body.educationLevel || ""), preferredCountry: String(body.preferredCountry || ""),
            university: String(body.university || ""), course: String(body.course || ""), degree: String(body.degree || ""),
            intake: String(body.intake || ""), budget: String(body.budget || ""), studyMode: String(body.studyMode || ""),
            message: String(body.message || ""), consent: true, status: "New",
            source: String(body.source || "website"), createdAt: new Date(), updatedAt: new Date(),
        };
        await db.collection("enquiries").insertOne(enquiry);
        await db.collection("activityLog").insertOne({ type: "new_enquiry", reference, createdAt: new Date() });
        response.status(201).json({ success: true, reference });
    } catch (error) {
        next(error);
    }
});

app.get("/api/counselling", requireAdmin, async (_request, response, next) => {
    try {
        const bookings = await db.collection("counsellingBookings").find({}).sort({ createdAt: -1 }).limit(100).toArray();
        response.json(bookings.map(serialize));
    } catch (error) {
        next(error);
    }
});

app.post("/api/counselling", async (request, response, next) => {
    try {
        const body = request.body;
        const name = String(body.name || "").trim();
        const email = String(body.email || "").trim().toLowerCase();
        const phone = String(body.phone || "").trim();
        const date = String(body.date || "").trim();
        const time = String(body.time || "").trim();
        if (!name || !email || !phone || !date || !time || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return response.status(400).json({ error: "Please complete all required booking details." });
        }
        const duplicate = await db.collection("counsellingBookings").findOne({ date, time, status: { $in: ["Pending", "Confirmed"] } });
        if (duplicate) return response.status(409).json({ error: "That time is already requested. Please choose another slot." });
        const reference = `CALL-${Date.now().toString().slice(-8)}`;
        await db.collection("counsellingBookings").insertOne({
            reference, name, email, phone, date, time, timeZone: String(body.timeZone || "UTC"),
            topic: String(body.topic || "General counselling"), method: String(body.method || "Video call"),
            language: String(body.language || "English"), message: String(body.message || ""), status: "Pending",
            createdAt: new Date(), updatedAt: new Date(),
        });
        response.status(201).json({ success: true, reference });
    } catch (error) {
        next(error);
    }
});

app.use((_request, response) => response.status(404).json({ error: "API route not found." }));

app.use((error, _request, response, _next) => {
    console.error(error);
    response.status(500).json({ error: "Internal server error." });
});

async function start() {
    mongoClient = new MongoClient(mongoUri);
    await mongoClient.connect();
    db = mongoClient.db(dbName);
    await Promise.all([
        db.collection("colleges").createIndex({ name: 1 }),
        db.collection("users").createIndex({ email: 1 }, { unique: true, sparse: true }),
        db.collection("countries").createIndex({ slug: 1 }, { unique: true }),
    ]);
    app.listen(port, () => console.log(`CampusSeat backend running at http://localhost:${port}`));
}

start().catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
});
