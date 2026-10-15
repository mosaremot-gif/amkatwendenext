"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Plane, Truck, Ship } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const slides = [
  {
    id: 0,
    eyebrow: "OCEAN FREIGHT & GLOBAL LOGISTICS",
    title: "Your Cargo.",
    highlight: "Our Commitment.",
    image: "/cargo-ship.webp",
    badge: "Ocean Freight",
    description: "Worldwide shipping",
    icon: Ship,
    position: "center",
  },
  {
    id: 1,
    eyebrow: "INTERNATIONAL AIR FREIGHT",
    title: "Across Borders.",
    highlight: "Ahead of Time.",
    image: "/air-hero.webp",
    badge: "Air Freight",
    description: "Fast global delivery",
    icon: Plane,
    position: "center",
  },
  {
    id: 2,
    eyebrow: "REGIONAL ROAD TRANSPORT",
    title: "Moving Cargo.",
    highlight: "Connecting Africa.",
    image: "/road-hero.webp",
    badge: "Road Transport",
    description: "East Africa transit",
    icon: Truck,
    position: "center",
  },
];

const ROTATION_INTERVAL = 4500;

const contentVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const imageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.045,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: {
        duration: 1.1,
        ease: "easeInOut",
      },
      scale: {
        duration: 7,
        ease: "linear",
      },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.85,
      ease: "easeInOut",
    },
  },
};

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const active = slides[currentSlide];

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
  };

  return (
    <section
      id="home"
      aria-label="Amka Twende Logistics"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#08182C] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* BACKGROUND PHOTOGRAPHY */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={active.id}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={active.image}
              alt={`${active.badge} logistics`}
              fill
              priority={active.id === 0}
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 
        SUBTLE IMAGE OVERLAYS
        Neutral dark gradients instead of heavy blue.
        Images remain vibrant and recognizable.
      */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#071323]/75 via-[#071323]/25 to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#071323]/70 via-transparent to-[#071323]/25" />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-16 pt-36 sm:pt-40 lg:px-10 lg:pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${active.id}`}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full max-w-[900px]"
          >
            {/* MINIMAL EYEBROW */}
            <div className="mb-7 flex items-center gap-3 sm:mb-9">
              <span className="h-[2px] w-8 bg-[#FF5C00] sm:w-11" />

              <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-white/90 sm:text-xs sm:tracking-[0.24em]">
                {active.eyebrow}
              </span>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="max-w-[1100px] text-[clamp(3.4rem,8vw,7.4rem)] font-black leading-[0.94] tracking-[-0.065em] text-white">
              <span className="block">{active.title}</span>

              <span className="mt-3 block text-[#FF6A1A] sm:mt-4">
                {active.highlight}
              </span>
            </h1>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:mt-12">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:amkatwendelogistics1@gmail.com?subject=Freight%20Quotation%20Request"
                className="group inline-flex min-h-14 items-center justify-center gap-5 rounded-md bg-[#0D52CE] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-colors duration-300 hover:bg-[#1045AC] sm:px-8 sm:text-base"
              >
                Request a Quote
                <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <motion.a
                whileHover={{ x: 3 }}
                href="#services"
                className="group inline-flex min-h-14 items-center justify-center gap-3 px-3 py-4 text-sm font-semibold text-white transition-colors hover:text-[#FF8A50] sm:px-5 sm:text-base"
              >
                Explore Our Services
                <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTTOM SERVICE NAVIGATION */}
      <div className="relative z-10 w-full border-t border-white/20 bg-[#061324]/30 backdrop-blur-[8px]">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-3 px-4 sm:px-6 lg:px-10">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            const selected = currentSlide === index;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Show ${slide.badge}`}
                aria-pressed={selected}
                className={`group relative flex min-h-[82px] items-center justify-center gap-3 border-r border-white/15 px-2 py-5 text-left transition-colors duration-300 last:border-r-0 sm:min-h-[100px] sm:justify-start sm:gap-4 sm:px-5 lg:px-8 ${
                  selected
                    ? "text-white"
                    : "text-white/65 hover:bg-white/5 hover:text-white"
                }`}
              >
                {/* ACTIVE TOP LINE */}
                <span
                  className={`absolute inset-x-0 top-0 h-[3px] origin-left bg-[#FF5C00] transition-transform duration-500 ${
                    selected
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-50"
                  }`}
                />

                {/* SERVICE ICON */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-12 sm:w-12 ${
                    selected
                      ? "border-[#FF5C00]/70 bg-[#FF5C00]/15 text-[#FF783A]"
                      : "border-white/25 bg-white/5 text-white/75 group-hover:border-white/50"
                  }`}
                >
                  <Icon
                    className="h-[19px] w-[19px] sm:h-[22px] sm:w-[22px]"
                    strokeWidth={1.7}
                  />
                </div>

                {/* SERVICE TEXT */}
                <div className="hidden min-w-0 flex-col gap-1 sm:flex">
                  <span className="text-sm font-semibold tracking-[-0.01em] lg:text-base">
                    {slide.badge}
                  </span>

                  <span className="text-xs text-white/60">
                    {slide.description}
                  </span>
                </div>

                {/* MOBILE LABEL */}
                <span className="text-[10px] font-semibold leading-tight sm:hidden">
                  {slide.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SUBTLE IMAGE CREDIT-FREE DECORATIVE EDGE */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[2px] w-full bg-gradient-to-r from-[#FF5C00] via-[#0D52CE] to-transparent opacity-70" />
    </section>
  );
};
