import React from "react";
import Link from "next/link";
import FeedbackForm from "@/components/FeedbackForm";

const Feedback = async () => {

  return (
    <div className="h-screen">
      <section className="relative top-16 bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:p-5">
        <h3 className="wrapper h3-bold text-center sm:text-left">Feedback</h3>
      </section>
      <FeedbackForm />
    </div>
  );
};

export default Feedback;
