require("dotenv").config({ path: require("path").join(__dirname, "..", ".env.local") });
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
    ["uae", "United Arab Emirates", "AE"], ["france", "France", "FR"],
  ].map(([slug, name, code]) => ({
    slug, name, code, isActive: true, popularCourses: ["Engineering", "Business", "Computer Science"],
    updatedAt: new Date(),
  }));
  await db.collection("countries").deleteMany({});
  await db.collection("countries").insertMany(countries);

  const collegeSeeds = [
    ["IIT Delhi", "iit-delhi", "New Delhi, India", "Engineering", "photo-1562774053-701939374585"],
    ["BITS Pilani", "bits-pilani", "Pilani, Rajasthan", "Engineering", "photo-1564981797816-1043664bf78d"],
    ["Delhi University", "delhi-university", "New Delhi, India", "Arts & Science", "photo-1523050854058-8df90110c9f1"],
    ["Harvard University", "harvard-university", "Cambridge, USA", "Research", "photo-1564981797816-1043664bf78d"],
    ["University of Oxford", "university-of-oxford", "Oxford, United Kingdom", "Research", "photo-1523050854058-8df90110c9f1"],
    ["University of Toronto", "university-of-toronto", "Toronto, Canada", "Research", "photo-1498243691581-b145c3f54a5a"],
    ["University of Melbourne", "university-of-melbourne", "Melbourne, Australia", "Research", "photo-1541339907198-e08756dedf3f"],
    ["Technical University of Munich", "technical-university-of-munich", "Munich, Germany", "Engineering", "photo-1562774053-701939374585"],
  ];
  await db.collection("colleges").deleteMany({});
  await db.collection("colleges").insertMany(collegeSeeds.map(([name, slug, location, category, image], index) => ({
    name, slug, shortName: name, location, category, image, type: index < 3 ? "Government / Private" : "University",
    description: `Explore academic programmes, admission guidance and international opportunities at ${name}.`,
    courses: ["Undergraduate", "Postgraduate", "Doctoral"],
    fees: "Request a current verified quote",
    featured: index < 6, isActive: true, rating: 0,
    createdAt: new Date(), updatedAt: new Date(),
  })));

  const adminEmail = process.env.ADMIN_EMAIL || "admin@campusseat.com";
  const password = process.env.ADMIN_PASSWORD || "CampusSeat@123";
  await db.collection("admins").updateOne(
    { email: adminEmail.toLowerCase() },
    { $set: { name: "CampusSeat Administrator", email: adminEmail.toLowerCase(), passwordHash: await bcrypt.hash(password, 12), role: "superadmin", updatedAt: new Date() }, $setOnInsert: { createdAt: new Date() } },
    { upsert: true },
  );

  console.log(`Seeded CampusSeat database: ${dbName}`);
  await client.close();
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
