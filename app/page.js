import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductSection />
      <Features/>
      <FAQ/>
      <Footer />
    </main>
  )
}
