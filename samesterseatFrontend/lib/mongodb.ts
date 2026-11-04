import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB_NAME || "campusseat";

declare global {
    var mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!uri) {
    console.warn("MONGODB_URI is not configured.");
}

const options = {};

let clientPromise: Promise<MongoClient>;

if (uri) {
    if (process.env.NODE_ENV === "development") {
        if (!global.mongoClientPromise) {
            global.mongoClientPromise = new MongoClient(uri, options).connect();
        }
        clientPromise = global.mongoClientPromise;
    } else {
        clientPromise = new MongoClient(uri, options).connect();
    }
} else {
    clientPromise = new Promise<MongoClient>(() => undefined);
}

export async function getDatabase(): Promise<Db> {
    if (!uri) throw new Error("MONGODB_URI is not configured.");
    const client = await clientPromise;
    return client.db(databaseName);
}
