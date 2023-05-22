import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Boost from "@/components/Boost";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductSection />
      <Boost/>
      <Features/>
      <FAQ/>
      <Contact/>
      <Footer />
    </main>
  )
}
