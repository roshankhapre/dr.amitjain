import React from "react";
import BookAppointmentForm from "./BookAppointmentForm";
import Help from "./Help";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import TreatmentServices from "./TreatmentServices";
import DrAmitJainSection from "./DrAmitJainSection ";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <DrAmitJainSection />
      <Help />
      <TreatmentServices />
      <Testimonials />
      <BookAppointmentForm />
    </div>
  );
};
