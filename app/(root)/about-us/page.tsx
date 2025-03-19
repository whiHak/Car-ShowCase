"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, fromTop, staggerContainer } from '@/utils/motion';
import MotionWrapper from '@/components/MotionWrapper';
import CustomButton from '@/components/CustomButton';

const AboutUs = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Cars in Fleet" },
    { number: "24/7", label: "Support" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  const team = [
    {
      name: "Betselot Abraham",
      role: "CEO & Founder",
      image: "/team1.jpg"
    },
    {
      name: "Abel Mekonen",
      role: "Operations Manager",
      image: "/team2.jpg"
    },
    {
      name: "Helen Tadesse",
      role: "Customer Success",
      image: "/team3.jpg"
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
              Our <span className="text-primary-blue">Story</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={fadeIn("up", "tween", 0.3, 0.5)}
            >
              Founded in 2020, CarHub has revolutionized the car rental industry by providing a seamless, user-friendly platform for car rentals. Our journey began with a simple mission: to make car rental accessible, transparent, and enjoyable for everyone.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeIn("up", "tween", 0.4, 0.5)}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <CustomButton
                  title="Learn More"
                  btnStyles="bg-primary-blue text-white rounded-full"
                  btnType="button"
                  handleClick={() => {}}
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
              alt="CarHub story"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow-md text-center"
              variants={fadeIn("up", "spring", index * 0.1, 0.5)}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-primary-blue mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-20">
        <motion.div
          className="bg-gradient-to-r from-primary-blue to-blue-700 rounded-2xl p-10 text-white"
          variants={fadeIn("up", "tween", 0.5, 0.8)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-blue-100 mb-6">
                To provide exceptional car rental services that exceed customer expectations through innovation, reliability, and outstanding customer service.
              </p>
              <motion.div 
                className="flex flex-wrap gap-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CustomButton
                  title="Join Our Team"
                  btnStyles="bg-white text-primary-blue rounded-full"
                  btnType="button"
                  handleClick={() => {}}
                />
              </motion.div>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/hero.png"
                alt="Our mission"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <motion.div
          className="text-center mb-16"
          variants={fromTop}
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind CarHub's success
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-xl p-6 shadow-md text-center"
              variants={fadeIn("up", "spring", index * 0.1, 0.5)}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <motion.div
          className="text-center mb-16"
          variants={fromTop}
        >
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md"
            variants={fadeIn("right", "tween", 0.2, 0.5)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Customer First</h3>
            <p className="text-gray-600">
              We prioritize our customers' needs and satisfaction above everything else.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md"
            variants={fadeIn("up", "tween", 0.3, 0.5)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We constantly strive to improve and innovate our services.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md"
            variants={fadeIn("left", "tween", 0.4, 0.5)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Integrity</h3>
            <p className="text-gray-600">
              We maintain the highest standards of honesty and transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="bg-gradient-to-r from-primary-blue to-blue-700 rounded-2xl p-10 text-white text-center"
        variants={fadeIn("up", "tween", 0.5, 0.8)}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Be part of our mission to revolutionize the car rental industry
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

export default AboutUs;