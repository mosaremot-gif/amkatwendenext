import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FileCheck,
  Plane,
  Ship,
  Truck,
  Warehouse,
  PackageCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const coreServices = [
  {
    slug: "customs-clearing",
    icon: FileCheck,
    title: "Customs Clearing & Forwarding",
    description:
      "Fast-track documentation, tax compliance, and hassle-free cargo release centered at JKIA Nairobi and major borders.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "air-freight",
    icon: Plane,
    title: "Air Shipping",
    description:
      "High-priority air cargo solutions engineered for speed, time-critical shipments, and direct airline handling through JKIA Nairobi.",
    // File lives in public/air.jpg
    image: "/air.jpg",
  },
  {
    slug: "ocean-freight",
    icon: Ship,
    title: "Ocean Freight",
    description:
      "Cost-effective global containerized shipping (FCL/LCL), consolidated sea cargo, and port operations via Mombasa Port.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "road-transport",
    icon: Truck,
    title: "Road Transportation",
    description:
      "Reliable fleet solutions and last-mile distribution ensuring secure delivery across Kenya and the East Africa region.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "bonded-warehousing",
    icon: Warehouse,
    title: "Warehouse keeping",
    description:
      "Secure, organized storage facilities designed to protect your goods and streamline your inventory workflow.",
    // File lives in public/warehousing.jpg
    image: "/warehousing.jpg",
  },
  {
    slug: "safe-keeping",
    icon: PackageCheck,
    title: "Safekeeping",
    description:
      "Secure custody of your cargo and valuable goods, with controlled access, careful handling, and full accountability until collection or delivery.",
    // File lives in public/safekeeping.jpg
    image: "/safekeeping.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#1C4E9E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#F07C33]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C4E9E]/30 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-[0.18em] mb-4 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-[#F07C33]" />
            <span>Our Core Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Engineered to Move Your Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F07C33] to-orange-400">
              Forward
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From JKIA Nairobi to the wider East African borders, we manage your
            entire clearing, forwarding, and supply chain ecosystem with
            absolute precision.
          </p>
        </motion.div>

        {/* Services Image-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {coreServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between relative transition-all duration-300 hover:border-[#1C4E9E] hover:shadow-blue-900/20"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1C4E9E] to-[#F07C33] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div>
                    {/* Cover Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-[#1C4E9E] text-white flex items-center justify-center shadow-lg border border-white/10 group-hover:bg-[#F07C33] transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Learn More Link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#F07C33] group-hover:text-orange-400 transition-colors pt-4 border-t border-slate-800/80 w-full"
                  >
                    <span>Learn More & Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};