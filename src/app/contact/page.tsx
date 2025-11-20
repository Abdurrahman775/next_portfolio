// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // --- Placeholder for Actual API or Email Service Submission ---
    // In a real application, you would make a POST request here:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setStatus('success');
    //     setFormData({ name: '', email: '', message: '' }); // Clear form
    //   } else {
    //     setStatus('error');
    //   }
    // } catch (error) {
    //   setStatus('error');
    // }
    
    // Simulating API delay for visual effect
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    setStatus('success'); // Assume success for now

    // -----------------------------------------------------------------
  };

  return (
    <motion.form
      className="space-y-6"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
      />
      <textarea
        name="message"
        placeholder="Tell me about your project or inquiry..."
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none"
      />

      <motion.button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full px-6 py-3 text-lg font-bold rounded-lg transition-all duration-300 shadow-md ${
          status === 'submitting'
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 hover:shadow-indigo-500/50'
        }`}
        whileHover={status !== 'submitting' ? { scale: 1.02 } : {}}
        whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
      >
        {status === 'submitting'
          ? 'Sending...'
          : status === 'success'
          ? 'Message Sent! 🎉'
          : status === 'error'
          ? 'Error. Try Again.'
          : 'Send Message'}
      </motion.button>
      
      {status === 'success' && (
        <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center text-green-400 mt-4 font-semibold">
            I will get back to you within 24 hours.
        </motion.p>
      )}
    </motion.form>
  );
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950 pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-extrabold text-white mb-4">
            Ready to Connect?
          </h1>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            Whether it's a new development project, a UI/UX consultation, a networking challenge, or a solar inquiry—I'm ready to power your ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information (Left Column) */}
          <motion.div
            className="lg:col-span-1 space-y-8 p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-800"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Direct Details</h2>

            <ContactDetail icon={Mail} title="Email Me" value="abdurrahmanalhassan775@email.com" href="mailto:abdurrahmanalhassan775@email.com" />
            <ContactDetail icon={Phone} title="Call/WhatsApp" value="+234 8145919419" href="tel:+2348145919419" />
            <ContactDetail icon={MapPin} title="Location" value="Dorayi Chiranci Maahad link kano." />
            
            <div className="pt-4 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Social Links</h3>
                <div className="flex space-x-6">
                    <SocialIcon link="https://github.com/Abdurrahman775" icon={Github} label="GitHub" />
                    <SocialIcon link="www.linkedin.com/in/abdurrahman-alhassan-04b271318" icon={Linkedin} label="LinkedIn" />
                </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-2 p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>
        
        {/* Optional: Embed a Calendly link */}
        <motion.div
          className="mt-16 text-center p-8 bg-gray-900 rounded-xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-indigo-400 mb-4">Need to Schedule a Chat?</h3>
          <p className="text-gray-400 mb-4">
            Book a dedicated time slot to discuss your project needs directly.
          </p>
          <Link href="#" target="_blank" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 transition duration-300">
            Book a Meeting
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

// Reusable component for contact details
const ContactDetail = ({ icon: Icon, title, value, href }: { icon: any, title: string, value: string, href?: string }) => (
  <div className="flex items-start space-x-4">
    <Icon className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
    <div>
      <h4 className="text-md font-semibold text-gray-300">{title}</h4>
      {href ? (
        <a href={href} className="text-gray-100 hover:text-indigo-400 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-gray-100">{value}</p>
      )}
    </div>
  </div>
);

// Reusable component for social icons
const SocialIcon = ({ link, icon: Icon, label }: { link: string, icon: any, label: string }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-gray-400 hover:text-indigo-400 transition duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
    >
        <Icon size={30} />
    </motion.a>
);