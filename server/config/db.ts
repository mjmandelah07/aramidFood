require("dotenv").config();
import mongoose from "mongoose";

// Retrieve MongoDB connection URL from environment variable
const mongodbURI: string | undefined = process.env.DB_URL;

// Check if mongodbURI is defined before connecting
const connectWithMongo = async (): Promise<void> => {
  try {
    if (!mongodbURI) {
      throw new Error("MongoDB connection URL is not defined");
    }

    const connection = await mongoose.connect(mongodbURI);

    // MongoDB connected successfully
    console.log("MongoDB connected successfully");
  } catch (err: any) {
    // Handle MongoDB connection error
    console.error("MongoDB connection error:", err.message);
  }
};

export default connectWithMongo;
