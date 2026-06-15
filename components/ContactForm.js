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
    <section id="contact" className="py-20 relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* Column 1: Contact details */}
          <div className="flex-1 flex flex-col justify-between order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold text-indigo-300 uppercase tracking-widest mb-3">
                  <IoMdMail />
                  <span>Stay in touch</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                  Let&apos;s Build Something Great Together
                </h2>
                <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed text-justify max-w-lg">
                  Whether you have an upcoming project, want to hire me, or just want to chat about new technologies, feel free to reach out. I would love to hear from you.
                </p>
              </div>

              {/* Detail Cards */}
              <div className="space-y-4 pt-4">
                
                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Location</p>
                    <p className="text-sm text-gray-200 font-medium">New Delhi, India</p>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href="tel:+919560362339"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-sm text-gray-200 font-medium">+91 95603 62339</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@shalimarmehra.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-sm text-gray-200 font-medium">contact@shalimarmehra.com</p>
                  </div>
                </a>

              </div>
            </div>

            {/* Social handles */}
            <div className="border-t border-white/5 pt-8 mt-8">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Follow my social profiles</p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://github.com/shalimarmehra"
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white transition-all hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-base" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shalimarmehra/"
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white transition-all hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin className="text-base text-sky-400" />
                </a>
                <a
                  href="https://www.instagram.com/shalimarmehra/"
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white transition-all hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareInstagram className="text-base text-pink-400" />
                </a>
                <a
                  href="https://youtube.com/@shalimarmehra"
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white transition-all hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube className="text-base text-rose-500" />
                </a>
                <a
                  href="https://x.com/shalimarmehra"
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white transition-all hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX className="text-base text-white" />
                </a>
                <a
                  href="https://threads.net/@shalimarmehra"
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white transition-all hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsThreads className="text-base text-gray-200" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: The Contact Form */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-6 font-display">
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
                    className="block w-full px-4 py-3 bg-[#030712]/60 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 focus:outline-none transition-all text-sm font-medium"
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
                    className="block w-full px-4 py-3 bg-[#030712]/60 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 focus:outline-none transition-all text-sm font-medium"
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
                    className="block w-full px-4 py-3 bg-[#030712]/60 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 focus:outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>

                {/* Status Notice */}
                {status && (
                  <div className="p-3 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    {status}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm tracking-wide rounded-xl shadow-[0_4px_16px_rgba(99,102,241,0.2)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.35)] transition-all active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50"
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
