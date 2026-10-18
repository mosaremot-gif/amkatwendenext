"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SignInButton, Show, UserButton } from "@clerk/nextjs";
import { Menu, X, Mail, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-blue-100/80"
    >
      {/* Top Vibrant Glow Accent Line */}
      <div className="h-1 bg-gradient-to-r from-[#1C4E9E] via-cyan-500 to-[#F07C33]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href="/#home" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br bg-white flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:shadow-[#F07C33]/40 group-hover:from-[#F07C33] group-hover:to-amber-500 transition-all duration-500 p-2.5">
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/favicon.svg"
                alt="Amka Twende Logo"
                width={30}
                height={30}
                className="w-7 h-7 object-contain drop-shadow"
                priority
              />
            </div>
            <div>
              <span className="block font-black text-lg bg-gradient-to-r from-[#1C4E9E] to-blue-700 bg-clip-text text-transparent tracking-tight leading-tight">
                AMKA TWENDE
              </span>
              <span className="block text-xs font-bold text-[#F07C33] tracking-widest uppercase flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />
                Logistics
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation Links with Next.js Link & Hash Routing */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700">
          {[
            { name: "Home", href: "/#home" },
            { name: "About Us", href: "/#about" },
            { name: "Services", href: "/#services" },
            { name: "Track SKR", href: "/#track" },
            { name: "Contact Us", href: "/#contact" },
          ].map((link) => (
            <motion.div key={link.name} whileHover={{ y: -1 }}>
              <Link
                href={link.href}
                className="relative py-1 text-slate-700 hover:text-[#1C4E9E] transition-colors group inline-block"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1C4E9E] to-[#F07C33] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            </motion.div>
          ))}

          {/* Desktop Auth & Actions */}
          <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
            <motion.a
              href="mailto:amkatwendelogistics1@gmail.com?subject=Inquiry%20%2F%20Quote%20Request"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(240, 124, 51, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#F07C33] to-amber-500 hover:from-[#e06b24] hover:to-amber-600 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 text-sm"
            >
              <Mail className="w-4 h-4 text-white animate-bounce" />
              <span>Get a Quote</span>
            </motion.a>

            <Show when="signed-out">
              <SignInButton mode="modal">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-sm font-bold text-[#1C4E9E] bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl border border-blue-200/60 transition-colors"
                >
                  Staff Login
                </motion.button>
              </SignInButton>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative p-2.5 rounded-xl bg-blue-50 text-[#1C4E9E] hover:bg-blue-100 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown with Framer Motion & Next.js Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-21 left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-blue-100 shadow-2xl py-6 px-6 flex flex-col gap-4 overflow-hidden"
          >
            {[
              { name: "Home", href: "/#home" },
              { name: "About Us", href: "/#about" },
              { name: "Services", href: "/#services" },
              { name: "Track SKR", href: "/#track" },
              { name: "Contact Us", href: "/#contact" },
            ].map((link) => (
              <motion.div
                key={link.name}
                whileTap={{ scale: 0.98, x: 4 }}
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-lg font-bold text-slate-800 hover:text-[#1C4E9E] flex items-center justify-between py-2 border-b border-slate-100"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#F07C33]" />
                </Link>
              </motion.div>
            ))}

            <div className="pt-2 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-500">
                Staff Access
              </span>
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="text-sm font-bold text-[#1C4E9E] bg-blue-100/70 hover:bg-blue-200 px-4 py-2 rounded-xl transition-colors">
                    Staff Login
                  </button>
                </SignInButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>

            <motion.a
              whileTap={{ scale: 0.97 }}
              href="mailto:amkatwendelogistics1@gmail.com?subject=Inquiry%20%2F%20Quote%20Request"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-[#F07C33] to-amber-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-500/30 text-base"
            >
              <Mail className="w-5 h-5 text-white" />
              <span>Get a Quote on Email</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
