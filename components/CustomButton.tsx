"use client";

import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import React from 'react'

const CustomButton = ({title, btnStyles, btnType, textStyles,rightIcon, disabled,  handleClick}: CustomButtonProps) => {
  return ( 
    <button
      disabled={disabled}
      type={btnType || "button"}
      className={`custom-btn ${btnStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && <Image src={`${rightIcon}`} alt='butto icon' width={20} height={20} />}
    </button>
  )
}

export default CustomButton