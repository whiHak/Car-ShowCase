"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {

  const handleScroll = () => {
    const element = document.getElementById("cars-section");
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book and Rent -- quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        
        <CustomButton
          title = "Explore Cars"
          btnStyles="bg-primary-blue text-white rounded-full mt-10"
          btnType="button"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay"/>
      </div>
    </div>
  );
};

export default Hero;
