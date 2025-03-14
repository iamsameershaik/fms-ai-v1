import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Shield } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGrid from '../components/CursorGrid';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }]);

      if (error) throw error;

      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      toast.success('Message sent successfully!');
      
      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      toast.error('Failed to send message. Please try again.');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster position="top-right" />
      <CursorGrid />
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have questions about our AI solutions? We're here to help you transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass p-8 rounded-xl h-full">
                <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 p-2.5 flex-shrink-0">
                      <MapPin className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Visit Us</h3>
                      <p className="text-gray-300">
                        Cathays, Cardiff<br />
                        CF24 4AN<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 p-2.5 flex-shrink-0">
                      <Clock className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-gray-300">
                        24/7 Support Available<br />
                        AI Systems: Always Online<br />
                        Office Hours: Mon-Fri, 9am-9pm GMT
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 p-2.5 flex-shrink-0">
                      <Phone className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-gray-300">
                        UK: +44 (0) 7508 856130
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 p-2.5 flex-shrink-0">
                      <Mail className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-gray-300">
                        General Inquiries: contact@falconmind.solutions
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="font-semibold mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.linkedin.com/in/iamsameershaik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 transition-colors p-3 flex items-center justify-center"
                      >
                        <Linkedin className="w-full h-full text-purple-400" />
                      </a>
                      <a
                        href="https://x.com/iamsameershaik_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 transition-colors p-3 flex items-center justify-center"
                      >
                        <Twitter className="w-full h-full text-purple-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+44 (0) 7000 000000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="form-input"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Shield className="w-4 h-4" />
                    <span>Your information is protected by our privacy policy</span>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="loading-spinner" />
                        Sending...
                      </>
                    ) : formStatus === 'success' ? (
                      'Message Sent!'
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;