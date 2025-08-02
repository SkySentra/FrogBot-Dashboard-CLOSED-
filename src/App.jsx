import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./components/Hero";
import FeaturesSection from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Imprint from "./pages/imprint/imprint";
import PrivacyPolicy from "./pages/privacy/privacy";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy" element={<PrivacyPolicy />} /> 
      </Routes>
    </Router>
  );
}
