"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Scale,
  Send,
  Headphones,
  CheckCircle2,
  FileText,
  Clock,
  Building2,
  Sparkles,
} from "lucide-react";

export const QuoteContact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"quote" | "support">("quote");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    weightKg: "",
    freightType: "Customs Clearing & Forwarding",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitted(true);
      setLoading(false);
    } catch {
      setLoading(false);
      alert("Submission failed. Please try contacting us via WhatsApp.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0D52CE] text-white relative overflow-hidden"
    >
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#FF5C00]/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-md shadow-lg">
            <Send className="w-4 h-4 text-[#FF5C00]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            We Create Opportunity to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] via-amber-300 to-[#FF5C00]">
              Reach Potential
            </span>
          </h2>
          <p className="text-blue-100/90 text-base sm:text-xl leading-relaxed">
            Ready to ship or clear cargo at JKIA Nairobi? Request a custom quote
            or talk directly to our dispatch desk.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: Form Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#031536]/85 rounded-3xl border border-white/20 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            {/* Glowing Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF5C00] via-amber-400 to-[#FF5C00]" />

            {/* Tab Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#020B1A] rounded-2xl mb-8 border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab("quote")}
                className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "quote"
                    ? "bg-[#0D52CE] text-white shadow-lg shadow-[#0D52CE]/40"
                    : "text-blue-200/70 hover:text-white"
                }`}
              >
                <FileText className="w-4 h-4 text-[#FF5C00]" />
                <span>Request a Quote</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("support")}
                className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "support"
                    ? "bg-[#0D52CE] text-white shadow-lg shadow-[#0D52CE]/40"
                    : "text-blue-200/70 hover:text-white"
                }`}
              >
                <Headphones className="w-4 h-4 text-[#FF5C00]" />
                <span>24/7 Hours Support</span>
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-500/40 shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Quote Request Received!
                </h3>
                <p className="text-blue-100/80 text-sm max-w-md mx-auto mb-6">
                  Our clearing desk at JKIA Nairobi will review your cargo
                  specifications and email you shortly at{" "}
                  <span className="text-[#FF5C00] font-bold">
                    {formData.email}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold uppercase tracking-wider text-[#FF5C00] underline hover:text-amber-300 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-5 h-5 text-blue-300/60" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#020B1A] border border-white/15 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-blue-200/40 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-5 h-5 text-blue-300/60" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#020B1A] border border-white/15 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-blue-200/40 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Weight Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-5 h-5 text-blue-300/60" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 700 000 000"
                        className="w-full bg-[#020B1A] border border-white/15 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-blue-200/40 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-2">
                      Approx. Weight (Kg)
                    </label>
                    <div className="relative">
                      <Scale className="absolute left-4 top-3.5 w-5 h-5 text-blue-300/60" />
                      <input
                        type="number"
                        name="weightKg"
                        value={formData.weightKg}
                        onChange={handleChange}
                        placeholder="e.g. 250"
                        className="w-full bg-[#020B1A] border border-white/15 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-blue-200/40 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Freight Category Selection */}
                <div>
                  <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-2">
                    Select Logistics Service
                  </label>
                  <select
                    name="freightType"
                    value={formData.freightType}
                    onChange={handleChange}
                    className="w-full bg-[#020B1A] border border-white/15 rounded-xl py-3.5 px-4 text-sm text-white focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all cursor-pointer"
                  >
                    <option className="bg-[#031536] text-white">
                      Customs Clearing & Forwarding
                    </option>
                    <option className="bg-[#031536] text-white">
                      Air Freight (Express/JKIA)
                    </option>
                    <option className="bg-[#031536] text-white">
                      Ocean Cargo Freight
                    </option>
                    <option className="bg-[#031536] text-white">
                      Regional Road Transportation
                    </option>
                    <option className="bg-[#031536] text-white">
                      Bonded Warehousing & Storage
                    </option>
                  </select>
                </div>

                {/* Cargo Details / Message */}
                <div>
                  <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-2">
                    Cargo Details / Special Instructions
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your cargo type, origin, or destination..."
                    className="w-full bg-[#020B1A] border border-white/15 rounded-xl py-3 px-4 text-sm text-white placeholder:text-blue-200/40 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FF5C00] hover:bg-[#E05100] text-white font-bold py-4 rounded-xl shadow-lg shadow-black/20 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>Processing Request...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-200" />
                      <span>Submit Free Quote Request</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Side: Operational Image & Contact Credentials Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Top Operational Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-64">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000"
                alt="Amka Twende Logistics Fleet Transport"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031536] via-[#031536]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5C00]">
                  Nairobi Headquarters
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  JKIA Air Freight & Customs Terminal
                </h4>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-[#031536]/85 rounded-3xl border border-white/20 p-8 space-y-6 backdrop-blur-xl shadow-2xl">
              <h3 className="text-xl font-black text-white border-b border-white/15 pb-4">
                Direct Contact Credentials
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#0D52CE] border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Mail className="w-5 h-5 text-[#FF5C00]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-blue-200/70 uppercase tracking-wider">
                    Official Email
                  </span>
                  <a
                    href="mailto:amkatwendelogistics1@gmail.com"
                    className="text-sm font-bold text-white hover:text-[#FF5C00] transition-colors"
                  >
                    amkatwendelogistics1@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#0D52CE] border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Phone className="w-5 h-5 text-[#FF5C00]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-blue-200/70 uppercase tracking-wider">
                    Direct Call / WhatsApp
                  </span>
                  <a
                    href="https://wa.me/254735941780"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-[#FF5C00] transition-colors"
                  >
                    +254 735 941 780
                  </a>
                </div>
              </div>

              {/* Physical Office */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#0D52CE] border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Building2 className="w-5 h-5 text-[#FF5C00]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-blue-200/70 uppercase tracking-wider">
                    Physical Office
                  </span>
                  <p className="text-sm font-semibold text-blue-100 leading-snug">
                    Jomo Kenyatta International Cargo Area, Nairobi Kenya
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-white/10">
                <div className="w-11 h-11 rounded-2xl bg-[#0D52CE] border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Clock className="w-5 h-5 text-[#FF5C00]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-blue-200/70 uppercase tracking-wider">
                    Working Hours
                  </span>
                  <p className="text-sm font-semibold text-blue-100">
                    Mon - Sat: 8:00 AM - 6:00 PM (24/7 Dispatch)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
