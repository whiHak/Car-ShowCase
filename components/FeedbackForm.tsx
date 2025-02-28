"use client";
import { feedbackFormSchema } from "@/lib/validator";
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
import CustomButton from "./CustomButton";
import { Textarea } from "./ui/textarea";
import { ToastContainer } from "react-toastify";
import { createPost } from "@/lib/actions/post.actions";
import { toast } from "react-toastify";

const FeedbackForm = () => {
  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      feedback: "",
    },
  });

  async function onSubmit(values: z.infer<typeof feedbackFormSchema>) {
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        form.reset();
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" max-w-[700px] mx-auto relative top-40 flex flex-col justify- gap-5"
      >
        <div className="flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-5 md:flex-col">
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
                      className="input-field "
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
              name="feedback"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea
                      {...field}
                      className="bg-grey-50 h-[94px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-2xl p-medium-12 px-4 py-3 border-none focus-visible:ring-transparent"
                      placeholder="Write your feedback here..."
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
            title={
              form.formState.isSubmitting ? "Submitting..." : "Send Feedback"
            }
            btnType="submit"
            disabled={form.formState.isSubmitting}
            btnStyles="w-full gap-4 py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
          />
        </div>
      </form>
      <ToastContainer />
    </Form>
  );
};

export default FeedbackForm;
