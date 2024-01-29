import express from "express";
import { addFoodItem } from "../controllers/foodController";

const router = express.Router();

// Route to handle adding a new food item
router.post("/add", addFoodItem);

export default router;
