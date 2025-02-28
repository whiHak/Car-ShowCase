import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CancelReservation } from "./CancelReservation";
import CheckoutButton from "./CheckoutButton";
import { updateBooking } from "@/lib/actions/book.action";
import PickupLocation from "./PickupLocation";

const Card = async ({ book }: { book: any }) => {
  if (book._id) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${process.env.CHAPA_SECRET_KEY}`);
    const paymentResponse = await fetch(
      `https://api.chapa.co/v1/transaction/verify/${book.tx_ref}`,
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      }
    );
    const chapaRespose = await paymentResponse.json();
    if(chapaRespose?.data?.status === "success"){
      await updateBooking(book._id, {paymentStatus: "paid"})
    }
  }

  return book._id ? (
    <div className="group relative top-16 flex min-h-[280px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[338px] m-5">
      <div
        style={{ backgroundImage: `url(${book?.car?.imageUrl1})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      >
        {book?.paymentStatus === "pending" && (<div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href="">
            <CancelReservation book={book} />
          </Link>
        </div>)}
      </div>

      <div className="flex min-h-[130px] flex-col gap-3 p-5 md:gap-4">
        <div className="flex w-max gap-2">
          <span className="p-semibold-14 rounded-full bg-green-100 px-4 py-1 text-green-60">
            {`${book?.totalPrice} Br`}
          </span>

          <div className="flex w- rounded-full bg-grey-500/10 px-1 py-1">
            <Image
              src="/assets/icons/dollar.svg"
              alt="location"
              width={17}
              height={17}
              className=""
            />
            <p className="p-semibold-14 text-grey-500 px-1 line-clamp-1 capitalize">
              {`${book?.paymentStatus}`}
            </p>
          </div>
        </div>

        <Link href={`/my-cars/${book?._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
            {book?.car?.make} {book?.car?.model}
          </p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600 line-clamp-1">
            {book?.fullName}
          </p>

          <div className="flex gap-2 ">
            <div className="text-primary-blue text-nowrap">
              {book?.paymentStatus === "pending" ? (
                <CheckoutButton book={book} />
              ) : (
                <PickupLocation/>
              )}
            </div>
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow"
              width={10}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="relative top-16 flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] py-28 text-center">
      <h3 className="p-bold-20 md:h5-bold ml-24">No Reservation Yet !!!</h3>
      <Link href="/">
        <p className="p-regular-14 text-primary-blue ml-24">Book your own Car first!!!</p>
      </Link>
    </div>
  );
};

export default Card;
