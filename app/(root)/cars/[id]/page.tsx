import BookConfirmation from "@/components/BookConfirmation";
import DriverForm from "@/components/DriverForm";
import FullCarDetail from "@/components/FullCarDetail";
import PaymentOption from "@/components/PaymentOption";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

const CarDetailsPage = () => {
  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid justify-between grid-cols-1 md:grid-cols-2 2xl:max-w-7xl h-[100vh] ">
        <Image
          src={"/assets/images/hero.png"}
          alt="hero Image"
          width={500}
          height={1000}
          className="min-h-[300px] object-cover object-center"
        />
        <Tabs defaultValue="account" className="w-[400px] m-8">
          <TabsList>
            <TabsTrigger
              value="carDetail"
              className="w-full py-[11px] px-[28px] text-base rounded-full data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Car Details
            </TabsTrigger>
            <TabsTrigger
              value="drInfo"
              className="w-full py-[11px] px-[28px] text-base rounded-full data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Driver's Information
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              className="w-full m-3 py-[11px] px-[28px] text-base rounded-full data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Payment
            </TabsTrigger>
            <TabsTrigger
              value="confirmation"
              className="w-full py-[11px] px-[28px] text-base rounded-full data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Confirmation
            </TabsTrigger>
          </TabsList>
          <TabsContent value="carDetail">
            <FullCarDetail />
          </TabsContent>
          <TabsContent value="drInfo">
            <DriverForm/>
          </TabsContent>
          <TabsContent value="payment">
            <PaymentOption/>
          </TabsContent>
          <TabsContent value="confirmation">
            <BookConfirmation/>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CarDetailsPage;
