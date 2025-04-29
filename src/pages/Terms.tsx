
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
              <p className="mb-4">Welcome to SequenceLabs! ("Agency," "we," "us", "our")</p>
              
              <p className="mb-4">Thank you for choosing our email marketing services ("Services"). The Services are provided by SequenceLabs, located in Mumbai, India.</p>
              
              <p className="mb-6">By using our Services, you agree to these terms. Please read them carefully.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
              <p className="mb-4">By accessing or using our website and services, you agree to comply with and be bound by these terms and conditions.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">2. Intellectual Property</h2>
              <p className="mb-4">All content on this website, including text, graphics, logos, images, and software, is the property of "Agency" and is protected by intellectual property laws. Unauthorized use or reproduction is strictly prohibited.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">3. Use of Services</h2>
              <p className="mb-4">You agree to use "Agency" 's services for lawful purposes only and in compliance with all applicable laws and regulations. Any use of our services for illegal or unauthorized purposes is strictly prohibited.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">4. Client Responsibilities</h2>
              <p className="mb-4">Clients engaging in email marketing services must provide accurate and complete information necessary for campaign execution. Failure to do so may result in delays or additional charges. Clients are responsible for ensuring they have the necessary permissions to send emails to their contact lists.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">5. Confidentiality</h2>
              <p className="mb-4">"Agency" agrees to maintain the confidentiality of client information and campaign details. Clients are also expected to treat proprietary information shared by "Agency" with confidentiality.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">6. Payment Terms and Service Delivery</h2>
              <p className="mb-4">Payment terms, including pricing, invoicing, and payment methods, will be communicated and agreed upon before the commencement of the project. Delays caused by unforeseen circumstances may be communicated to the client promptly.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">7. Disclaimer of Warranties</h2>
              <p className="mb-4">"Agency" makes no warranties or representations about the suitability, reliability, or accuracy of the information and services provided on this website. All services are provided "as is" without warranty of any kind.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">8. Limitation of Liability</h2>
              <p className="mb-4">To the extent permitted by law, "Agency" shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of our services.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">9. Governing Law</h2>
              <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in India.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">10. Changes to Terms</h2>
              <p className="mb-4">"Agency" reserves the right to modify or update these terms and conditions at any time without prior notice. Changes will be effective upon posting on our website.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">11. Data Usage and Privacy</h2>
              <p className="mb-4">By engaging with "Agency's" services, clients acknowledge and agree to the following data usage terms:</p>

              <h3 className="text-xl font-medium mt-4 mb-2">11.1 Data Sharing with Third Parties</h3>
              <p className="mb-4">"Agency" may share client data with trusted third-party service providers, subcontractors, or partners as necessary for the provision of services. These third parties are bound by confidentiality agreements and are required to handle client data securely.</p>

              <h3 className="text-xl font-medium mt-4 mb-2">11.2 Algorithm Training</h3>
              <p className="mb-4">Client data may be used anonymously and in aggregate for the purpose of improving and training "Agency's" algorithms. This data usage aims to enhance the overall quality and performance of the services provided. Personally identifiable information will be anonymized and will not be shared.</p>

              <h3 className="text-xl font-medium mt-4 mb-2">11.3 Privacy and Security</h3>
              <p className="mb-4">"Agency" is committed to maintaining the privacy and security of client data. Measures are implemented to prevent unauthorized access, disclosure, alteration, or destruction of client information.</p>

              <h3 className="text-xl font-medium mt-4 mb-2">11.4 Client Consent</h3>
              <p className="mb-4">Clients retain the right to withhold or withdraw consent for the use of their data for algorithm training or sharing with third parties. To exercise this right, clients must notify "Agency" in writing. However, such withholding of consent may impact the provision of certain services.</p>

              <h3 className="text-xl font-medium mt-4 mb-2">11.5 Compliance with Data Protection Laws</h3>
              <p className="mb-4">"Agency" will adhere to applicable data protection laws and regulations, including but not limited to the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">12. Anti-Spam Compliance</h2>
              <p className="mb-4">Clients must comply with all applicable anti-spam laws, including but not limited to the CAN-SPAM Act in the US, the Information Technology Act, 2000 in India, and any other relevant regulations. Clients are responsible for ensuring their email campaigns include clear opt-out mechanisms and are not deceptive or misleading.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">13. Service Termination</h2>
              <p className="mb-4">Upon termination of the service agreement, clients may lose access to the software. "Agency" is not responsible for the retention or transfer of any data, configurations, or customizations made by the client within the software.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">14. Software Updates</h2>
              <p className="mb-4">"Agency" reserves the right to update, modify, or enhance the software periodically. Clients will be notified in advance of any planned updates that may impact their use of the software.</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">15. Limitations on Use</h2>
              <p className="mb-6">Clients are prohibited from reproducing, distributing, or creating derivative works based on the software. Any unauthorized use of the software may result in the termination of services and legal action.</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
