"use client";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

interface PaymentOptionProps {
  onNext: () => void;
  onBack: () => void;
}

const PaymentOption = ({ onNext, onBack }: PaymentOptionProps) => {
  const [selectedOption, setSelectedOption] = useState("");

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
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="p-4 w-full flex justify-between mx-auto bg-primary-50 rounded-xl shadow-md">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">TOYOTA COROLLA</h1>
            <p className="text-sm">All your desktop or laptop needs</p>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <p className="text-lg">
              PRICE: <span className="font-bold">23 Birr/DAY</span>
            </p>
            <p className="text-lg">
              Driver: <span className="font-bold">Debebe K.</span>
            </p>
            <p className="text-lg">Made available</p>
            <p className="text-lg">
              Date: <span className="font-bold">May 30 to Dec 30</span>
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
          handleClick={onNext}
        />
      </div>
    </div>
  );
};

export default PaymentOption;
