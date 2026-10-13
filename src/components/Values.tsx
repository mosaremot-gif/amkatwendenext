import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Eye,
  FileCheck2,
  HeartHandshake,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    title: "Zero Hidden Fees & Full Transparency",
    description:
      "No surprise port charges or unexpected add-ons. We provide itemized, honest clearing quotes upfront so you can manage costs with certainty.",
    icon: FileCheck2,
    badge: "Financial Clarity",
  },
  {
    title: "Proactive Duty & Time Protection",
    description:
      "Delays cost money. Our dedicated clearing team at JKIA Nairobi acts swiftly on customs entries to eliminate demurrage and storage penalties.",
    icon: Clock,
    badge: "Demurrage Shield",
  },
  {
    title: "Absolute Cargo Integrity & Safety",
    description:
      "Whether handling delicate air freight or bulk regional road cargo, we enforce strict chain-of-custody protocols from pickup to final drop-off.",
    icon: ShieldCheck,
    badge: "Risk Minimization",
  },
  {
    title: "Real-Time Operational Visibility",
    description:
      "Never wonder where your shipment is. We keep you informed with continuous status updates throughout the clearing and transit stages.",
    icon: Eye,
    badge: "Active Updates",
  },
  {
    title: "Dedicated Single Point of Contact",
    description:
      "No automated phone trees. You get direct access to an experienced logistics coordinator who knows your cargo personally.",
    icon: HeartHandshake,
    badge: "Direct Support",
  },
  {
    title: "Cross-Border Regulatory Expertise",
    description:
      "Navigating KRA customs regulations and East African trade tariffs requires precision. We guarantee strict compliance to protect your business reputation.",
    icon: Award,
    badge: "Full Compliance",
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const Values: React.FC = () => {
  return (
    <section
      id="values"
      className="py-24 bg-white text-slate-900 relative overflow-hidden"
    >
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#1C4E9E] text-xs font-bold uppercase tracking-[0.18em] mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#F07C33]" />
            <span>Our Uncompromising Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-6">
            Principles That Drive Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C4E9E] to-blue-600">
              Supply Chain
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We built Amka Twende Logistics around real solutions to real
            clearing challenges—delivering speed, safety, and peace of mind
            across Kenya and East Africa.
          </p>
        </motion.div>

        {/* Values 6-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group bg-slate-50/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 p-8 shadow-lg shadow-slate-100 flex flex-col justify-between relative transition-all duration-300 hover:border-[#1C4E9E]/40 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10"
              >
                {/* Accent Top Gradient on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1C4E9E] to-[#F07C33] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-[#1C4E9E] text-white flex items-center justify-center shadow-md shadow-blue-900/20 group-hover:bg-[#F07C33] transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-100/60 text-[#1C4E9E] text-[11px] font-extrabold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1C4E9E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Interactive Footer */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#1C4E9E] group-hover:text-[#F07C33] transition-colors">
                  <span>Customer Guarantee</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
