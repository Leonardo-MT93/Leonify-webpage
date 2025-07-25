import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
export default function Home() {
  return (
    <div className="min-h-screen bg-n-8">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}
