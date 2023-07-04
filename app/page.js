import ProductSection from "@/components/landingComponents/ProductSection";
import Footer from "@/components/landingComponents/Footer";
import Header from "@/components/landingComponents/Header";
import Hero from "@/components/landingComponents/Hero";
import Features from "@/components/landingComponents/Features";
import FAQ from "@/components/landingComponents/FAQ";
import Contact from "@/components/landingComponents/Contact";
import Boost from "@/components/landingComponents/Boost";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductSection />
      <Boost />
      <Features />
      <FAQ />
      <Contact />
    </main>
  )
}
