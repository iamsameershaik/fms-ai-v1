import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Rocket, Heart, Shield, Check, Star, Trophy, Globe, Zap, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGrid from '../components/CursorGrid';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make starts with our customers\' needs.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing boundaries to create cutting-edge AI solutions.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Maintaining the highest standards of data protection.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together to achieve exceptional results.',
    },
  ];

  const timeline = [
    {
      date: 'August 2024',
      title: 'Company Launch',
      description: 'Falcon Mind Solutions officially launches with its core AI customer service platform.',
      icon: Rocket,
      achieved: true
    },
    {
      date: 'September 2024',
      title: 'First Major Client',
      description: 'Secured partnership with a leading retail chain.',
      icon: Star,
      achieved: true
    },
    {
      date: 'October 2024',
      title: 'Platform Expansion',
      description: 'Launch of advanced CRM integration and voice AI capabilities.',
      icon: Zap,
      achieved: true
    },
    {
      date: 'February 2025',
      title: '100 Business Milestone',
      description: 'Reached and surpassed 100 active business clients with this business model.',
      icon: Trophy,
      achieved: true
    },
    {
      date: 'March 2025',
      title: 'Major AI Platform Expansion',
      description: 'Launched a significant upgrade to our AI platform, enhancing scalability, performance, and multilingual support to reach a global audience.',
      icon: Award,
      achieved: true
    },
    {
      date: 'Q2 2025',
      title: 'Global Expansion',
      description: 'Planned expansion into European and Asian markets.',
      icon: Globe,
      achieved: false
    },
    {
      date: '2026',
      title: 'Advanced AI Models',
      description: 'Launch of next-generation AI models with enhanced natural language processing.',
      icon: Brain,
      achieved: false
    },
    {
      date: '2030',
      title: '10,000 Businesses',
      description: 'Ambitious goal to serve 10,000+ businesses globally with our AI solutions.',
      icon: Check,
      achieved: false
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
              Transforming Business Through
              <span className="text-gradient"> Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're on a mission to democratize AI technology and empower businesses
              of all sizes to achieve their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="glass p-8 rounded-xl">
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2024, Falcon Mind Solutions emerged from a simple yet powerful idea:
                AI shouldn't be a luxury reserved for tech giants. We believed that every business,
                regardless of size, deserved access to cutting-edge AI technology that could
                transform their operations and customer experience.
              </p>
              <p className="text-lg text-gray-300">
                Today, we're proud to serve hundreds of businesses worldwide, helping them
                automate processes, enhance customer interactions, and drive growth through
                our innovative AI solutions. Our team of experts combines deep technical
                knowledge with practical business experience to deliver results that matter.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 p-2.5 mb-4">
                    <value.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Leadership Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
              A Vision for the Future of Business
            </h2>
            <div className="glass p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/assets/pfp.jpeg"
                    alt="CEO & Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Sameer Shaik</h3>
                  <p className="text-purple-400 text-lg mb-4">CEO & Founder</p>
                  <p className="text-gray-300 italic">
                    "Our vision extends beyond just providing AI solutions. We're building a future where every business, regardless of size, has access to enterprise-grade AI capabilities that were once the exclusive domain of tech giants."
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  When I founded Falcon Mind Solutions, I had one clear goal: to democratize AI technology for businesses worldwide. Having spent years in the tech industry, I witnessed firsthand how smaller businesses were being left behind in the AI revolution, unable to access the tools that could transform their operations.
                </p>
                
                <p>
                  Today, we're not just providing AI solutions; we're empowering businesses to compete in an increasingly digital world. Our AI-powered tools handle everything from customer service to data analysis, allowing our clients to focus on what they do best - growing their business.
                </p>

                <p>
                  Looking ahead, our roadmap is clear. We're investing heavily in research and development to stay at the forefront of AI innovation. By 2030, we aim to serve over 10,000 businesses globally, making enterprise-grade AI accessible to companies of all sizes. We're also developing new AI models that will revolutionize how businesses interact with their customers and manage their operations.
                </p>

                <p>
                  But technology is only part of the equation. What truly sets us apart is our commitment to our clients' success. Every feature we develop, every solution we implement is designed with one question in mind: How does this help our clients achieve their goals?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-400 to-purple-600" />
              
              {/* Timeline events */}
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="flex-1 flex items-center">
                      <div className={`glass p-6 rounded-xl w-full ${
                        event.achieved ? 'border-purple-400/30' : 'border-white/10'
                      } border`}>
                        <div className="flex items-center gap-3 mb-2">
                          <event.icon className={`w-6 h-6 ${
                            event.achieved ? 'text-purple-400' : 'text-gray-400'
                          }`} />
                          <h3 className="text-xl font-semibold">{event.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-2">{event.description}</p>
                        <p className={`text-sm ${
                          event.achieved ? 'text-purple-400' : 'text-gray-400'
                        }`}>
                          {event.date}
                        </p>
                      </div>
                    </div>
                    <div className="w-8 md:w-0 flex items-center justify-center relative">
                      <div className={`w-4 h-4 rounded-full ${
                        event.achieved ? 'bg-purple-400' : 'bg-gray-600'
                      } relative z-10`} />
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;