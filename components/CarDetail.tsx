"use client";

import { CarDetailProps } from "@/types";
import { generateCarImageURL } from "@/utils";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import CustomButton from "./CustomButton";
import { SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const CarDetail = ({ isOpen, closeModal, car }: CarDetailProps) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/cars/${car.id}`)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 ">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 bg-primary-blue-100 rounded-full p-2"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageURL(car)}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageURL(car, "29")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageURL(car, "33")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageURL(car, "13")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make}
                      {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car)
                        .slice(3, 9)
                        .map(([key, value]) => (
                          <div
                            className="relative w-full flex justify-between gap-5 text-right"
                            key={key}
                          >
                            <h4 className="text-grey captalize">
                              {key.split("_").join(" ")}
                            </h4>
                            <p className="text-black-100 font-semibold">
                              {value}
                            </p>
                          </div>
                        ))}
                    </div>
                      <CustomButton
                        title="Proccced to Booking"
                        btnStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={handleClick}
                      />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetail;
