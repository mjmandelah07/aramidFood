"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFoodItem = void 0;
const response_utility_1 = require("../utilities/response-utility");
const food_1 = __importDefault(require("../models/food"));
// Controller to handle adding a new food item
const addFoodItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, picture, price, category } = req.body;
        // Chech if the parameters are valid or empty
        if (!name || !description || !picture || !price || !category) {
            res
                .status(response_utility_1.STATUSCODE.BAD_REQUEST)
                .json((0, response_utility_1.errorResponse)(response_utility_1.STATUS.Error, "All fields are required"));
            return;
        }
        // Create a new food item
        const newFoodItem = new food_1.default({
            name,
            description,
            picture,
            price,
            category,
        });
        // Add the new food item to the database
        yield newFoodItem.save();
        const responseData = {
            message: "Food item added successfully",
            foodItem: newFoodItem,
        };
        res
            .status(response_utility_1.STATUSCODE.CREATED)
            .json((0, response_utility_1.successResponse)(response_utility_1.STATUS.Success, responseData));
    }
    catch (error) {
        console.error("Error adding food item:", error);
        res
            .status(response_utility_1.STATUSCODE.SERVER)
            .json((0, response_utility_1.errorResponse)(response_utility_1.STATUS.Error, "Internal Server Error"));
    }
});
exports.addFoodItem = addFoodItem;
