"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fromTop, staggerContainer } from '@/utils/motion';
import MotionWrapper from '@/components/MotionWrapper';
import Image from 'next/image';

const TermsOfUse = () => {
  return (
    <MotionWrapper className="padding-x py-10 mt-10">
      <motion.div
        variants={fromTop}
        className="relative mb-10 flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Use</h1>
        <motion.div 
          className="h-1 w-20 bg-primary-blue rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <motion.div 
          className="col-span-2 bg-white p-6 rounded-xl shadow-md"
          variants={fadeIn("right", "tween", 0.2, 0.5)}
        >
          <div className="space-y-6">
            <motion.div variants={fadeIn("up", "tween", 0.3, 0.5)}>
              <h2 className="text-2xl font-semibold mb-4 text-primary-blue">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using CarHub's services, you agree to be bound by these Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.4, 0.5)}>
              <h2 className="text-2xl font-semibold mb-4 text-primary-blue">2. Use License</h2>
              <p className="text-gray-700 leading-relaxed">
                Permission is granted to temporarily use CarHub's services for personal, non-commercial purposes only. This is the grant of a license, not a transfer of title, and under this license, you may not:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.5, 0.5)}>
              <h2 className="text-2xl font-semibold mb-4 text-primary-blue">3. Rental Policies</h2>
              <p className="text-gray-700 leading-relaxed">
                All car rentals are subject to our rental policies. You must be at least 21 years old to rent a car and possess a valid driver's license. A credit card in the renter's name is required for security deposit purposes.
              </p>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.6, 0.5)}>
              <h2 className="text-2xl font-semibold mb-4 text-primary-blue">4. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                CarHub services are provided "as is". CarHub makes no warranties, expressed or implied, and hereby disclaims all warranties, including without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 space-y-6"
          variants={fadeIn("left", "tween", 0.4, 0.5)}
        >
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-700 mb-4">If you have any questions about our Terms of Use, please contact us:</p>
            <ul className="space-y-2">
              <motion.li 
                className="flex items-center text-gray-700"
                whileHover={{ x: 5, color: "#2B59FF" }}
              >
                <span className="mr-2">📧</span> support@carhub.com
              </motion.li>
              <motion.li 
                className="flex items-center text-gray-700"
                whileHover={{ x: 5, color: "#2B59FF" }}
              >
                <span className="mr-2">📱</span> +251 (09) 12123434
              </motion.li>
              <motion.li 
                className="flex items-center text-gray-700"
                whileHover={{ x: 5, color: "#2B59FF" }}
              >
                <span className="mr-2">🏢</span> 123 Car Street, Addis Ababa City
              </motion.li>
            </ul>
          </div>

          <motion.div 
            className="relative h-60 rounded-xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/hero.png" 
              alt="Car rental" 
              fill 
              className="object-cover" 
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
        variants={fadeIn("up", "tween", 0.7, 0.5)}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Last Updated: May 2023</h2>
        <p className="text-gray-600 text-center">
          These terms may be changed at any time without prior notice. It is your responsibility to check periodically for updates.
        </p>
      </motion.div>
    </MotionWrapper>
  );
};

export default TermsOfUse; 