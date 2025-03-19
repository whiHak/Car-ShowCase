"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textReveal } from "@/utils/motion";
import MotionWrapper from "./MotionWrapper";

const Hero = () => {
  const handleScroll = () => {
    const element = document.getElementById("cars-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MotionWrapper className="hero">
      <div className="flex-1 pt-36 padding-x">
        <motion.h1 
          className="hero__title"
          variants={textReveal}
        >
          Find, Book and Rent -- quickly and easily!
        </motion.h1>

        <motion.p 
          className="hero__subtitle"
          variants={textReveal}
        >
          Streamline your car rental experience with our effortless booking
          process.
        </motion.p>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.3, 0.5)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CustomButton
            title="Explore Cars"
            btnStyles="bg-primary-blue text-white rounded-full mt-10"
            btnType="button"
            handleClick={handleScroll}
          />
        </motion.div>
      </div>
      <motion.div 
        className="hero__image-container"
        variants={fadeIn("left", "tween", 0.5, 0.8)}
      >
        <motion.div 
          className="hero__image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </motion.div>

        <motion.div 
          className="hero__image-overlay"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
      </motion.div>
    </MotionWrapper>
  );
};

export default Hero;
