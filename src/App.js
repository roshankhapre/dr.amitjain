import "./App.css";

import Services from "./components/HomePage/Services.jsx";

import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "./components/HomePage/HomePage.jsx";
import { About } from "./components/AboutUs/About.jsx";
import Footer from "./components/footer.jsx";
import ContactUsPage from "./components/ContactUs/ContactUsPage.jsx";
import BookAppointmentForm from "./components/HomePage/BookAppointmentForm.jsx";
import PimpleTreatmentPage from "./components/Services/PimpleTreatmentPage.jsx";
import SkinCarePage from "./components/Services/SkinCarePage.jsx";
import HairFallPage from "./components/Services/HairFallPage.jsx";
import SexHealthPage from "./components/Services/SexHealthPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/sex-health" element={<SexHealthPage />} />
        <Route path="/services/hair-fall" element={<HairFallPage />} />
        <Route path="/services/skin-care" element={<SkinCarePage />} />
        <Route
          path="/services/pimple-treatment"
          element={<PimpleTreatmentPage />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/appointment" element={<BookAppointmentForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
