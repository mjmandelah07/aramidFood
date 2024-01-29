import mongoose, { Document, Schema } from "mongoose";

interface IFood extends Document {
  name: string;
  description: string;
  picture: string;
  price: number;
  category: string;
}

// Schema for the food items
const foodSchema = new Schema<IFood>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  picture: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
});

const Food = mongoose.model<IFood>("Food", foodSchema);

export default Food;