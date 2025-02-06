
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does your AI create email sequences?",
    answer: "Our AI scans your website, product descriptions, and customer reviews to understand your brand voice. It then generates hyper-personalized email sequences (like abandoned cart reminders or welcome series) using tools like ChatGPT. You review and approve every email before it goes live."
  },
  {
    question: "Is there human oversight?",
    answer: "Yes! While AI writes the emails, our team reviews outputs for brand alignment and compliance. You also get final approval before any campaign launches."
  },
  {
    question: "How much does it cost?",
    answer: "Plans start at $199/month (includes 1 email sequence and AI optimization). See our Pricing section for details."
  },
  {
    question: "What tools do I need?",
    answer: "Just an email service provider (e.g., Mailchimp, Klaviyo) or Shopify store. We handle the rest!"
  },
  {
    question: "How long does setup take?",
    answer: "Most campaigns go live in 48 hours after approval. Complex sequences take 3–5 days."
  },
  {
    question: "Can I use my existing email list?",
    answer: "Absolutely! We'll integrate with your current ESP and ensure GDPR compliance."
  },
  {
    question: "What results can I expect?",
    answer: "Most clients see a 15–30% boost in sales/repeat purchases within 60 days. We also offer a money-back guarantee* if you don't."
  },
  {
    question: "Can the AI adapt to my industry?",
    answer: "Yes! Whether you're in e-commerce, SaaS, or healthcare, our AI trains on your data to match your niche."
  },
  {
    question: "Can I edit the AI-generated emails?",
    answer: "Of course! You can tweak copy, designs, or timing before approval."
  },
  {
    question: "Is my data safe?",
    answer: "We use bank-grade encryption and never share your data. Read our Privacy Policy for details."
  },
  {
    question: "What if I need help?",
    answer: "Get 24/7 support via chat or email. We'll fix issues within 12 hours."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes—no long-term contracts. Cancel in 2 clicks, but we're confident you'll stay!"
  },
  {
    question: "Do you handle A/B testing?",
    answer: "Yes! Our AI tests subject lines, CTAs, and send times, then auto-optimizes for the best results."
  },
  {
    question: "Can you automate SMS too?",
    answer: "For Pro/Premium clients, we bundle SMS + email sequences (e.g., abandoned cart texts)."
  },
  {
    question: "How do you stay updated on email trends?",
    answer: "Our AI learns from 1M+ emails monthly and updates prompts to reflect the latest best practices."
  },
  {
    question: "What makes you better than human copywriters?",
    answer: "Speed + scalability. While humans take days, our AI delivers high-quality sequences in hours—at 1/10th the cost."
  },
  {
    question: "Can I see a demo?",
    answer: "Absolutely! Book a free 15-minute demo to see how it works."
  }
];

const FAQ = () => {
  const [visibleQuestions, setVisibleQuestions] = useState(4);
  
  const showMoreQuestions = () => {
    setVisibleQuestions(prev => Math.min(prev + 4, faqs.length));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-muted/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-primary">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.slice(0, visibleQuestions).map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-base md:text-lg font-medium text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-primary/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {visibleQuestions < faqs.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={showMoreQuestions}
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Show More</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
