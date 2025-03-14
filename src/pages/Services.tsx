import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Bot, Database, Calendar, Phone, Shield, Zap, Brain, Users,
  MessageSquare, BarChart2, Sparkles, Clock, CheckCircle2,
  ArrowRight, Rocket, Award
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGrid from '../components/CursorGrid';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'ai-support',
      icon: Bot,
      title: 'AI Customer Support Agents',
      description: 'Never leave a customer waiting again. Our AI chatbots handle queries 24/7 with human-like precision.',
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Seamless handoff to human agents',
        'Custom knowledge base integration',
        'Real-time analytics and insights',
        'Automated ticket management'
      ],
      benefits: [
        '24/7 Customer Support',
        'Reduced Response Time',
        'Consistent Service Quality',
        'Cost Reduction'
      ]
    },
    {
      id: 'crm',
      icon: Database,
      title: 'CRM AI Integration',
      description: 'Supercharge your CRM with AI-driven insights, automated follow-ups, and seamless data sync.',
      features: [
        'Predictive lead scoring',
        'Automated follow-up sequences',
        'Customer behavior analysis',
        'Sales forecasting',
        'Integration with major CRM platforms',
        'Custom reporting dashboard'
      ],
      benefits: [
        'Increased Sales Efficiency',
        'Better Lead Conversion',
        'Data-Driven Decisions',
        'Automated Workflows'
      ]
    },
    {
      id: 'scheduling',
      icon: Calendar,
      title: 'AI Appointment Scheduling',
      description: 'Let AI manage your bookings effortlessly, reducing no-shows and maximizing efficiency.',
      features: [
        'Smart scheduling algorithm',
        'Automated reminders',
        'Calendar integration',
        'Resource optimization',
        'Client self-service portal',
        'Multi-location support'
      ],
      benefits: [
        'Reduced No-shows',
        'Optimized Resource Usage',
        'Enhanced Customer Experience',
        'Time Savings'
      ]
    },
    {
      id: 'voice',
      icon: Phone,
      title: 'AI Voice Calling Agents',
      description: 'AI-powered virtual agents make sales calls, handle inquiries, and qualify leads—so your team focuses on closing deals.',
      features: [
        'Natural voice synthesis',
        'Real-time conversation analysis',
        'Custom voice and script options',
        'Call recording and analytics',
        'Integration with CRM',
        'Multi-language support'
      ],
      benefits: [
        'Increased Call Capacity',
        'Consistent Message Delivery',
        'Quality Lead Generation',
        'Cost-Effective Scaling'
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and compliance with GDPR, HIPAA, and other major regulations."
    },
    {
      icon: Zap,
      title: "Lightning-Fast Processing",
      description: "Process thousands of requests simultaneously with sub-second response times."
    },
    {
      icon: Brain,
      title: "Advanced AI Learning",
      description: "Our AI continuously learns and adapts to your business needs and customer interactions."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamlessly integrate AI assistance across your entire organization."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <CursorGrid />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              AI Solutions for
              <span className="text-gradient"> Modern Business</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business operations with our suite of AI-powered solutions.
              From customer service to sales automation, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => navigate('/consultation')}
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-6 py-3 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="max-w-4xl mx-auto mb-20 last:mb-0"
            >
              <div className="glass p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 p-2.5">
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="glass p-3 rounded-lg text-center">
                        <span className="text-purple-400">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Core Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 p-2.5 mb-4">
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center glass p-12 rounded-xl"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already using our AI solutions to drive growth and efficiency.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
              onClick={() => navigate('/consultation')}
            >
              Schedule Consultation
              <Rocket className="w-5 h-5 inline-block ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;