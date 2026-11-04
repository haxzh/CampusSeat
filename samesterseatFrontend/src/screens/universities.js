/* =========================================================
   UNIVERSITY DATA  — edit / add entries here only.
   The component reads everything from this file.
   ========================================================= */

export const countries = [
  { name: "USA", code: "us" },
  { name: "France", code: "fr" },
  { name: "Germany", code: "de" },
  { name: "India", code: "in" },
  { name: "Switzerland", code: "ch" },
  { name: "UAE", code: "ae" },
];

const CODE = Object.fromEntries(countries.map((c) => [c.name, c.code]));

// Cover photos used when an entry has no `image` of its own.
// Replace with real campus photos (url, local import or Unsplash id) per university.
const COVER_POOL = [
  "photo-1562774053-701939374585",
  "photo-1498243691581-b145c3f54a5a",
  "photo-1564981797816-1043664bf78d",
  "photo-1523050854058-8df90110c9f1",
  "photo-1541339907198-e08756dedf3f",
  "photo-1509062522246-3755977927d7",
  "photo-1524995997946-a1c2e315a42f",
  "photo-1568792923760-d70635a89fdc",
];

const counters = {};

/** u(name, short, country, city, founded, type, courses, website, extra?) */
const u = (name, short, country, city, founded, type, courses, website, extra = {}) => {
  counters[country] = (counters[country] ?? -1) + 1;
  return {
    name,
    short,
    country,
    code: CODE[country],
    city,
    founded,
    type,
    courses,
    website,
    image: COVER_POOL[counters[country] % COVER_POOL.length],
    ...extra, // e.g. { image: "...", logo: "/logos/asu.png" }
  };
};

export const universities = [
  /* ---------------- USA ---------------- */
  u("Arizona State University", "ASU", "USA", "Tempe, Arizona", 1885, "Public Research University", ["Computer Science", "Business", "Engineering"], "https://www.asu.edu/"),
  u("University of Mississippi", "UM", "USA", "Oxford, Mississippi", 1848, "Public Research University", ["Business", "Computer Science", "Engineering"], "https://olemiss.edu/"),
  u("Michigan Technological University", "MTU", "USA", "Houghton, Michigan", 1885, "Public Research University", ["Computer Science", "Engineering", "Data Science"], "https://www.mtu.edu/"),
  u("University of Kentucky", "UK", "USA", "Lexington, Kentucky", 1865, "Public Research University", ["Business", "Computer Science", "Medicine"], "https://www.uky.edu/"),
  u("University of South Florida", "USF", "USA", "Tampa, Florida", 1956, "Public Research University", ["Computer Science", "Business", "Engineering"], "https://www.usf.edu/"),

  /* ---------------- FRANCE ---------------- */
  u("University of Limoges", "UNILIM", "France", "Limoges", 1968, "Public University", ["Computer Science", "Engineering", "Science", "Management"], "https://www.unilim.fr/"),
  u("University of Poitiers", "UP", "France", "Poitiers", 1431, "Public University", ["Computer Science", "Engineering", "Law", "Science"], "https://www.univ-poitiers.fr/en/"),
  u("University of Orléans", "UO", "France", "Orléans", 1306, "Public University", ["Computer Science", "Mathematics", "Engineering", "Economics"], "https://www.univ-orleans.fr/en/"),
  u("University of Lorraine", "UL", "France", "Nancy", 2012, "Public Research University", ["Computer Science", "Engineering", "Data Science", "Science"], "https://www.univ-lorraine.fr/en/"),
  u("University of Caen Normandy", "UNICAEN", "France", "Caen", 1432, "Public University", ["Computer Science", "Engineering", "Business", "Science"], "https://www.unicaen.fr/"),
  u("University of Rouen Normandy", "URN", "France", "Rouen", 1966, "Public University", ["Computer Science", "Engineering", "Science", "Management"], "https://www.univ-rouen.fr/"),
  u("Nantes Université", "NU", "France", "Nantes", 2022, "Public University", ["Computer Science", "Engineering", "Business", "Science"], "https://www.univ-nantes.fr/"),

  /* ---------------- GERMANY ---------------- */
  u("University of Siegen", "US", "Germany", "Siegen", 1972, "Public Research University", ["Computer Science", "Engineering", "Business"], "https://www.uni-siegen.de/"),
  u("University of Duisburg-Essen", "UDE", "Germany", "Duisburg and Essen", 2003, "Public Research University", ["Computer Science", "Engineering", "Economics"], "https://www.uni-due.de/"),
  u("University of Passau", "UP", "Germany", "Passau", 1978, "Public Research University", ["Computer Science", "Business", "International Studies"], "https://www.uni-passau.de/en/"),
  u("Otto von Guericke University Magdeburg", "OVGU", "Germany", "Magdeburg", 1993, "Public Research University", ["Computer Science", "Engineering", "Economics"], "https://www.ovgu.de/en/"),
  u("University of Rostock", "UR", "Germany", "Rostock", 1419, "Public Research University", ["Computer Science", "Engineering", "Natural Sciences"], "https://www.uni-rostock.de/en/"),
  u("Chemnitz University of Technology", "TUC", "Germany", "Chemnitz", 1836, "Public Technical University", ["Computer Science", "Mechanical Engineering", "Business"], "https://www.tu-chemnitz.de/index.html.en"),
  u("University of Applied Sciences Fulda", "HSF", "Germany", "Fulda", 1974, "Public University of Applied Sciences", ["Computer Science", "International Business", "Food Technology"], "https://www.hs-fulda.de/en/"),
  u("Hof University of Applied Sciences", "HOF", "Germany", "Hof", 1994, "Public University of Applied Sciences", ["Computer Science", "Software Engineering", "Business"], "https://www.hof-university.com/"),
  u("Deggendorf Institute of Technology", "DIT", "Germany", "Deggendorf", 1994, "Public University of Applied Sciences", ["Computer Science", "Artificial Intelligence", "Engineering"], "https://www.th-deg.de/en"),
  u("Hochschule Rhein-Waal", "HSRW", "Germany", "Kleve", 2009, "Public University of Applied Sciences", ["Computer Science", "Engineering", "International Business"], "https://www.hochschule-rhein-waal.de/en"),
  u("Anhalt University of Applied Sciences", "HSA", "Germany", "Köthen", 1991, "Public University of Applied Sciences", ["Computer Science", "Architecture", "Business"], "https://www.hs-anhalt.de/en/"),

  /* ---------------- INDIA ---------------- */
  u("Amity University", "AU", "India", "Noida, Uttar Pradesh", 2005, "Private University", ["Computer Science", "Engineering", "Management", "Data Science"], "https://www.amity.edu/"),
  u("Lovely Professional University", "LPU", "India", "Phagwara, Punjab", 2005, "Private University", ["Computer Science", "Engineering", "Management", "Design"], "https://www.lpu.in/"),
  u("Chandigarh University", "CU", "India", "Mohali, Punjab", 2012, "Private University", ["Computer Science", "Engineering", "Management", "Artificial Intelligence"], "https://www.cuchd.in/"),
  u("Sharda University", "SU", "India", "Greater Noida, Uttar Pradesh", 2009, "Private University", ["Computer Science", "Engineering", "Management", "Medical Sciences"], "https://www.sharda.ac.in/"),
  u("Galgotias University", "GU", "India", "Greater Noida, Uttar Pradesh", 2011, "Private University", ["Computer Science", "Engineering", "Management", "Data Science"], "https://www.galgotiasuniversity.edu.in/"),
  u("Bennett University", "BU", "India", "Greater Noida, Uttar Pradesh", 2016, "Private University", ["Computer Science", "Engineering", "Management", "Media Studies"], "https://www.bennett.edu.in/"),
  u("Graphic Era University", "GEU", "India", "Dehradun, Uttarakhand", 1993, "Private University", ["Computer Science", "Engineering", "Management", "Computer Applications"], "https://www.geu.ac.in/"),
  u("Integral University", "IU", "India", "Lucknow, Uttar Pradesh", 2004, "Private University", ["Computer Applications", "Computer Science", "Engineering", "Management"], "https://www.integraluniversity.ac.in/"),

  /* ---------------- SWITZERLAND ---------------- */
  u("University of Bern", "UNIBE", "Switzerland", "Bern", 1834, "Public University", ["Computer Science", "Business", "Science", "Medicine"], "https://www.unibe.ch/"),
  u("University of Fribourg", "UNIFR", "Switzerland", "Fribourg", 1889, "Public University", ["Computer Science", "Economics", "Law", "Science"], "https://www.unifr.ch/home/en/"),
  u("University of Lausanne", "UNIL", "Switzerland", "Lausanne", 1537, "Public University", ["Business", "Economics", "Computer Science", "Social Sciences"], "https://www.unil.ch/"),
  u("University of Neuchâtel", "UNINE", "Switzerland", "Neuchâtel", 1838, "Public University", ["Computer Science", "Economics", "Law", "Science"], "https://www.unine.ch/"),
  u("University of St. Gallen", "HSG", "Switzerland", "St. Gallen", 1898, "Public University", ["Business", "Management", "Economics", "Computer Science"], "https://www.unisg.ch/en/"),
  u("USI Università della Svizzera italiana", "USI", "Switzerland", "Lugano", 1996, "Public University", ["Computer Science", "Informatics", "Economics", "Communication"], "https://www.usi.ch/en"),
  u("Bern University of Applied Sciences", "BFH", "Switzerland", "Bern", 1997, "Public University of Applied Sciences", ["Computer Science", "Engineering", "Business", "Technology"], "https://www.bfh.ch/en/"),
  u("Zurich University of Applied Sciences", "ZHAW", "Switzerland", "Winterthur", 2007, "Public University of Applied Sciences", ["Computer Science", "Engineering", "Business", "Data Science"], "https://www.zhaw.ch/en/"),

  /* ---------------- UAE ---------------- */
  u("University of Sharjah", "UOS", "UAE", "Sharjah", 1997, "Private Non-Profit University", ["Computer Science", "Engineering", "Business", "Medicine"], "https://www.sharjah.ac.ae/"),
  u("Ajman University", "AU", "UAE", "Ajman", 1988, "Private University", ["Information Technology", "Engineering", "Business", "Computer Science"], "https://www.ajman.ac.ae/"),
  u("University of Dubai", "UD", "UAE", "Dubai", 1997, "Private University", ["Information Technology", "Business", "Computer Science", "Cybersecurity"], "https://ud.ac.ae/"),
  u("Al Ain University", "AAU", "UAE", "Al Ain", 2005, "Private University", ["Computer Science", "Engineering", "Business", "Information Technology"], "https://aau.ac.ae/en/"),
  u("Middlesex University Dubai", "MDX", "UAE", "Dubai", 2005, "Private Branch Campus", ["Computer Science", "Information Technology", "Business", "Cybersecurity"], "https://www.mdx.ac.ae/"),
  u("Heriot-Watt University Dubai", "HWU", "UAE", "Dubai", 2005, "Private Branch Campus", ["Computer Science", "Data Science", "Engineering", "Business"], "https://www.hw.ac.uk/dubai/"),
  u("Canadian University Dubai", "CUD", "UAE", "Dubai", 2006, "Private University", ["Computer Science", "Information Technology", "Engineering", "Business"], "https://www.cud.ac.ae/"),
];