import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGrid from '../components/CursorGrid';

const PrivacyPolicy = () => {
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
                <Shield className="w-full h-full text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
                <p className="text-gray-400">Last Updated: {lastUpdated}</p>
              </div>
            </div>

            <div className="glass p-8 rounded-xl space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-gray-300">
                  Falcon Mind Solutions ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Name and contact information</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Business information</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                  </ul>

                  <h3 className="text-xl font-semibold">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>IP address and device information</li>
                    <li>Browser type and settings</li>
                    <li>Usage data and interaction with our services</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions</li>
                  <li>Send you service-related communications</li>
                  <li>Improve our services and user experience</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Prevent fraud and enhance security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
                <p className="text-gray-300 mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Service providers and business partners</li>
                  <li>Legal authorities when required by law</li>
                  <li>Third parties with your explicit consent</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
                <p className="text-gray-300 mb-4">
                  We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Remember your preferences</li>
                  <li>Understand how you use our services</li>
                  <li>Improve user experience</li>
                  <li>Provide personalized content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-gray-300 mb-4">
                  Under GDPR and CCPA, you have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-gray-300">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information. However, no method of transmission over the Internet or 
                  electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-gray-300">
                  Our services are not intended for children under 13. We do not knowingly collect 
                  personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
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

export default PrivacyPolicy;