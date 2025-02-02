import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const CTA = () => {
  const [spotsLeft, setSpotsLeft] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => (prev > 1 ? prev - 1 : 10));
    }, 300000); // Decrease every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your 30-day trial today and experience the power of AI-driven email sequences.
          </p>
          <div className="space-y-4">
            <Button size="lg" variant="secondary" className="min-w-[200px]">
              Start Your 30-Day Trial
            </Button>
            <p className="text-sm font-medium">
              Only {spotsLeft} spots left for this month!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;