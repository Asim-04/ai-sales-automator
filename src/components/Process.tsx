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
    <section id="how-it-works" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Three simple steps to automated email success
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-4 bg-white rounded-xl shadow-sm">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {step.icon}
                </motion.div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
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