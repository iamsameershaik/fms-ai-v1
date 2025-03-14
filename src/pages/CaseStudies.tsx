import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, MessageSquare, BarChart2, Users, ArrowRight,
  Clock, TrendingUp, CheckCircle2, Star
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGrid from '../components/CursorGrid';

const CaseStudies = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 'retail-chain',
      client: 'Domino’s',
      industry: 'Retail / E-commerce',
      date: 'January 2025',
      challenge: 'Retailers and e-commerce platforms struggle to manage high volumes of customer inquiries, leading to long wait times and inconsistent service quality.',
      solution: {
        title: 'AI-Powered Customer Service Automation',
        description: 'AI chatbots streamline customer interactions by providing instant support across multiple channels.',
        keyPoints: [
          'Automated order tracking and returns',
          'Personalized product recommendations',
          '24/7 customer support and query resolution',
          'Seamless CRM and payment integration'
        ]
      },
      results: [
        {
          metric: '50%',
          description: 'Reduction in response time'
        },
        {
          metric: '30%',
          description: 'Cost reduction in customer service'
        },
        {
          metric: '4.8/5',
          description: 'Customer satisfaction score'
        },
        {
          metric: '24/7',
          description: 'Support coverage'
        }
      ],
      testimonial: {
        quote: "Domino’s AI chatbot, ‘Dom,’ allows customers to place orders, track deliveries, and get personalized deals, improving efficiency and customer satisfaction.",
        position: "Head of Customer Experience"
      },
      icon: Bot
    },
    {
      id: 'fintech-startup',
      client: 'Bank of America',
      industry: 'Financial Services & Fintech',
      date: 'November 2024',
      challenge: 'Banks and fintech companies struggle to scale customer support while ensuring compliance with strict financial regulations.',
      solution: {
        title: 'Compliant AI Support System',
        description: 'AI-powered virtual assistants provide secure, automated financial support with real-time compliance monitoring.',
        keyPoints: [
          'Instant transaction verification',
          'Fraud detection and prevention',
          'Multi-language customer assistance',
          'Automated loan application and approval support'
        ]
      },
      results: [
        {
          metric: '99.9%',
          description: 'Compliance accuracy'
        },
        {
          metric: '85%',
          description: 'Automation rate'
        },
        {
          metric: '300%',
          description: 'Increase in support capacity'
        },
        {
          metric: '£2.5M',
          description: 'Annual savings'
        }
      ],
      testimonial: {
        quote: "Bank of America’s AI chatbot, ‘Erica,’ helps customers manage transactions, detect fraud, and get financial insights, streamlining banking operations.",
        position: "CTO"
      },
      icon: MessageSquare
    },
    {
      id: 'healthcare-provider',
      client: 'Babylon Health',
      industry: 'Healthcare & Telemedicine',
      date: 'March 2025',
      challenge: 'Healthcare providers face difficulties in managing appointment scheduling and patient inquiries, leading to high no-show rates and administrative overhead.',
      solution: {
        title: 'Healthcare AI Assistant',
        description: 'AI-driven healthcare assistants improve patient communication and streamline administrative tasks.',
        keyPoints: [
          'HIPAA/GDPR-compliant AI chatbots',
          'Smart scheduling and automated reminders',
          'AI-powered symptom checker and triage',
          'Patient data integration for personalized care'
        ]
      },
      results: [
        {
          metric: '75%',
          description: 'Reduction in no-shows'
        },
        {
          metric: '90%',
          description: 'Patient satisfaction'
        },
        {
          metric: '45%',
          description: 'Admin time saved'
        },
        {
          metric: '10,000+',
          description: 'Monthly appointments managed'
        }
      ],
      testimonial: {
        quote: "Babylon Health’s AI-powered chatbot offers symptom assessments and appointment scheduling, reducing strain on healthcare professionals and improving accessibility.",
        position: "Medical Director"
      },
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <CursorGrid />
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              Client Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-xl text-gray-300">
              Discover how businesses have transformed their operations with AI solutions.
              Real results, real impact.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-xl"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 p-2.5">
                        <study.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{study.client}</h2>
                        <p className="text-gray-400">{study.industry}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
                      <p className="text-gray-300 mb-4">{study.solution.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {study.solution.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-purple-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <blockquote className="glass p-6 rounded-xl relative">
                        <Star className="w-8 h-8 text-purple-400 absolute -top-4 -left-4" />
                        <p className="text-lg italic mb-4">"{study.testimonial.quote}"</p>
                        <footer>
                          <strong className="block text-purple-400">{study.testimonial.author}</strong>
                          <span className="text-gray-400">{study.testimonial.position}</span>
                        </footer>
                      </blockquote>
                    </div>
                  </div>

                  <div className="lg:w-1/3">
                    <div className="glass p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                        Key Results
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="text-center p-4 glass rounded-lg">
                            <div className="text-3xl font-bold text-purple-400 mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-gray-300">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join these success stories and discover how our AI solutions can drive growth for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2 mx-auto"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;