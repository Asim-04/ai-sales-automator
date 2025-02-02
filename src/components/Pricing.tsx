import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "199",
      features: [
        "Up to 5,000 subscribers",
        "3 email sequences",
        "Basic AI optimization",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "399",
      features: [
        "Up to 25,000 subscribers",
        "10 email sequences",
        "Advanced AI optimization",
        "Priority support",
        "Custom templates",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "699",
      features: [
        "Unlimited subscribers",
        "Unlimited sequences",
        "Premium AI optimization",
        "24/7 support",
        "Custom integration",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that best fits your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? "bg-primary text-white shadow-xl scale-105"
                  : "bg-white border border-gray-100"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-sm font-medium rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-3xl">$</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-lg ml-2">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "secondary" : "default"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;