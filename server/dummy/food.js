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
const food_1 = __importDefault(require("../models/food"));
const mongoose_1 = __importDefault(require("mongoose"));
const performOperations = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Drop the existing 'foods' collection if it exists
        yield mongoose_1.default.connection.collections["foods"].drop();
        console.log("Collection dropped successfully");
    }
    catch (error) {
        if (error.message !== "ns not found") {
            console.error("Error dropping collection:", error);
        }
    }
    // Create a new 'foods' collection and add values
    const pizza = new food_1.default({
        name: "Pizza",
        description: "Delicious pizza with various toppings",
        picture: "https://example.com/pizza.jpg",
        price: 10,
        category: "main course"
    });
    try {
        yield pizza.save();
        console.log("Pizza added successfully");
    }
    catch (error) {
        console.error("Error adding pizza:", error);
    }
});
exports.default = performOperations;
