import { model, models, Schema } from "mongoose";

export interface ICar extends Document {
  make: string;
  model: string;
  drive: string;
  fuel: string;
  plate: string;
  price: number;
  cylinder: number;
  year: number;
  imageUrl1: string;
  imageUrl2?: string;
  imageUrl3?: string;
  imageUrl4?: string;
}

const CarSchema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  drive: { type: String, required: true },
  fuel: { type: String, required: true },
  plate: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  cylinder: { type: Number, required: true },
  year: { type: Number, required: true },
  imageUrl1: { type: String, required: true },
  imageUrl2: { type: String },
  imageUrl3: { type: String },
  imageUrl4: { type: String },
});

const Car = models.Car || model("Car", CarSchema);
export default Car;