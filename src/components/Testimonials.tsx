
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SequenceLab has completely transformed our email marketing strategy. Their AI-powered system not only tripled our repeat sales but also significantly improved our customer engagement rates. The personalization capabilities are far beyond what we could achieve manually.",
    author: "Sarah Johnson",
    role: "CEO, FashionBoutique",
    company: "A leading online fashion retailer",
    metrics: "3x increase in repeat sales, 45% higher email open rates",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "The AI-written emails convert better than our in-house team's work, and the setup was incredibly straightforward. We've seen a remarkable improvement in our campaign performance, with consistently higher engagement rates and better ROI.",
    author: "Michael Chen",
    role: "Marketing Director, TechGear",
    company: "Technology accessories manufacturer",
    metrics: "52% increase in click-through rates, 28% boost in conversions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    quote: "As a wellness brand, maintaining the right tone while scaling our email marketing was crucial. SequenceLab's AI perfectly captured our brand voice and helped us create personalized wellness journeys for our customers through email sequences.",
    author: "Emma Davis",
    role: "Founder, WellnessHub",
    company: "Health and wellness e-commerce platform",
    metrics: "40% increase in customer retention, 2.5x ROI improvement",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Real results from real businesses</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <Quote className="w-12 h-12 text-[#d4a373]/20 mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium mb-8 text-gray-800">
              {testimonials[currentIndex].quote}
            </blockquote>
            <div className="border-t border-gray-100 pt-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-lg">{testimonials[currentIndex].author}</div>
                    <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                    <div className="text-sm text-gray-500">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
                <div className="bg-[#d4a373]/10 px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-[#d4a373]">
                    {testimonials[currentIndex].metrics}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
