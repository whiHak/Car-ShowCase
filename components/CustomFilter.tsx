"use client";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, buttonAnimation } from "@/utils/motion";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = (e:{title:string , value:string}) => {
    const newPathname = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathname);
  };

  return (
    <motion.div 
      className="w-fit"
      variants={fadeIn("up", "tween", 0.2, 0.5)}
      initial="hidden"
      animate="show"
    >
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <motion.div
            variants={buttonAnimation}
            whileHover="hover"
            whileTap="tap"
          >
            <Listbox.Button className="custom-filter__btn border-gray-200 rounded-full">
              <span>{selected.title}</span>
              <motion.div
                animate={{ rotate: 180 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/chevron-up-down.svg"
                  width={20}
                  height={20}
                  alt="chevron up down"
                  className="ml-4 object-contain"
                />
              </motion.div>
            </Listbox.Button>
          </motion.div>
          
          <AnimatePresence>
            <Listbox.Options className="custom-filter__options">
              {options.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Listbox.Option
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <motion.span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {option.title}
                      </motion.span>
                    )}
                  </Listbox.Option>
                </motion.div>
              ))}
            </Listbox.Options>
          </AnimatePresence>
        </div>
      </Listbox>
    </motion.div>
  );
};

export default CustomFilter;
