
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import WhyAI from "@/components/WhyAI";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Process />
      <Benefits />
      <WhyAI />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
