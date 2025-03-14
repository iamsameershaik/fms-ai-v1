import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGrid from './components/CursorGrid';
import { HeroGeometric } from './components/ui/shape-landing-hero';
import { 
  Brain, Users, Database, Calendar, Phone, Bot, ArrowRight,
  Star, Play, Rocket, Shield, Zap, MessageSquare, TrendingUp, 
  Clock, AlertCircle, Users2, CheckCircle2, MessageCircle, 
  Instagram, Facebook, Globe, Lock, Server, CreditCard
} from 'lucide-react';

function App() {
  const navigate = useNavigate();
  const [wordCount, setWordCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWordCount(prev => prev + Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 'ai-support',
      icon: Bot,
      title: 'AI Customer Support Agents',
      description: 'Never leave a customer waiting again. Our AI chatbots & voice agents handle queries 24/7 with human-like precision.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'crm',
      icon: Database,
      title: 'CRM AI Integration',
      description: 'Supercharge your CRM with AI-driven insights, automated follow-ups, and seamless data sync.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'scheduling',
      icon: Calendar,
      title: 'AI Appointment Scheduling',
      description: 'Let AI manage your bookings effortlessly, reducing no-shows and maximizing efficiency.',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      id: 'voice',
      icon: Phone,
      title: 'AI Voice Calling Agents',
      description: 'AI-powered virtual agents make sales calls, handle inquiries, and qualify leads—so your team focuses on closing deals.',
      color: 'from-violet-400 to-violet-600'
    }
  ];

  const businessChallenges = [
    {
      icon: Clock,
      title: 'Time-Consuming Manual Tasks',
      description: '73% of customer service teams waste hours on repetitive queries that could be automated.'
    },
    {
      icon: AlertCircle,
      title: 'Missed Opportunities',
      description: '60% of potential leads are lost due to slow response times outside business hours.'
    },
    {
      icon: Users2,
      title: 'Resource Constraints',
      description: 'Growing teams struggle to maintain quality while scaling support operations.'
    },
    {
      icon: TrendingUp,
      title: 'Scaling Difficulties',
      description: 'Traditional support models break under high volume, leading to customer dissatisfaction.'
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

  const pricingTiers = [
    {
      name: 'Basic Plan',
      price: 150,
      setupFee: 800,
      features: [
        'AI chatbot for handling reservations & customer inquiries',
        'Works on website & social media',
        'Handles customer inquiries 24/7',
        'Basic analytics & reporting'
      ]
    },
    {
      name: 'Pro Plan',
      price: 250,
      setupFee: 900,
      features: [
        'Everything in Basic',
        'AI voice agent to handle phone calls',
        'Custom integrations (Calendly, Airtable, delivery apps)',
        'Priority support (fast response time)',
        'Advanced analytics'
      ],
      recommended: true
    },
    {
      name: 'Enterprise Plan',
      price: 500,
      setupFee: 1000,
      features: [
        'Everything in Pro',
        'Multi-location support',
        'AI-powered marketing automation',
        'Dedicated account manager',
        'Custom development solutions',
        'White-label options'
      ]
    }
  ];

  const statistics = [
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '3x', label: 'Faster Content Creation' },
    { value: '60%', label: 'Cost Reduction' },
    { value: '500k+', label: 'Satisfied Users' },
    { value: '1M+', label: 'Documents Generated' },
    { value: '45%', label: 'Productivity Increase' }
  ];

  const integrations = [
    { name: 'WhatsApp', icon: MessageSquare },
    { name: 'Instagram', icon: Instagram },
    { name: 'Facebook', icon: Facebook },
    { name: 'Intercom', icon: MessageCircle },
    { name: 'Calendly', icon: Calendar },
    { name: 'Airtable', icon: Database },
    { name: 'Web', icon: Globe }
  ];

  const certifications = [
    { name: 'ISO 27001', icon: Shield },
    { name: 'GDPR Compliant', icon: Lock },
    { name: 'SOC 2', icon: Server },
    { name: 'PCI DSS', icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-purple-500/30">
      <CursorGrid />
      <Navbar />

      {/* Hero Section */}
      <HeroGeometric 
        badge="Next-Gen AI Solutions"
        title1="Skyrocket Your Growth"
        title2="with AI Automation"
      />

      {/* Problems We Solve */}
      <section className="py-32 relative overflow-hidden" id="problems">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gradient mb-6">
              The Problems We Solve
            </h2>
            <p className="text-xl text-purple-300">
              Businesses face critical challenges in customer service and operations.
              We're here to solve them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-red-600 p-2.5 mb-4">
                  <challenge.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                <p className="text-gray-300">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI Services */}
      <section className="py-32 relative overflow-hidden" id="services">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gradient mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-purple-300">
              Cutting-edge AI solutions designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-xl service-card"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3.5 mb-6`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <button 
                  className="btn-primary w-full"
                  onClick={() => navigate('/services')}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 inline-block ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative overflow-hidden" id="why-choose-us">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-16 text-center tracking-tight text-gradient">
              Why Choose Us
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-xl text-center"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2 animate-count-up">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Seamless Integration with Your Favorite Platforms
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-4 rounded-xl text-center"
                  >
                    <integration.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <div className="text-sm text-gray-300">{integration.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="trust-badge glass px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <cert.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium">{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 relative overflow-hidden" id="pricing">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-center tracking-tight text-gradient">
              Transparent Pricing for Every Business
            </h2>
            <p className="text-xl text-center text-gray-300 mb-16">
              Start with a one-time setup fee and choose the monthly plan that fits your needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass p-8 rounded-xl relative ${
                    tier.recommended ? 'border-2 border-purple-500' : ''
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  
                  <div className="mb-2">
                    <div className="text-sm text-gray-400">One-time setup fee</div>
                    <div className="text-xl font-semibold">£{tier.setupFee}</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-400">Monthly fee</div>
                    <span className="text-4xl font-bold">£{tier.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full ${
                      tier.recommended ? 'btn-primary' : 'glass hover:bg-white/10'
                    } py-3 rounded-lg transition-all duration-300`}
                    onClick={() => navigate('/consultation')}
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 tracking-tight text-gradient">
              Ready to Transform Your Business?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/consultation')}
              className="btn-primary text-xl px-12 py-6 flex items-center gap-3 mx-auto"
            >
              <span>Start Free Trial</span>
              <Rocket className="w-5 h-5 group-hover:animate-pulse" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;