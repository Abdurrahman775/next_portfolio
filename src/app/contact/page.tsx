// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

// WhatsApp SVG icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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

            <ContactDetail icon={Mail} title="Email Me" value="abdurrahmanalhassan775@gmail.com" href="mailto:abdurrahmanalhassan775@gmail.com" />
            <ContactDetail icon={Phone} title="Call/WhatsApp" value="+234 8145919419" href="tel:+2348145919419" />
            <ContactDetail icon={MapPin} title="Location" value="Dorayi Chiranci Maahad link kano." />
            
            <div className="pt-4 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Social Links</h3>
                <div className="flex space-x-6">
                    <SocialIcon link="https://github.com/Abdurrahman775" icon={Github} label="GitHub" />
                    <SocialIcon link="https://www.linkedin.com/in/abdurrahman-alhassan" icon={Linkedin} label="LinkedIn" />
                    <SocialIcon link="https://x.com/Ibn__alhassan" icon={Twitter} label="X (Twitter)" />
                    <SocialIcon link="https://www.instagram.com/ibn___alhassan/" icon={Instagram} label="Instagram" />
                    <SocialIcon link="https://wa.me/2348145919419" icon={WhatsAppIcon} label="WhatsApp" />
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