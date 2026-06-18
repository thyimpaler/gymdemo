import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Eye, X } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showOriginalAddress, setShowOriginalAddress] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gym-dark/20 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-wider text-white">
            FIND & <span className="text-brand-yellow">CONTACT US</span>
          </h2>
          <div className="h-1 w-24 bg-brand-yellow mx-auto mt-4 mb-6" />
          <p className="text-zinc-400 text-base sm:text-lg">
            Have questions about our facilities, membership options, or personal training? Reach out or visit us in Hucknall today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Info & Map Card */}
          <div className="space-y-8">
            <div className="bg-gym-black border border-zinc-850 p-8 hover:border-brand-yellow/30 transition-all duration-300">
              <h3 className="font-display text-2xl uppercase text-white tracking-wider mb-6">
                GET IN TOUCH
              </h3>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/10 p-3 shrink-0 border border-brand-yellow/20">
                    <MapPin className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-brand-yellow">Location</h4>
                    <p className="text-white text-sm mt-1 leading-relaxed font-semibold">
                      Unit 1, Ben Arran House,<br />
                      Wigwam Lane, Hucknall,<br />
                      Nottingham, NG15 7SZ
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Ultimate+Gym+Fitness+Wigwam+Lane+Hucknall+Nottingham+NG15+7SZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[10px] uppercase font-bold tracking-widest text-brand-yellow hover:text-white mt-3 transition-colors"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/10 p-3 shrink-0 border border-brand-yellow/20">
                    <Phone className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-brand-yellow">Call Us</h4>
                    <p className="text-white text-base mt-1 font-semibold">
                      0115 9635710
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/10 p-3 shrink-0 border border-brand-yellow/20">
                    <Mail className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-brand-yellow">Email Us</h4>
                    <p className="text-white text-sm mt-1 font-semibold hover:text-brand-yellow transition-colors">
                      <a href="mailto:theultimateplacehucknall@gmail.com">theultimateplacehucknall@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/10 p-3 shrink-0 border border-brand-yellow/20">
                    <Clock className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-brand-yellow">Opening Hours</h4>
                    <div className="grid grid-cols-2 gap-x-4 text-zinc-300 text-sm mt-2 font-medium">
                      <span>Mon - Fri:</span>
                      <span className="text-white font-semibold">6:00 AM - 10:00 PM</span>
                      <span>Saturday:</span>
                      <span className="text-white font-semibold">8:00 AM - 8:00 PM</span>
                      <span>Sunday:</span>
                      <span className="text-white font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Board Reference Frame */}
            <div className="bg-gym-black border border-zinc-850 p-6 flex flex-col items-center justify-center hover:border-brand-yellow/30 transition-all duration-300">
              <h4 className="text-xs uppercase font-bold tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                Official Location Document
              </h4>
              <div className="relative group overflow-hidden border border-zinc-800 bg-black max-w-[320px]">
                <img
                  src="/address.png"
                  alt="Official address plaque"
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 select-none"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <button
                    onClick={() => setShowOriginalAddress(true)}
                    className="bg-brand-yellow text-black px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:scale-105 transition-transform"
                  >
                    <Eye className="h-4 w-4" /> Expand Plaque
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gym-black border border-zinc-850 p-8 hover:border-brand-yellow/30 transition-all duration-300">
            <h3 className="font-display text-2xl uppercase text-white tracking-wider mb-6">
              SEND A MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase font-bold tracking-widest text-zinc-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-gym-dark/50 border border-zinc-800 focus:border-brand-yellow px-4 py-3 text-white text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase font-bold tracking-widest text-zinc-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="w-full bg-gym-dark/50 border border-zinc-800 focus:border-brand-yellow px-4 py-3 text-white text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs uppercase font-bold tracking-widest text-zinc-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Membership Inquiry"
                  className="w-full bg-gym-dark/50 border border-zinc-800 focus:border-brand-yellow px-4 py-3 text-white text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase font-bold tracking-widest text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full bg-gym-dark/50 border border-zinc-800 focus:border-brand-yellow px-4 py-3 text-white text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-bold tracking-widest uppercase text-xs py-4 transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>

            {/* Success notification */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 border border-brand-yellow bg-brand-yellow/10 p-4 text-center text-brand-yellow text-xs font-bold uppercase tracking-widest"
                >
                  Message Sent! We will get back to you shortly.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Address Plaque Modal */}
      <AnimatePresence>
        {showOriginalAddress && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowOriginalAddress(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-gym-dark border border-zinc-800 p-3 shadow-2xl cursor-default"
            >
              <button
                onClick={() => setShowOriginalAddress(false)}
                className="absolute -top-12 right-0 text-white hover:text-brand-yellow bg-zinc-900 border border-zinc-800 p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex flex-col">
                <div className="flex items-center justify-between border-b border-zinc-850 pb-3 mb-3 px-2">
                  <h3 className="font-display text-lg tracking-wider text-brand-yellow uppercase">
                    Official Location plaque
                  </h3>
                  <span className="text-zinc-500 text-xs font-sans">
                    C.1_address.png
                  </span>
                </div>
                <div className="overflow-auto max-h-[70vh] flex justify-center bg-black">
                  <img
                    src="/address.png"
                    alt="Official Address Plate"
                    className="max-w-full h-auto object-contain select-none"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
