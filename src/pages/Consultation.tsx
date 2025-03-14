import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGrid from '../components/CursorGrid';
import { supabase } from '../lib/supabase';

interface FormData {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  comments: string;
}

const ConsultationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    phone: '',
    service: '',
    comments: ''
  });

  const services = [
    {
      id: 'ai-support',
      title: 'AI Customer Support Agents',
      description: 'AI chatbots & voice agents for 24/7 customer support'
    },
    {
      id: 'crm',
      title: 'CRM AI Integration',
      description: 'AI-driven insights and automated follow-ups'
    },
    {
      id: 'scheduling',
      title: 'AI Appointment Scheduling',
      description: 'Automated booking management and optimization'
    },
    {
      id: 'voice',
      title: 'AI Voice Calling Agents',
      description: 'AI-powered virtual agents for sales and support calls'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('consultations')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          business_name: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          comments: formData.comments
        }]);

      if (error) throw error;

      toast.success('Consultation request submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        businessName: '',
        email: '',
        phone: '',
        service: '',
        comments: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit consultation request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster position="top-right" />
      <CursorGrid />
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-xl"
          >
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-4">Schedule Your Free Consultation</h1>
              <p className="text-gray-400">
                Take the first step towards transforming your business with AI. 
                Our experts are ready to understand your needs and create a tailored solution.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Acme Inc."
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
                  placeholder="+44 (0) 7500 000000"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Required <span className="text-purple-400">*</span>
                </label>
                <select 
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title} - {service.description}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  value={formData.comments}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Describe your business challenges and what you hope to achieve..."
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Your information is secure and will never be shared</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner" />
                    Submitting...
                  </>
                ) : (
                  'Schedule Consultation'
                )}
              </button>

              <p className="text-center text-sm text-gray-400 mt-4">
                By submitting this form, you agree to our{' '}
                <a href="/terms" className="text-purple-400 hover:text-purple-300">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-purple-400 hover:text-purple-300">
                  Privacy Policy
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConsultationForm;