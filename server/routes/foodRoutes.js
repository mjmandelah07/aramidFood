"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foodController_1 = require("../controllers/foodController");
const router = express_1.default.Router();
// Route to handle adding a new food item
router.post("/add", foodController_1.addFoodItem);
exports.default = router;
