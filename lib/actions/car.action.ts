import { connectToDatabase } from "../database";
import Car from "../database/models/car.model";
import mongoose from "mongoose";

export const getAllCars = async () => {
  try {
    await connectToDatabase();
    const cars = await Car.find();

    return JSON.parse(JSON.stringify(cars));
  } catch (error) {
    console.log(error);
  }
};

export const getCarById = async (id: any) => {
  try {
    await connectToDatabase();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid MongoDB ObjectId format");
    }

    const objectId = new mongoose.Types.ObjectId(id);

    const car = await Car.findById(objectId);

    if (!car) {
      throw new Error("Car not found");
    }

    return JSON.parse(JSON.stringify(car));
  } catch (error) {
    console.error("Error in getCarById:", error);
    throw error;
  }
};
