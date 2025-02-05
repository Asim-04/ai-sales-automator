
import { motion } from "framer-motion";
import { 
  Brain, 
  TrendingUp, 
  Clock, 
  Target, 
  Shield, 
  Zap,
  Users,
  BarChart3
} from "lucide-react";

const reasons = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Smart Automation",
    description: "Automate repetitive tasks and focus on strategic decisions"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Increased Efficiency",
    description: "Reduce operational costs while improving productivity"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Operation",
    description: "AI works round the clock, ensuring constant business presence"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Personalized Experience",
    description: "Deliver tailored solutions to each customer"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enhanced Security",
    description: "Protect your business with advanced AI security measures"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Quick Adaptation",
    description: "Rapidly adjust to market changes and trends"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Better Customer Service",
    description: "Provide instant, accurate responses to customer queries"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Data-Driven Insights",
    description: "Make informed decisions based on AI analytics"
  }
];

const WhyAI = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Why Integrate AI in Your Business?
          </h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            Transform your business operations and stay ahead of the competition with AI integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-primary mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {reason.title}
              </h3>
              <p className="text-primary/70">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAI;
