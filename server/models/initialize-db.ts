import mongoose from "mongoose";
import connectWithMongo from "../config/db.js";
import performOperations from "../dummy/food.js";

(async () => {
  try {
    await connectWithMongo();
    await performOperations();
    console.log("Tables created successfully");
  } catch (err: any) {
    console.error("Error creating tables:", err);
  }
})();
