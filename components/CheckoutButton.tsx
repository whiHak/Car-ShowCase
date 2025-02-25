import React, { useEffect, useState } from "react";

const CheckoutButton = ({book}: {book: any}) => {


  return (
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
      <input type="hidden" name="public_key" value={process.env.NEXT_PUBLIC_TEST_KEY} />
      <input type="hidden" name="tx_ref" value={`${book.tx_ref}`} />
      <input type="hidden" name="amount" value={`${Number(book.totalPrice)}`} />
      <input type="hidden" name="currency" value="ETB" />
      <input type="hidden" name="first_name" value={`${book.fullName}`} />
      <input type="hidden" name="last_name" value={``} />
      <input type="hidden" name="title" value={`${book.car.make} ${book.car.model}`} />
      <input type="hidden" name="description" value={``} />
      <input type="hidden" name="logo" value="https://github.com/whiHak/Car-ShowCase/blob/main/public/logo.svg" />
      <input type="hidden" name="callback_url" value={`${process.env.NEXT_PUBLIC_CHAPA_RETURN_URL}`} />
      <input type="hidden" name="return_url" value={`${process.env.NEXT_PUBLIC_CHAPA_RETURN_URL}`} />
      <button type="submit" className="button sm:w-fit">
        Pay Now 
      </button>
    </form>
  );
};

export default CheckoutButton;
