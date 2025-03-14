import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl font-bold tracking-tighter text-gradient cursor-pointer"
            onClick={() => navigate('/')}
          >
            Falcon Mind Solutions
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium tracking-wide hover:text-purple-400 transition-colors
                  ${location.pathname === item.path ? 'text-purple-400' : 'text-white'}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'mt-4' : ''}`}
        >
          <div className="flex flex-col gap-4 py-4">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium tracking-wide hover:text-purple-400 transition-colors text-left
                  ${location.pathname === item.path ? 'text-purple-400' : 'text-white'}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;