import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { supabase } from '../lib/supabase';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error('You are already subscribed to our newsletter!');
        } else {
          throw error;
        }
      } else {
        toast.success('Successfully subscribed to our newsletter!');
        setEmail('');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="glass border-t border-white/10 py-12"
    >
      <Toaster position="bottom-right" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => navigate('/about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/case-studies')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/blog')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-tight">Legal</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate('/privacy')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/terms')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 tracking-tight">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/iamsameershaik/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/iamsameershaik_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 tracking-tight">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="loading-spinner" />
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Falcon Mind Solutions. All Rights Reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={() => navigate('/terms')}
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms
            </button>
            <button
              onClick={() => navigate('/privacy')}
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;