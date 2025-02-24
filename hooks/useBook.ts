import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { createBooking } from "../lib/actions/book.action";
import { getUserId } from "@/lib/actions/user.actions";
import { Params } from "@/types";
import { toast } from "react-toastify";

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook must be used within a BookContextProvider");
  }
  const { data, dispatch } = context;

  const createNewBooking = async (bookingData: any) => {
    try {
      dispatch({ type: "CREATE_BOOK_START" });
      
      const userId  = await getUserId();

      console.log("bookingData", {user:userId,  ...bookingData});
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user:userId, ...bookingData}),
    });

    if (!response.ok) {
        throw new Error('Failed to create booking');
    }

    const newBooking = await response.json();

      dispatch({
        type: "CREATE_BOOK_SUCCESS",
        payload: newBooking,
      });

      toast.success("Booking created successfully");

      return newBooking;
    } catch (error: unknown) {
      dispatch({
        type: "CREATE_BOOK_ERROR",
        payload: (error as Error).message,
      });
      throw error;
    }
  };

  const updateExistingBooking = async (bookingId: string, updateData: any) => {
    try {
      dispatch({ type: "UPDATE_BOOK_START" });
      const updatedBooking = await fetch(`/api/booking/${bookingId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (!updatedBooking.ok) {
        throw new Error('Failed to update booking');
      }

      const result = await updatedBooking.json();

      dispatch({
        type: "UPDATE_BOOK_SUCCESS",
        payload: result,
      });
      toast.success("Payment Method selected successfully");

      return result;
    } catch (error: unknown) {
      dispatch({
        type: "UPDATE_BOOK_ERROR",
        payload: (error as Error).message,
      });
      throw error;
    }
  };

  return {
    bookings: data.bookings,
    loading: data.loading,
    error: data.error,
    createNewBooking,
    updateExistingBooking,
  };
};
