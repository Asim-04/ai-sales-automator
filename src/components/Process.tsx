import { motion } from "framer-motion";
import { Scan, Mail, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Scan className="w-12 h-12 text-primary" />,
      title: "AI Scans Your Website",
      description: "Our AI analyzes your website content, products, and customer behavior patterns.",
    },
    {
      icon: <Mail className="w-12 h-12 text-primary" />,
      title: "AI Writes & Designs Emails",
      description: "Advanced AI creates personalized email sequences optimized for conversions.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-primary" />,
      title: "You Approve & Profit",
      description: "Review, approve, and watch your email marketing drive consistent sales.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Three simple steps to automated email success</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-4 bg-white rounded-xl shadow-sm">
                {step.icon}
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;