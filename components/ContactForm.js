"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoYoutube, IoMdMail } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX, BsThreads } from "react-icons/bs";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-cream relative overflow-hidden">
      {/* Large section number */}
      <div className="absolute top-4 left-4 lg:left-12 font-serif font-light text-[140px] md:text-[180px] leading-none text-[#F0ECE6] pointer-events-none select-none z-0">
        06
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* Column 1: Contact details */}
          <div className="flex-1 flex flex-col justify-between order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
                  Let&apos;s Connect
                </h2>
                <p className="text-gray-500 font-sans text-sm sm:text-base leading-relaxed text-justify max-w-lg">
                  Whether you have an upcoming project, want to hire me, or just want to chat about new technologies, feel free to reach out. I would love to hear from you.
                </p>
              </div>

              {/* Detail Cards */}
              <div className="space-y-4 pt-4">
                
                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-warm-gray-200 hover:border-crimson transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center text-crimson group-hover:scale-105 transition-transform">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location</p>
                    <p className="text-sm text-ink font-medium">New Delhi, India</p>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href="tel:+919560362339"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-warm-gray-200 hover:border-crimson transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center text-crimson group-hover:scale-105 transition-transform">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-sm text-ink font-medium">+91 95603 62339</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@shalimarmehra.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-warm-gray-200 hover:border-crimson transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center text-crimson group-hover:scale-105 transition-transform">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-sm text-ink font-medium">contact@shalimarmehra.com</p>
                  </div>
                </a>

              </div>
            </div>

            {/* Social handles */}
            <div className="border-t border-warm-gray-200 pt-8 mt-8">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">Follow my social profiles</p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://github.com/shalimarmehra"
                  className="p-2.5 rounded-xl bg-white border border-warm-gray-200 hover:text-crimson hover:-translate-y-1 transition-all text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-base" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shalimarmehra/"
                  className="p-2.5 rounded-xl bg-white border border-warm-gray-200 hover:text-crimson hover:-translate-y-1 transition-all text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin className="text-base" />
                </a>
                <a
                  href="https://www.instagram.com/shalimarmehra/"
                  className="p-2.5 rounded-xl bg-white border border-warm-gray-200 hover:text-crimson hover:-translate-y-1 transition-all text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareInstagram className="text-base" />
                </a>
                <a
                  href="https://youtube.com/@shalimarmehra"
                  className="p-2.5 rounded-xl bg-white border border-warm-gray-200 hover:text-crimson hover:-translate-y-1 transition-all text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube className="text-base" />
                </a>
                <a
                  href="https://x.com/shalimarmehra"
                  className="p-2.5 rounded-xl bg-white border border-warm-gray-200 hover:text-crimson hover:-translate-y-1 transition-all text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX className="text-base" />
                </a>
                <a
                  href="https://threads.net/@shalimarmehra"
                  className="p-2.5 rounded-xl bg-white border border-warm-gray-200 hover:text-crimson hover:-translate-y-1 transition-all text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsThreads className="text-base" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: The Contact Form */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-warm-gray-200 relative overflow-hidden shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-ink mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label className="block mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="block w-full px-4 py-3 bg-cream border border-warm-gray-200 rounded-xl text-ink placeholder-gray-400 focus:border-crimson focus:ring-2 focus:ring-crimson/10 focus:outline-none transition-all text-sm font-medium"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="block w-full px-4 py-3 bg-cream border border-warm-gray-200 rounded-xl text-ink placeholder-gray-400 focus:border-crimson focus:ring-2 focus:ring-crimson/10 focus:outline-none transition-all text-sm font-medium"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="What would you like to discuss?"
                    className="block w-full px-4 py-3 bg-cream border border-warm-gray-200 rounded-xl text-ink placeholder-gray-400 focus:border-crimson focus:ring-2 focus:ring-crimson/10 focus:outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>

                {/* Status Notice */}
                {status && (
                  <div className="p-3 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-xl">
                    {status}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-crimson hover:bg-crimson-dark text-white font-bold text-sm tracking-wide rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
