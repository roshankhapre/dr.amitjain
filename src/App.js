import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs.jsx";
import BookAppointmentForm from "./components/HomePage/BookAppointmentForm.jsx";
import Help from "./components/HomePage/Help.jsx";
import Hero from "./components/HomePage/Hero.jsx";
import Services from "./components/HomePage/Services.jsx";
import Testimonials from "./components/HomePage/Testimonials.jsx";
import TreatmentServices from "./components/HomePage/TreatmentServices.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import SexHealthPage from "./components/Services/SexHealthPage.jsx";
import HairFallPage from "./components/Services/HairFallPage.jsx";
import SkinCarePage from "./components/Services/SkinCarePage.jsx";
import PimpleTreatmentPage from "./components/Services/PimpleTreatmentPage.jsx";
import ContactUsPage from "./components/ContactUs/ContactUsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AboutUs />
      <Hero />
      <Help />
      <Services />
      <TreatmentServices />
      <Testimonials />
      <BookAppointmentForm />
      <SexHealthPage />
      <HairFallPage />
      <SkinCarePage />
      <PimpleTreatmentPage />
      <ContactUsPage />
    </BrowserRouter>
  );
}

export default App;
