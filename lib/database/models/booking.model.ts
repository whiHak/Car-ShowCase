import { model, models, Schema } from "mongoose";

export interface IBooking extends Document {
  _id: string;
  tx_ref: string;
  car: { _id: string; make: string; model:string; price:string; imakeUrl1: string };
  user: { _id: string; fullName: string; email: string };
  fullName: string;
  email: string;
  phoneNo: string;
  faydaIdNumber: string;
  pickUpDate: string;
  returnDate: string;
  licenseNumber: string;
  licenseValidtill: string;
  pickUpLocation?: string;
  dropOffLocation?: string;
  totalPrice: number;
  paymentStatus: string;
  paymentMethod?: string;
  FIN: string;
  createdAt: Date;
  updatedAt?: Date;
}

const BookingSchema = new Schema({
  tx_ref: { type: String, required: true, unique: true },
  car: { type: Schema.Types.ObjectId, ref: "Car", required: true},
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  FIN: { type: String, required: true },
  phoneNo: { type: String, required: true },
  pickUpDate: { type: String, required: true },
  returnDate: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  licenseValidtill: { type: String, required: true },
  pickUpLocation: { type: String },
  dropOffLocation: { type: String },
  totalPrice: { type: String, required: true },
  paymentStatus: { type: String, required: true },
  paymentMethod: { type: String },
}, 
{ 
  timestamps: { createdAt: true, updatedAt: true },
  strict: true
});

const Book = models.Book || model("Book", BookingSchema);
export default Book;
