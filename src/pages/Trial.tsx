import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Trial = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request submitted!",
      description: "Our expert will contact you shortly.",
    });
    setFormData({ name: "", email: "", phone: "", requirements: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Wondering how we can help you?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Book a free session with our expert to kickstart your AI Automation Journey.
            </p>
            <p className="text-2xl font-semibold text-primary">
              Cut costs, scale revenues.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto relative">
            {/* Abstract shapes in the background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl animate-pulse"></div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/50 backdrop-blur-lg p-8 rounded-lg shadow-lg relative"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/70"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/70"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/70"
                  required
                />
              </div>
              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your requirements
                </label>
                <Textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="bg-white/70"
                  required
                  rows={6}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full group hover:scale-105 transition-all duration-300"
              >
                Book Your Free Session
              </Button>
            </motion.form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Trial;