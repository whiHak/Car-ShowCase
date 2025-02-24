import { connectToDatabase } from "../database";
import Book, { IBooking } from "../database/models/booking.model";
import { Types } from 'mongoose';

type CreateBookingParams = {
  fullName: string;
  email: string;
  phoneNo: string;
  FIN: string;
  licenseNumber: string;
  pickUpDate: string;
  returnDate: string;
  licenseValidtill: string;
  totalPrice: string;
  paymentStatus: string;
  user: string;
  car: string;
};

export const createBooking = async (data: CreateBookingParams) => {
  try {
    await connectToDatabase();
    
    const bookingData = {
      ...data,
      user: new Types.ObjectId(data.user),
      car: new Types.ObjectId(data.car)
    };

    console.log('Creating booking with data:', bookingData);

    const book = await Book.create(bookingData);
    const savedBook = await book.save();
    
    console.log('Saved book:', savedBook);
    
    return JSON.parse(JSON.stringify(savedBook));
  } catch (error) {
    console.error("Error in createBooking:", error);
    throw error;
  }
};

export const updateBooking = async (bookingId: string, updateData: Partial<CreateBookingParams>) => {
  try {
    await connectToDatabase();

    const updatedBook = await Book.findByIdAndUpdate(
      bookingId,
      { $set: updateData },
      { new: true } // This option returns the updated document
    );

    if (!updatedBook) {
      throw new Error('Booking not found');
    }

    return JSON.parse(JSON.stringify(updatedBook));
  } catch (error) {
    console.error("Error updating booking:", error);
    throw error;
  }
};
