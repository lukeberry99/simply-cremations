import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Sections from "./components/sections";
import Pricing from "./components/pricing";
import Faq from "./components/faq";
import Footer from "./components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Sections />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
