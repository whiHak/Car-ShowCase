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
import { useState } from "react";
import CustomButton from "./CustomButton";

interface DriverFormProps {
  onNext: () => void;
  onBack: () => void;
}

const DriverForm = ({ onNext, onBack }: DriverFormProps) => {
  const form = useForm<z.infer<typeof driverFormSchema>>({
    resolver: zodResolver(driverFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      pickupDate: null,
      returnDate: null,
    },
  });

  async function onSubmit(values: z.infer<typeof driverFormSchema>) {
    // Do something with the form values.
    console.log(values);
    // If form is valid, navigate to payment tab
    onNext();
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
              name="pickupDate"
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <CustomButton
            title="Back"
            btnStyles="w-full md:w-max flex-row-reverse gap-4 py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/left-arrow.png"
            handleClick={onBack}
          />
          <CustomButton
            title={
              form.formState.isSubmitting ? "Submitting..." : "Continue to Payment"
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
