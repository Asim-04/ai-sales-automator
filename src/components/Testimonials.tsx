import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SequenceLab tripled our repeat sales!",
    author: "Sarah Johnson",
    role: "CEO, FashionBoutique",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    quote: "The AI-written emails convert better than our in-house team's work.",
    author: "Michael Chen",
    role: "Marketing Director, TechGear",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    quote: "Setup was incredibly fast. Results came within days.",
    author: "Emma Davis",
    role: "Founder, WellnessHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
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
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Success stories from happy customers</p>
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
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium mb-8">
              {testimonials[currentIndex].quote}
            </blockquote>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-semibold">{testimonials[currentIndex].author}</div>
                <div className="text-gray-600">{testimonials[currentIndex].role}</div>
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