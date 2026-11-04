require("dotenv").config();

const bcrypt = require("bcryptjs");
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const dbName = process.env.MONGODB_DB_NAME || "campusseat";

async function seed() {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const countries = [
        ["india", "India", "IN"], ["usa", "United States", "US"],
        ["uk", "United Kingdom", "GB"], ["canada", "Canada", "CA"],
        ["australia", "Australia", "AU"], ["germany", "Germany", "DE"],
        ["japan", "Japan", "JP"], ["singapore", "Singapore", "SG"],
        ["uae", "United Arab Emirates", "AE"],
    ].map(([slug, name, code]) => ({
        slug, name, code, isActive: true,
        popularCourses: ["Engineering", "Business", "Computer Science"],
        createdAt: new Date(), updatedAt: new Date(),
    }));

    const colleges = [
        ["IIT Delhi", "iit-delhi", "New Delhi, India", "Engineering"],
        ["BITS Pilani", "bits-pilani", "Pilani, Rajasthan", "Engineering"],
        ["Delhi University", "delhi-university", "New Delhi, India", "Arts & Science"],
        ["Harvard University", "harvard-university", "Cambridge, USA", "Research"],
        ["University of Oxford", "university-of-oxford", "Oxford, United Kingdom", "Research"],
        ["University of Toronto", "university-of-toronto", "Toronto, Canada", "Research"],
        ["University of Melbourne", "university-of-melbourne", "Melbourne, Australia", "Research"],
        ["Technical University of Munich", "technical-university-of-munich", "Munich, Germany", "Engineering"],
    ].map(([name, slug, location, category], index) => ({
        name, slug, shortName: name, location, category,
        type: index < 3 ? "Government / Private" : "University",
        description: `Explore academic programmes, admission guidance and international opportunities at ${name}.`,
        image: "", courses: ["Undergraduate", "Postgraduate", "Doctoral"],
        courseFees: [], fees: "Request a current verified quote",
        averageSalary: 0, highestSalary: 0, rating: 0, featured: index < 6,
        isActive: true, createdAt: new Date(), updatedAt: new Date(),
    }));

    await db.collection("countries").deleteMany({});
    await db.collection("countries").insertMany(countries);
    await db.collection("colleges").updateMany({}, { $set: { seedVersion: 1 } });
    for (const college of colleges) {
        await db.collection("colleges").updateOne({ slug: college.slug }, { $set: college }, { upsert: true });
    }
    const adminEmail = String(process.env.ADMIN_EMAIL || "admin@campusseat.com").toLowerCase();
    await db.collection("admins").updateOne(
        { email: adminEmail },
        { $set: {
            email: adminEmail,
            passwordHash: await bcrypt.hash(process.env.ADMIN_PASSWORD || "CampusSeat@123", 12),
            role: "superadmin",
            updatedAt: new Date(),
        }, $setOnInsert: { createdAt: new Date() } },
        { upsert: true }
    );
    console.log(`Seeded CampusSeat database: ${dbName}`);
    await client.close();
}

seed().catch((error) => {
    console.error(error);
    process.exit(1);
});
