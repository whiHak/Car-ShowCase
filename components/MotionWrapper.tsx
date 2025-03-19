"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  staggerDelay?: number;
  staggerChildrenDelay?: number;
}

const MotionWrapper = ({
  children,
  className = "",
  id = "",
  staggerDelay = 0.5,
  staggerChildrenDelay = 0.1,
}: MotionWrapperProps) => {
  return (
    <motion.div
      variants={staggerContainer(staggerChildrenDelay, staggerDelay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper; 