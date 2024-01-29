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
require("dotenv").config();
const mongoose_1 = __importDefault(require("mongoose"));
// Retrieve MongoDB connection URL from environment variable
const mongodbURI = process.env.DB_URL;
// Check if mongodbURI is defined before connecting
const connectWithMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!mongodbURI) {
            throw new Error("MongoDB connection URL is not defined");
        }
        const connection = yield mongoose_1.default.connect(mongodbURI);
        // MongoDB connected successfully
        console.log("MongoDB connected successfully");
    }
    catch (err) {
        // Handle MongoDB connection error
        console.error("MongoDB connection error:", err.message);
    }
});
exports.default = connectWithMongo;
