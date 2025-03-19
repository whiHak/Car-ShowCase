"use client";

import Image from "next/image";
import React from "react";
import { footerLinks } from "@/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Footer = () => {
  return (
    <motion.footer 
      className="flex flex-col text-black-100 mt-5 border-t border-gray-100"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer(0.1, 0.2)}
    >
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <motion.div 
          className="flex flex-col justify-start items-start gap-6"
          variants={fadeIn("right", "tween", 0.2, 0.5)}
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Image
              src="/logo.svg"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </motion.div>
          <motion.p className="text-base text-gray-700">
            Car Hub <br />
            All rights reserved 2025 &copy;
          </motion.p>
        </motion.div>
        <div className="footer__links">
          {footerLinks?.map((link, idx) => (
            <motion.div 
              key={link.title} 
              className="footer__link"
              variants={fadeIn("up", "tween", 0.2 + idx * 0.1, 0.5)}
            >
              <motion.h3 
                className="font-bold"
                whileHover={{ scale: 1.05, color: "#2B59FF" }}
                transition={{ duration: 0.2 }}
              >
                {link.title}
              </motion.h3>
              {link?.links?.map((item, linkIdx) => (
                <motion.div 
                  key={item.title}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + linkIdx * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <Link
                    href={item.url}
                    className="text-gray-500 hover:text-primary-blue transition-colors"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div 
        className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10"
        variants={fadeIn("up", "tween", 0.5, 0.5)}
      >
        <motion.p whileHover={{ scale: 1.02 }}>
          @2025 CarHub. All Rights Reserved.
        </motion.p>
        <div className="footer__copyrights-link">
          <motion.div whileHover={{ scale: 1.05, x: 2 }}>
            <Link href="/privacy-policy" className="text-gray-500 hover:text-primary-blue transition-colors">
              Privacy Policy
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, x: 2 }}>
            <Link href="/terms-of-use" className="text-gray-500 hover:text-primary-blue transition-colors">
              Terms of Use
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
}; 

export default Footer;
