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

    // Simulated API submission (Hook your Nodemailer backend API route here: /api/send-email)
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
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#1C4E9E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#F07C33]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C4E9E]/30 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-[0.18em] mb-4 backdrop-blur-md">
            <Send className="w-4 h-4 text-[#F07C33]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            We Create Opportunity to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F07C33] to-orange-400">
              Reach Potential
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Ready to ship or clear cargo at JKIA Nairobi? Request a custom quote
            or talk directly to our dispatch desk.
          </p>
        </motion.div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Form Container (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            {/* Tab Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-950 rounded-2xl mb-8 border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab("quote")}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "quote"
                    ? "bg-[#1C4E9E] text-white shadow-lg shadow-blue-900/50"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText className="w-4 h-4 text-[#F07C33]" />
                <span>Request a Quote</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("support")}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "support"
                    ? "bg-[#1C4E9E] text-white shadow-lg shadow-blue-900/50"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Headphones className="w-4 h-4 text-[#F07C33]" />
                <span>24/7 Hours Support</span>
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Quote Request Received!
                </h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
                  Our clearing desk at JKIA Nairobi will review your cargo
                  specifications and email you shortly at{" "}
                  <span className="text-blue-300 font-semibold">
                    {formData.email}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold uppercase tracking-wider text-[#F07C33] underline hover:text-orange-300"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#1C4E9E] focus:ring-1 focus:ring-[#1C4E9E] transition-all"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#1C4E9E] focus:ring-1 focus:ring-[#1C4E9E] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Weight Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 700 000 000"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#1C4E9E] focus:ring-1 focus:ring-[#1C4E9E] transition-all"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Approx. Weight (Kg)
                    </label>
                    <div className="relative">
                      <Scale className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                      <input
                        type="number"
                        name="weightKg"
                        value={formData.weightKg}
                        onChange={handleChange}
                        placeholder="e.g. 250"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#1C4E9E] focus:ring-1 focus:ring-[#1C4E9E] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Freight Category Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Select Logistics Service
                  </label>
                  <select
                    name="freightType"
                    value={formData.freightType}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#1C4E9E] focus:ring-1 focus:ring-[#1C4E9E] transition-all"
                  >
                    <option>Customs Clearing & Forwarding</option>
                    <option>Air Freight (Express/JKIA)</option>
                    <option>Ocean Cargo Freight</option>
                    <option>Regional Road Transportation</option>
                    <option>Bonded Warehousing & Storage</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Cargo Details / Special Instructions
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your cargo type, origin, or destination..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#1C4E9E] focus:ring-1 focus:ring-[#1C4E9E] transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#F07C33] hover:bg-[#d96825] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>Submit Free Quote Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Side: Visual Image & Contact Credentials Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Top Operational Showcase Image */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-60">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000"
                alt="Amka Twende Logistics Fleet Transport"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F07C33]">
                  Nairobi Headquarters
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  JKIA Air Freight & Customs Terminal
                </h4>
              </div>
            </div>

            {/* Official Contact Info Card */}
            <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Direct Contact Credentials
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C4E9E] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-[#F07C33]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Official Email
                  </span>
                  <a
                    href="mailto:info@amkalogistics.com"
                    className="text-sm font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    amkatwendelogistics1@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C4E9E] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-[#F07C33]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Direct Call / WhatsApp
                  </span>
                  <a
                    href="https://wa.me/254735941780"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-orange-400 transition-colors"
                  >
                    +254 735 941 780
                  </a>
                </div>
              </div>

              {/* Physical Office */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C4E9E] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Building2 className="w-5 h-5 text-[#F07C33]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Physical Office
                  </span>
                  <p className="text-sm font-semibold text-slate-300 leading-snug">
                    Old Signon, Wing B, 1st Floor, Suite 202, JKIA, Nairobi,
                    Kenya
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-2">
                <div className="w-10 h-10 rounded-xl bg-[#1C4E9E] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Clock className="w-5 h-5 text-[#F07C33]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Working Hours
                  </span>
                  <p className="text-sm font-semibold text-slate-300">
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
