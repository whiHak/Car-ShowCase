"use client";

import React from "react";
import CustomButton from "./CustomButton";

interface FullCarDetailProps {
  onProceed: () => void
}

const FullCarDetail = ({onProceed}:FullCarDetailProps) => {
  return (
    <div className="h-full w-full flex justify-between flex-col gap-3">
      <h3 className="wrapper h3-bold text-center sm:text-left">
          Car's Full Detail
        </h3>
      <div>
        <div className="relative flex justify-between gap-5 text-right m-4">
          <h4 className="text-grey captalize">Make</h4>
          <p className="text-black-100 font-semibold">Honda</p>
        </div>
        <div className="relative flex justify-between gap-5 text-right m-4">
          <h4 className="text-grey captalize">Make</h4>
          <p className="text-black-100 font-semibold">Honda</p>
        </div>
        <div className="relative flex justify-between gap-5 text-right m-4">
          <h4 className="text-grey captalize">Make</h4>
          <p className="text-black-100 font-semibold">Honda</p>
        </div>
        <div className="relative flex justify-between gap-5 text-right m-4">
          <h4 className="text-grey captalize">Make</h4>
          <p className="text-black-100 font-semibold">Honda</p>
        </div>
        <div className="relative flex justify-between gap-5 text-right m-4">
          <h4 className="text-grey captalize">Make</h4>
          <p className="text-black-100 font-semibold">Honda</p>
        </div>
        <div className="relative flex justify-between gap-5 text-right m-4">
          <h4 className="text-grey captalize">Make</h4>
          <p className="text-black-100 font-semibold">Honda</p>
        </div>
        <div className="relative flex justify-between gap-5 text-right m-4">
          <h4 className="text-grey captalize">Make</h4>
          <p className="text-black-100 font-semibold">Honda</p>
        </div>
      </div>  
      <div className="flex justify-end w-full">
        <CustomButton
          title="Proceed to Booking"
          btnStyles="md:w-max w-full   py-[16px] md:gap-4 rounded-full bg-primary-blue"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={onProceed}
        />
      </div>
    </div>
  );
};

export default FullCarDetail;
