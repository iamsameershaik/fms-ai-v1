import React from 'react';
import { X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrialFormProps {
  isOpen: boolean;
  onClose: () => void;
  services: Array<{
    id: string;
    title: string;
  }>;
}

const TrialForm: React.FC<TrialFormProps> = ({ isOpen, onClose, services }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal Container with Scrolling */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-lg relative"
              >
                <div className="glass p-6 sm:p-8 rounded-xl">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Start Your Free Trial</h2>
                      <p className="text-sm text-gray-400">No credit card required</p>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
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
                          required
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
                        required
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Interested In <span className="text-purple-400">*</span>
                      </label>
                      <select id="service" required className="form-input">
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="comments" className="block text-sm font-medium mb-2">
                        Additional Comments
                      </label>
                      <textarea
                        id="comments"
                        rows={4}
                        className="form-input"
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Shield className="w-4 h-4" />
                      <span>Your data is secure and will never be shared</span>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      Start 14-Day Free Trial
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TrialForm;