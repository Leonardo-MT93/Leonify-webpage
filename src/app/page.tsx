
import Pricing from "@/components/Pricing";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQ from "@/components/Faq";
import ContactCTA from "@/components/Contact";
export default function Home() {
  return (
    <div className="min-h-screen bg-n-8">
      <Hero />
      <Services />
      <Pricing />
      <FAQ />
      <ContactCTA />
    </div>
  );
}
