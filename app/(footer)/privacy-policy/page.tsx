"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fromTop } from '@/utils/motion';
import MotionWrapper from '@/components/MotionWrapper';
import Image from 'next/image';

const PrivacyPolicy = () => {
  return (
    <MotionWrapper className="padding-x py-10 mt-10">
      <motion.div
        variants={fromTop}
        className="relative mb-10 flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <motion.div 
          className="h-1 w-20 bg-primary-blue rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <motion.div 
          className="md:col-span-8 bg-white p-6 rounded-xl shadow-md"
          variants={fadeIn("right", "tween", 0.2, 0.5)}
        >
          <div className="space-y-6">
            <motion.div 
              variants={fadeIn("up", "tween", 0.3, 0.5)}
              className="border-b border-gray-100 pb-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-primary-blue">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed">
                We collect information to provide better services to our users. The types of information we collect include:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li><span className="font-medium">Personal Information:</span> Name, email address, phone number, and driver's license information.</li>
                <li><span className="font-medium">Payment Information:</span> Credit card details, billing address, and payment history.</li>
                <li><span className="font-medium">Usage Data:</span> How you interact with our services, rental history, and preferences.</li>
                <li><span className="font-medium">Device Information:</span> Hardware model, operating system, unique device identifiers, and mobile network information.</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeIn("up", "tween", 0.4, 0.5)}
              className="border-b border-gray-100 pb-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-primary-blue">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li>Process and manage car rentals</li>
                <li>Communicate with you about your rental</li>
                <li>Improve our services and develop new features</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Personalize your experience with recommendations</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeIn("up", "tween", 0.5, 0.5)}
              className="border-b border-gray-100 pb-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-primary-blue">3. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We use encryption to protect sensitive information transmitted online and also protect your information offline.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="bg-gray-100 p-2 rounded-full">
                  <Image src="/encryption.svg" alt="Encryption" width={24} height={24} />
                </motion.div>
                <span className="text-sm text-gray-600">256-bit encryption for all data transmissions</span>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.6, 0.5)}>
              <h2 className="text-2xl font-semibold mb-4 text-primary-blue">4. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of your personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Withdraw consent</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-4 space-y-6"
          variants={fadeIn("left", "tween", 0.4, 0.5)}
        >
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <motion.span 
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="inline-block mr-2 text-primary-blue"
              >
                🔒
              </motion.span>
              Data Protection
            </h3>
            <p className="text-gray-700 mb-4">
              Your privacy matters to us. We follow strict procedures to ensure your data is handled securely.
            </p>
            <motion.div 
              className="bg-blue-50 p-4 rounded-lg border border-blue-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-primary-blue font-medium mb-2">Did You Know?</h4>
              <p className="text-sm text-gray-600">
                You can request a copy of all data we hold about you at any time by contacting our support team.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="bg-gradient-to-br from-primary-blue to-blue-700 p-6 rounded-xl shadow-md text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Our DPO</h3>
            <p className="mb-4 opacity-90">
              Have questions about your data? Our Data Protection Officer is here to help:
            </p>
            <motion.a 
              href="mailto:privacy@carhub.com" 
              className="flex items-center text-white"
              whileHover={{ x: 5 }}
            >
              <span className="mr-2">📧</span> privacy@carhub.com
            </motion.a>
          </motion.div>

          <motion.div 
            className="relative h-60 rounded-xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/hero.png" 
              alt="Data privacy" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-white font-bold text-lg">Your Data, Your Control</h3>
              <p className="text-white text-sm opacity-90">We respect your privacy rights</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
        variants={fadeIn("up", "tween", 0.7, 0.5)}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Last Updated: May 2023</h2>
        <p className="text-gray-600 text-center">
          This privacy policy may be changed at any time without prior notice. We encourage you to periodically review this page for the latest information on our privacy practices.
        </p>
        <div className="flex justify-center mt-6">
          <motion.button 
            className="px-6 py-2 bg-primary-blue text-white rounded-full font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Full Policy (PDF)
          </motion.button>
        </div>
      </motion.div>
    </MotionWrapper>
  );
};

export default PrivacyPolicy; 