import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="min-h-screen bg-n-8">
      <Header />
      <Hero />
      <Pricing />
      <Footer />
    </div>
  );
}
