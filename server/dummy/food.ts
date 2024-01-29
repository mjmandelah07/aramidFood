import Food from "../models/food";
import mongoose from "mongoose";

const performOperations = async (): Promise<void> => {

  try {
    // Drop the existing 'foods' collection if it exists
    await mongoose.connection.collections["foods"].drop();
    console.log("Collection dropped successfully");
  } catch (error: any) {
    if (error.message !== "ns not found") {
      console.error("Error dropping collection:", error);
    }
  }

  // Create a new 'foods' collection and add values
  const pizza = new Food({
    name: "Pizza",
    description: "Delicious pizza with various toppings",
    picture: "https://example.com/pizza.jpg",
    price: 10,
    category: "main course"
  });

  try {
    await pizza.save();
    console.log("Pizza added successfully");
  } catch (error) {
    console.error("Error adding pizza:", error);
  }
};

export default performOperations;