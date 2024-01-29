import { Request, Response } from "express";
import {
  STATUSCODE,
  STATUS,
  successResponse,
  errorResponse,
} from "../utilities/response-utility";
import Food from "../models/food";

// Controller to handle adding a new food item
const addFoodItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, picture, price, category } = req.body;

    // Chech if the parameters are valid or empty
    if (!name || !description || !picture || !price || !category) {
      res
        .status(STATUSCODE.BAD_REQUEST)
        .json(errorResponse(STATUS.Error, "All fields are required"));
      return;
    }

    // Create a new food item
    const newFoodItem = new Food({
      name,
      description,
      picture,
      price,
      category,
    });

    // Add the new food item to the database
    await newFoodItem.save();

    const responseData = {
      message: "Food item added successfully",
      foodItem: newFoodItem,
    };

    res
      .status(STATUSCODE.CREATED)
      .json(successResponse(STATUS.Success, responseData));
  } catch (error) {
    console.error("Error adding food item:", error);
    res
      .status(STATUSCODE.SERVER)
      .json(errorResponse(STATUS.Error, "Internal Server Error"));
  }
};

export { addFoodItem };
