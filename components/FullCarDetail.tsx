"use client";

import React from "react";
import CustomButton from "./CustomButton";

interface FullCarDetailProps {
  onProceed: () => void;
  car: any;
}

const carDetailFields = [
  { label: "Make", key: "make" },
  { label: "Model", key: "model" },
  { label: "Drive Type", key: "drive" },
  { label: "Fuel Type", key: "fuel" },
  { label: "License Plate", key: "plate" },
  { label: "Price per Day", key: "price" },
  { label: "Cylinders", key: "cylinder" },
  { label: "Year", key: "year" },
];

const FullCarDetail = ({ onProceed, car }: FullCarDetailProps) => {
  return (
    <div className="h-full w-full flex justify-between flex-col gap-3">
      <h3 className="wrapper h3-bold text-center sm:text-left">
        Car's Full Detail
      </h3>
      <div>
        {carDetailFields.map((field) => (
          <div
            key={field.key}
            className="relative flex justify-between gap-5 text-right m-4"
          >
            <h4 className="text-grey capitalize">{field.label}</h4>
            <p className="text-black-100 font-semibold">
              {car?.[field.key] || "N/A"}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-end w-full">
        <CustomButton
          title="Proceed to Booking"
          btnStyles="md:w-max w-full py-[16px] md:gap-4 rounded-full bg-primary-blue"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={onProceed}
        />
      </div>
    </div>
  );
};

export default FullCarDetail;
