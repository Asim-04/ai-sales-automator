import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Our Products
            </h1>
            <p className="text-xl text-gray-600">
              Discover our AI-powered solutions for marketing automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              id="email"
              className="p-8 rounded-2xl bg-white shadow-lg"
            >
              <img
                src="/ai-email-marketing.png"
                alt="AI Email Marketing"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold mb-4">AI E-mail Marketing Expert</h2>
              <p className="text-gray-600 mb-6">
                Transform your email marketing with AI-powered automation. Create personalized
                campaigns that convert better and save time.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Smart segmentation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Automated personalization
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> A/B testing
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              id="whatsapp"
              className="p-8 rounded-2xl bg-white shadow-lg"
            >
              <img
                src="/ai-chatbot.png"
                alt="AI WhatsApp Chatbot"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold mb-4">AI WhatsApp Chatbot</h2>
              <p className="text-gray-600 mb-6">
                Engage with your customers 24/7 using our intelligent WhatsApp chatbot.
                Automate customer service and boost sales.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Natural language processing
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Custom responses
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Analytics dashboard
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;