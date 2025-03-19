"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, fromTop } from '@/utils/motion';
import MotionWrapper from '@/components/MotionWrapper';
import CustomButton from '@/components/CustomButton';

const HowItWorks = () => {
  const steps = [
    {
      title: "Find Your Car",
      description: "Browse our extensive collection of cars and filter by make, model, price, and more to find your perfect match.",
      icon: "/magnifying-glass.svg",
      bgColor: "bg-blue-50"
    },
    {
      title: "Book Your Ride",
      description: "Select your pickup and drop-off dates, location, and any additional services you might need.",
      icon: "/steering-wheel.svg",
      bgColor: "bg-green-50"
    },
    {
      title: "Confirm Reservation",
      description: "Review all details, make payment securely, and receive instant confirmation of your booking.",
      icon: "/gas.svg",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Enjoy Your Drive",
      description: "Pick up your car at the scheduled time and enjoy your journey with our premium services.",
      icon: "/tire.svg",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <MotionWrapper className="padding-x py-10">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 0.5)}
            className="order-2 lg:order-1"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
              variants={fromTop}
            >
              How <span className="text-primary-blue">CarHub</span> Works
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={fadeIn("up", "tween", 0.3, 0.5)}
            >
              Renting a car has never been easier. Our streamlined process ensures you can find, book, and drive your ideal car in minutes, not hours.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeIn("up", "tween", 0.4, 0.5)}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <CustomButton
                  title="Browse Cars"
                  btnStyles="bg-primary-blue text-white rounded-full"
                  btnType="button"
                  handleClick={() => window.location.href = '/'}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <CustomButton
                  title="Contact Us"
                  btnStyles="bg-white border border-gray-300 text-gray-800 rounded-full"
                  btnType="button"
                  handleClick={() => {}}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-[300px] md:h-[450px] order-1 lg:order-2"
            variants={fadeIn("left", "tween", 0.3, 0.5)}
          >
            <Image
              src="/hero.png"
              alt="CarHub rental process"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
        
        <motion.div 
          className=" -bottom-5 left-0 right-0 flex justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="bg-white px-8 py-4 rounded-full shadow-lg flex items-center gap-2">
            <span className="text-primary-blue text-lg font-semibold">4.9</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500">from over 10,000 happy customers</span>
          </div>
        </motion.div>
      </section>
      
      {/* Process Steps */}
      <section className="mb-20">
        <motion.div
          className="text-center mb-16"
          variants={fromTop}
        >
          <h2 className="text-3xl font-bold mb-4">Simple 4-Step Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've simplified car rentals to make your experience seamless and enjoyable. Here's how it works:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className={`${step.bgColor} rounded-xl p-6 relative overflow-hidden shadow-sm border border-gray-100`}
              variants={fadeIn("up", "spring", index * 0.1, 0.5)}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute -right-6 -top-6 bg-white/20 w-20 h-20 rounded-full"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="relative z-10">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={24}
                    height={24}
                  />
                </div>
                
                <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium mb-3">
                  Step {index + 1}
                </span>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="mb-20">
        <motion.div
          className="text-center mb-16"
          variants={fromTop}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose CarHub?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the advantages that make us the preferred choice for car rentals:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            variants={fadeIn("right", "tween", 0.2, 0.5)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Fleet</h3>
            <p className="text-gray-600">
              Choose from our wide selection of well-maintained vehicles ranging from economy to luxury cars.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            variants={fadeIn("up", "tween", 0.3, 0.5)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Flexible Pricing</h3>
            <p className="text-gray-600">
              Transparent rates with no hidden fees. Choose from daily, weekly, or monthly rental plans.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            variants={fadeIn("left", "tween", 0.4, 0.5)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              Our dedicated customer service team is available round the clock to assist you with any inquiries.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <motion.section 
        className="bg-gradient-to-r from-primary-blue to-blue-700 rounded-2xl p-10 text-white text-center"
        variants={fadeIn("up", "tween", 0.5, 0.8)}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience CarHub?</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have chosen CarHub for their transportation needs.
        </p>
        
        <motion.div 
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CustomButton
            title="Get Started Today"
            btnStyles="bg-white text-primary-blue rounded-full font-bold text-lg py-3 px-8"
            btnType="button"
            handleClick={() => window.location.href = '/'}
          />
        </motion.div>
      </motion.section>
    </MotionWrapper>
  );
};

export default HowItWorks; 