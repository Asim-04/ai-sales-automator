
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Wondering how we can help you?
          </h2>
          <p className="text-xl mb-4 text-primary/90">
            Book a free session with our expert to kickstart your AI Automation Journey.
          </p>
          <p className="text-2xl font-semibold text-primary mb-8">
            Cut costs, scale revenues.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/trial')}
            className="min-w-[200px] bg-primary hover:bg-primary/90 animate-in"
          >
            Start Your 30-Day Trial
          </Button>
        </motion.div>
      </div>

      {/* Abstract shapes in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default CTA;
