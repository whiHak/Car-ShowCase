"use client"
import { IBooking } from "@/lib/database/models/booking.model";
import React, { createContext, useReducer } from "react";

interface BookState {
  bookings: IBooking[];
  loading: boolean;
  error: string | null;
}

interface BookContextType {
  data: BookState;
  dispatch: React.Dispatch<any>;
}

export const BookContext = createContext<BookContextType | undefined>(
  undefined
);

export const BookContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const INITIAL_STATE = {
    bookings: [],
    loading: false,
    error: null,
  };

  const bookReducer = (state: BookState, action: any) => {
    switch (action.type) {
      case "CREATE_BOOK_START":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "CREATE_BOOK_SUCCESS":
        return {
          ...state,
          bookings: [...state.bookings, action.payload],
          loading: false,
        };
      case "CREATE_BOOK_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case "UPDATE_BOOK_START":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "UPDATE_BOOK_SUCCESS":
        return {
          ...state,
          bookings: state.bookings.map(booking => 
            booking._id === action.payload._id ? action.payload : booking
          ),
          loading: false,
        };
      case "UPDATE_BOOK_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(bookReducer, INITIAL_STATE);

  return React.createElement(
    BookContext.Provider,
    { value: { data: state, dispatch } },
    children
  );
};
