import { motion } from "framer-motion";
import { Clock, Users, ChartBar } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "100% Done-For-You in 48 Hours",
      description: "Complete email marketing automation setup in just two days.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "No Hiring Copywriters or Designers",
      description: "Our AI handles all content creation and design work.",
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: "Free Monthly AI Optimization",
      description: "Continuous improvement of your email sequences for better results.",
    },
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SequenceLab</h2>
          <p className="text-xl text-gray-600">Experience the future of email marketing automation</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;