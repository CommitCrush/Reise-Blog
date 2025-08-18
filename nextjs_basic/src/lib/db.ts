import mongoose, { Mongoose } from 'mongoose';

interface Database {
    connect: Mongoose | null;
    promise: Promise<Mongoose | null>;
}

// Create a global connection for mongoose
const globalForMongoose = globalThis as unknown as { mongoose: Database };

// Create a new connection
const uri = process.env.MONGODB_URL as string;


// Check if the URI is defined
if (!uri) {
    throw new Error('❌ MONGO_URL ist nicht definiert in .env.local');
}

// If the connection is already established, return it
const cachedPromise = globalForMongoose.mongoose || { connect: null, promise: null };

// If the connection is not established, create a new one
if (!globalForMongoose.mongoose) {
    globalForMongoose.mongoose = cachedPromise;
}

// Function to connect to the database
export async function connectDB(): Promise<Mongoose> {
  if (cachedPromise.connect) return cachedPromise.connect;

  if (!cachedPromise.promise) {
    cachedPromise.promise = mongoose.connect(uri, {
        bufferCommands: false,
    })
    .then((mongoose) => mongoose)
  }
   try {
    cachedPromise.connect = await cachedPromise.promise;
  } catch (err) {
    cachedPromise.promise = Promise.reject(err);
    throw err;
  }
  if (!cachedPromise.connect) {
    throw new Error('❌ Mongoose connection failed');
  }
  return cachedPromise.connect;
}
