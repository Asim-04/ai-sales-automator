
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
            
            <div className="prose max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Welcome to SequenceLab. By accessing our website and using our services,
                you agree to these terms and conditions.
              </p>

              <h2>2. Services</h2>
              <p>
                SequenceLab provides AI-powered email marketing automation services. We
                reserve the right to modify or discontinue any service at any time.
              </p>

              <h2>3. Privacy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy to
                understand how we collect and use your information.
              </p>

              <h2>4. Subscription Terms</h2>
              <p>
                Our services are provided on a subscription basis. You agree to pay all
                fees associated with your chosen subscription plan.
              </p>

              <h2>5. Refund Policy</h2>
              <p>
                We offer a 30-day money-back guarantee if you're not satisfied with our
                services. Certain conditions apply.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                SequenceLab is not liable for any indirect, incidental, or consequential
                damages arising from the use of our services.
              </p>

              <h2>7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of
                our services constitutes acceptance of any changes.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
