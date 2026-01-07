import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // EmailJS Configuration
    // Replace with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl w-full">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter mb-4">
            <span className="text-primary font-mono">04.</span> Get In Touch
          </h2>
          <p className="text-slate text-lg leading-relaxed max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="group">
            <label htmlFor="name" className="block text-slate-lighter mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-light border border-dark-lighter rounded focus:outline-none focus:border-primary text-slate-lighter transition-all duration-300 placeholder-slate/50"
              placeholder="John Doe"
            />
          </div>

          {/* Email Input */}
          <div className="group">
            <label htmlFor="email" className="block text-slate-lighter mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-light border border-dark-lighter rounded focus:outline-none focus:border-primary text-slate-lighter transition-all duration-300 placeholder-slate/50"
              placeholder="john@example.com"
            />
          </div>

          {/* Message Textarea */}
          <div className="group">
            <label htmlFor="message" className="block text-slate-lighter mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 bg-dark-light border border-dark-lighter rounded focus:outline-none focus:border-primary text-slate-lighter transition-all duration-300 resize-none placeholder-slate/50"
              placeholder="Your message..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-all duration-300 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <span>Send Message</span>
                <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
          </button>

          {/* Status Messages */}
          {status.message && (
            <div
              className={`flex items-center gap-3 p-4 rounded border ${
                status.type === 'success'
                  ? 'bg-primary/10 border-primary text-primary'
                  : 'bg-red-500/10 border-red-500 text-red-500'
              }`}
            >
              {status.type === 'success' ? (
                <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <p className="text-sm">{status.message}</p>
            </div>
          )}
        </form>

        {/* Alternative Contact */}
        <div className="mt-12 text-center">
          <p className="text-slate mb-4">Or email me directly at</p>
          <a
            href="mailto:your.email@example.com"
            className="text-primary hover:underline font-mono text-lg"
          >
            abdulbasith.dev4@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
