"use client";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { useBook } from "@/hooks/useBook";
import { useRouter } from "next/navigation";

interface PaymentOptionProps {
  onNext: () => void;
  onBack: () => void;
  car: any;
}

const PaymentOption = ({ onNext, onBack, car }: PaymentOptionProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const { loading, error, bookings, updateExistingBooking } = useBook();
  const router = useRouter();

  const options = [
    { id: "chapa", label: "Chapa", imgsrc: "/assets/images/chapa.png" },
    { id: "awash", label: "Awash Bank", imgsrc: "/assets/images/awash.png" },
    {
      id: "telebirr",
      label: "Telebirr",
      imgsrc: "/assets/images/telebirr.png",
    },
    { id: "cbe", label: "CBE", imgsrc: "/assets/images/CBE.png" },
  ];

  const handleConfirmBooking = async () => {
    try {
      if (!selectedOption || !bookings.length) return;

      // Get the latest booking (assuming it's the one we want to update)
      const latestBooking = bookings[bookings.length - 1];

      // Update the booking with the selected payment method
      await updateExistingBooking(latestBooking._id, {
        paymentMethod: selectedOption,
        paymentStatus: "pending" // or any other status you want to set
      });

      // If successful, proceed to next step
      router.push("/my-cars")
    } catch (error) {
      console.error("Error updating booking with payment method:", error);
    }
  };

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const startMonth = months[start.getMonth()];
    const startDay = start.getDate();
    const endMonth = months[end.getMonth()];
    const endDay = end.getDate();
    
    return `${startMonth} ${startDay} to ${endMonth} ${endDay}`;
  };

  const PaymentCard = ({ option }: { option: (typeof options)[0] }) => (
    <div className="flex w-full space-x-3">
      <div className="p-4 mx-auto flex justify-between w-full max-h-14 bg-primary-50 rounded-full shadow-md">
        <div className="flex gap-2">
          <input
            type="radio"
            name="bank"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={() => setSelectedOption(option.id)}
            className="p-4"
          />
          <span className="text-sm">{option.label}</span>
        </div>
        <Image
          src={option.imgsrc}
          width={30}
          height={10}
          alt="payment option logo"
          className="w-max"
        />
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-6">
        <div className="p-4 w-full flex justify-between gap-3 mx-auto bg-primary-50 rounded-xl shadow-md">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold uppercase">{car.make}{" "}{car.model}</h1>
            <p className="text-sm text-green-500">Please Confirm the Information and</p>
            <p className="text-sm text-green-500">Select Your Payment Method</p>
          </div>
          <div className="flex flex-col justify-start gap-2 w-max ">
            <p className="text-lg w-max flex-nowrap">
              PRICE: <span className="font-bold">{bookings[bookings.length - 1].totalPrice} Birr</span>
            </p>
            <p className="text-lg ">
              Driver: <span className="font-bold capitalize">{bookings[bookings.length - 1].fullName}</span>
            </p>
            <p className="text-lg">
              Date: <span className="font-bold">
                {formatDateRange(
                  bookings[bookings.length - 1].pickUpDate,
                  bookings[bookings.length - 1].returnDate
                )}
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[options.slice(0, 2), options.slice(2, 4)].map(
            (columnOptions, index) => (
              <div key={index} className="space-y-2">
                {columnOptions.map((option) => (
                  <PaymentCard key={option.id} option={option} />
                ))}
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        <CustomButton
          title="Back"
          btnStyles="w-full md:w-max flex-row-reverse gap-4 py-[16px] rounded-full bg-primary-blue"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/left-arrow.png"
          handleClick={onBack}
        />
        <CustomButton
          title="Confirm Booking"
          btnType="submit"
          disabled={!selectedOption}
          btnStyles="w-full md:w-max gap-4 py-[16px] rounded-full bg-primary-blue"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={handleConfirmBooking}
        />
      </div>
    </div>
  );
};

export default PaymentOption;
