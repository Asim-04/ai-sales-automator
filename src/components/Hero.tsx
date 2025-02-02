import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            AI-Powered Email Marketing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Turn Website Visitors into Repeat Buyers with AI-Powered Email Sequences
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            We Automate Your Email Marketing. Guaranteed* 20% More Sales or Your Money Back.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="min-w-[200px] animate-in">
              Start Your 30-Day Trial
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Watch Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            *Terms and conditions apply. Based on historical customer data.
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient opacity-30"></div>
    </section>
  );
};

export default Hero;