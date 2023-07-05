"use client"
import ProductSection from "@/components/landingComponents/ProductSection";
import Footer from "@/components/landingComponents/Footer";
import Header from "@/components/landingComponents/Header";
import Hero from "@/components/landingComponents/Hero";
import Features from "@/components/landingComponents/Features";
import FAQ from "@/components/landingComponents/FAQ";
import Contact from "@/components/landingComponents/Contact";
import Boost from "@/components/landingComponents/Boost";
import React from 'react';
import ProtectedRoute from "@/utils/Context/ProtectedRoute";

const Landing = () => {

  return (
    <main>
      <Header />
      <Hero />
      <ProductSection />
      <Boost />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default ProtectedRoute(Landing);

