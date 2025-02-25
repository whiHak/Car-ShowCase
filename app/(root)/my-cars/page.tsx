import React from "react";
import Link from "next/link";
import { getUserId } from "@/lib/actions/user.actions";
import { getBooksByUserId } from "@/lib/actions/book.action";
import Card from "@/components/Card";
import { ToastContainer } from "react-toastify";

const MyCars = async () => {
  const userId = await getUserId();
  const books = await getBooksByUserId(userId);
  // console.log(books);

  return (
    <div className="h-screen">
      <section className="relative top-16 bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:p-5">
        <h3 className="wrapper h3-bold text-center sm:text-left">My Cars</h3>
      </section>
      
      <div className="max-w-7xl m-0 md:mx-10 flex flex-wrap gap-5" >
        {books.length > 0 ?  books.map((book: any) => (
            <Card book={book}  key={book._id}/>
        )) : (
          <Card book={{}} />
        )}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default MyCars;
