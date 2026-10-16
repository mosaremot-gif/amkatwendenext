"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  Sparkles,
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
    image: "/rocker-sta-RSYBi_1fhfM-unsplash.jpg",
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
    title: "Warehouse Keeping",
    description:
      "Secure, organized storage facilities designed to protect your goods and streamline your inventory workflow.",
    image: "/warehousing.jpg",
  },
  {
    slug: "safe-keeping",
    icon: PackageCheck,
    title: "Safekeeping",
    description:
      "Secure custody of your cargo and valuable goods, with controlled access, careful handling, and full accountability.",
    image: "/safekeeping.jpg",
  },
];

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
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 bg-[#0D52CE] text-white relative overflow-hidden"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#FF5C00]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-5 backdrop-blur-xl shadow-lg">
            <ShieldCheck className="w-4 h-4 text-[#FF5C00]" />
            <span>Our Core Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Engineered to Move Your Business{" "}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] via-amber-300 to-[#FF5C00]">
              Forward
            </span>
          </h2>

          <p className="text-blue-100/90 text-base sm:text-xl leading-relaxed">
            From JKIA Nairobi to the wider East African borders, we manage your
            entire clearing, forwarding, and supply chain ecosystem with
            absolute precision.
          </p>
        </motion.div>

        {/* Services Grid */}
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
                className="group bg-[#031536]/80 rounded-3xl border border-white/15 shadow-2xl overflow-hidden flex flex-col justify-between relative transition-all duration-300 hover:border-[#FF5C00] hover:shadow-2xl hover:shadow-[#FF5C00]/20 backdrop-blur-xl"
              >
                {/* Glowing Hover Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF5C00] via-amber-400 to-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full"
                >
                  <div>
                    {/* Cover Image Container */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#031536] via-[#031536]/40 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute bottom-4 left-6 w-14 h-14 rounded-2xl bg-[#0D52CE] text-white flex items-center justify-center shadow-xl border border-white/20 group-hover:bg-[#FF5C00] group-hover:rotate-6 transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-7">
                      <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-[#FF5C00] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-blue-100/80 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Card Action Link */}
                <div className="px-7 pb-7 pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between font-bold text-sm text-[#FF5C00] group-hover:text-amber-300 transition-colors pt-4 border-t border-white/10 w-full"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Learn More & Details
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
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
