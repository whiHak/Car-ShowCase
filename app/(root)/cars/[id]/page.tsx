"use client";
import BookConfirmation from "@/components/BookConfirmation";
import DriverForm from "@/components/DriverForm";
import FullCarDetail from "@/components/FullCarDetail";
import PaymentOption from "@/components/PaymentOption";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCarById } from "@/lib/actions/car.action";
import { Params } from "@/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify'

const CarDetailsPage = ({ params }: Params) => {
  const [car, setCar] = useState({} as any);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCar = async () => {
      try {
        const resolvedParams = await Promise.resolve(params);
        const carId = resolvedParams.id;
        
        if (!carId) return;

        setIsLoading(true);
        setError(null);

        const res = await fetch(`/api/cars/${carId}`, {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        setCar(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch car details');
      } finally {
        setIsLoading(false);
      }
    };

    getCar();
  }, [params]);

  const [activeTab, setActiveTab] = useState("carDetail");
  const [enabledTabs, setEnabledTabs] = useState({
    carDetail: true,
    drInfo: false,
    payment: false,
    confirmation: false,
  });

  const handleNext = (nextTab: string) => {
    setEnabledTabs((prev) => ({ ...prev, [nextTab]: true }));
    setActiveTab(nextTab);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section className="relative top-16 w-full ">
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
        <div className="wrapper h-full grid justify-between grid-cols-1 md:grid-cols-2 2xl:max-w-7xl ">
          <Image
            src={car?.imageUrl || "/demo-car.webp"}
            alt={`${car?.make} ${car?.model}` || "Car Image"}
            width={500}
            height={100}
            className="min-h-[200px] object-cover object-center"
          />
          <TabsContent value="carDetail">
            <FullCarDetail
              car={car}
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
              car={car}
            />
          </TabsContent>
          <TabsContent value="payment">
            <PaymentOption
              onNext={() => {
                setEnabledTabs((prev) => ({ ...prev, confirmation: true }));
                setActiveTab("confirmation");
              }}
              onBack={() => {
                setActiveTab("drInfo");
              }}
              car={car}
            />
          </TabsContent>
          <TabsContent value="confirmation">
            <BookConfirmation />
          </TabsContent>
        </div>
      </Tabs>
      <ToastContainer/>
    </section>
  );
};

export default CarDetailsPage;
