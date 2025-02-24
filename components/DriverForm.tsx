"use client";
import { driverFormSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import CustomButton from "./CustomButton";
import { useBook } from "@/hooks/useBook";
import { BookContext } from "@/context/BookContext";
import { auth } from "@clerk/nextjs/server";
import { getUserId } from "@/lib/actions/user.actions";

interface DriverFormProps {
  onNext: () => void;
  onBack: () => void;
  car: any;
}

const DriverForm = ({ onNext, onBack, car }: DriverFormProps) => {
  const { createNewBooking, loading, error, bookings } = useBook();
  console.log(bookings);

  
  const form = useForm<z.infer<typeof driverFormSchema>>({
    resolver: zodResolver(driverFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNo: "",
      licenseNumber: "",
      FIN: "",
    },
  });
  
  async function onSubmit(values: z.infer<typeof driverFormSchema>) {
    try {
      
      const defaultValues = {
        FIN: "",
        email: "",
        fullName: "",
        licenseNumber: "",
        phoneNo: "",
        pickUpDate: "",
        returnDate: "",
        licenseValidtill: "",
        totalPrice: "0",
        paymentStatus: "pending",
      };

      const pickupDate = new Date(values.pickUpDate);
    const returnDate = new Date(values.returnDate);
    const diffTime = Math.abs(returnDate.getTime() - pickupDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Calculate total price (car price * number of days)
    const carPrice = parseFloat(car?.price || "0");
    const totalPrice = (carPrice * diffDays).toString();

  
      const formattedValues = {
        ...values,
        pickUpDate: values.pickUpDate ? values.pickUpDate.toISOString() : defaultValues.pickUpDate,
        returnDate: values.returnDate ? values.returnDate.toISOString() : defaultValues.returnDate,
        totalPrice,
        car:car._id ,
      };
      // Merge form values with default values
      const completeValues = { ...defaultValues, ...formattedValues };
      console.log(completeValues);
  
      // Call createNewBooking with the complete values
      await createNewBooking(completeValues);
      console.log(bookings);
      onNext();
    } catch (error) {
      console.error("Error creating booking:", error);
      // Handle error if needed
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-full flex flex-col justify-between gap-5"
      >
        <div className="flex flex-col justify-between gap-5">
          <h3 className="wrapper h3-bold text-center sm:text-left">
            Driver's Detail
          </h3>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Full Name"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="phoneNo"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="FIN"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Fayda ID Number"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="pickUpDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                      <Image
                        src="/assets/icons/calendar.svg"
                        alt="calender"
                        width={24}
                        height={24}
                        className="filter-grey"
                      />
                      <p className="ml-3 whitespace-nowrap text-grey-600 p-regular-14">
                        Pickup date:{" "}
                      </p>
                      <DatePicker
                        selected={field.value}
                        onChange={(date: Date | null) => {
                          if (date) field.onChange(date);
                        }}
                        showTimeSelect
                        timeInputLabel="Time: "
                        dateFormat="MM/dd/yyyy h:mm aa"
                        wrapperClassName="datePicker md:p-medium-12 p-semibold-14"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="returnDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                      <Image
                        src="/assets/icons/calendar.svg"
                        alt="calender"
                        width={24}
                        height={24}
                        className="filter-grey"
                      />
                      <p className="ml-3 whitespace-nowrap text-grey-600 p-regular-14">
                        Return date:{" "}
                      </p>
                      <DatePicker
                        selected={field.value}
                        onChange={(date: Date | null) => {
                          if (date) field.onChange(date);
                        }}
                        showTimeSelect
                        timeInputLabel="Time: "
                        dateFormat="MM/dd/yyyy h:mm aa"
                        wrapperClassName="datePicker md:p-medium-12 p-semibold-14"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
          <FormField
              control={form.control}
              name="licenseNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Licence Number"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="licenseValidtill"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Licence Valid Until"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 md:flex-row my-4">
          <CustomButton
            title="Back"
            btnStyles="w-full md:w-max flex-row-reverse gap-4 py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/left-arrow.png"
            handleClick={onBack}
          />
          <CustomButton
            title={
              form.formState.isSubmitting
                ? "Submitting..."
                : "Continue to Payment"
            }
            btnType="submit"
            disabled={form.formState.isSubmitting}
            btnStyles="w-full md:w-max gap-4 py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
          />
        </div>
      </form>
    </Form>
  );
};

export default DriverForm;
