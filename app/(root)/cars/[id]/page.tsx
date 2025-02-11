"use client";
import BookConfirmation from "@/components/BookConfirmation";
import DriverForm from "@/components/DriverForm";
import FullCarDetail from "@/components/FullCarDetail";
import PaymentOption from "@/components/PaymentOption";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React, { useState } from "react";

const CarDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("carDetail");
  const [enabledTabs, setEnabledTabs] = useState({
    carDetail: true,
    drInfo: false,
    payment: false,
    confirmation: false,
  });

  const handleNext = (nextTab: string) => {
    setEnabledTabs(prev => ({ ...prev, [nextTab]: true }));
    setActiveTab(nextTab);
  };

  return (
    <section className="relative top-16 w-full h-[100vh]">
      <Tabs
        defaultValue="carDetail"
        value={activeTab}
        onValueChange={handleNext}
        className=" py-5 md-py-10"
      >
        <div className="flex bg-primary-50 bg-dotted-pattern bg-cover bg-center border-[1px] border-gray-200 py-5  md:p-10  sm:text-left ">
          <TabsList className=" wrapper gap-5 py-5 hidden md:flex ">
            <Image
              src={"/car-logo.png"}
              alt="car logo"
              width={100}
              height={100}
              className="min-h-[30px] object-cover object-center hidden md:block"
            />
            <TabsTrigger
              value="carDetail"
              className="w-full py-[11px] px-[28px] md:text-base text-xs font-bold rounded-full data-[state=active]:bg-primary-blue data-[state=active]:text-white "
            >
              Car Details
            </TabsTrigger>
            <TabsTrigger
              value="drInfo"
              disabled={
                activeTab !== "drInfo" &&
                activeTab !== "payment" &&
                activeTab !== "confirmation"
              }
              className="md:w-full w-max py-[11px] px-[28px] md:text-base text-xs font-bold rounded-full data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Driver's Information
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              disabled={activeTab !== "payment" && activeTab !== "confirmation"}
              className="w-full m-3 py-[11px] px-[28px] md:text-base text-xs font-bold rounded-full data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Payment
            </TabsTrigger>
            <TabsTrigger
              value="confirmation"
              disabled={activeTab !== "confirmation"}
              className="w-full py-[11px] px-[28px] md:text-base text-xs font-bold rounded-full data-[state=active]:bg-primary-blue data-[state=active]:text-white"
            >
              Confirmation
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="wrapper grid justify-between grid-cols-1 md:grid-cols-2 2xl:max-w-7xl ">
          <Image
            src={"/model-icon.png"}
            alt="hero Image"
            width={500}
            height={100}
            className="min-h-[200px] object-cover object-center"
          />
          <TabsContent value="carDetail">
            <FullCarDetail
              onProceed={() => {
                setEnabledTabs((prev) => ({ ...prev, drInfo: true }));
                setActiveTab("drInfo");
              }}
            />
          </TabsContent>
          <TabsContent value="drInfo">
            <DriverForm 
              onNext={() => {
                handleNext("payment");
              }}
              onBack={() => {
                setActiveTab("carDetail");
              }}
            />
          </TabsContent>
          <TabsContent value="payment">
            <PaymentOption />
          </TabsContent>
          <TabsContent value="confirmation">
            <BookConfirmation />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default CarDetailsPage;
