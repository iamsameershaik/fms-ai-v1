import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGrid from '../components/CursorGrid';

const Terms = () => {
  const lastUpdated = 'March 20, 2025';

  return (
    <div className="min-h-screen bg-black text-white">
      <CursorGrid />
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 p-2.5">
                <ScrollText className="w-full h-full text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
                <p className="text-gray-400">Last Updated: {lastUpdated}</p>
              </div>
            </div>

            <div className="glass p-8 rounded-xl space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Definitions</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>"Service" refers to the products and services provided by Falcon Mind Solutions</li>
                  <li>"User" refers to any individual or entity using our Service</li>
                  <li>"Content" refers to all materials, information, and data available through the Service</li>
                  <li>"Agreement" refers to these Terms of Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing or using our Service, you agree to be bound by these Terms. If you 
                  disagree with any part of the terms, you may not access the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
                <p className="text-gray-300 mb-4">You agree to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Use the Service in compliance with applicable laws</li>
                  <li>Not interfere with or disrupt the Service</li>
                  <li>Not attempt to gain unauthorized access to the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Prohibited Activities</h2>
                <p className="text-gray-300 mb-4">Users may not:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Use the Service for illegal purposes</li>
                  <li>Transmit malicious code or harmful data</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Violate intellectual property rights</li>
                  <li>Engage in unauthorized data collection</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                <p className="text-gray-300">
                  All content, features, and functionality of the Service are owned by 
                  Falcon Mind Solutions and are protected by international copyright, trademark, 
                  patent, trade secret, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Service Modifications</h2>
                <p className="text-gray-300">
                  We reserve the right to modify, suspend, or discontinue the Service at any time 
                  without notice. We shall not be liable to you or any third party for any 
                  modification, suspension, or discontinuation of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-300">
                  To the maximum extent permitted by law, Falcon Mind Solutions shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages, or any 
                  loss of profits or revenues.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Dispute Resolution</h2>
                <p className="text-gray-300">
                  Any disputes arising from these Terms shall be resolved through binding arbitration 
                  in accordance with the laws of the United Kingdom. The arbitration shall take place 
                  in Cardiff, UK.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                <p className="text-gray-300">
                  We may terminate or suspend your access to the Service immediately, without prior 
                  notice or liability, for any reason whatsoever, including without limitation if you 
                  breach these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
                <p className="text-gray-300">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  United Kingdom, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right to modify these Terms at any time. We will notify users of any 
                  changes by updating the "Last Updated" date of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="flex items-center gap-4 text-gray-300">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:contact@falconmind.solutions" className="hover:text-purple-400 transition-colors">
                    contact@falconmind.solutions
                  </a>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;