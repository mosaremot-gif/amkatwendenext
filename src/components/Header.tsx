"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SignInButton, Show, UserButton } from "@clerk/nextjs";
import { Menu, X, Mail } from "lucide-react";
import Image from "next/image";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down and past 80px, hide header. If scrolling up, show header.
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu if scrolling down
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/#home" className="flex items-center gap-3">
          <Image
            src="/favicon.svg"
            alt="Amka Twende Logo"
            width={160}
            height={160}
            className="w-auto h-13 md:h-14 object-contain mix-blend-multiply"
            priority
          />
        </Link>

        {/* Desktop Navigation Links - Updated with absolute routes (/#section) */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          <Link href="/#home" className="hover:text-[#1C4E9E] transition-colors">
            Home
          </Link>
          <Link href="/#about" className="hover:text-[#1C4E9E] transition-colors">
            About Us
          </Link>
          <Link
            href="/#services"
            className="hover:text-[#1C4E9E] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#track"
            className="hover:text-[#1C4E9E] transition-colors"
          >
            Track SKR
          </Link>
          <Link href="/#contact" className="hover:text-[#1C4E9E] transition-colors">
            Contact Us
          </Link>

          {/* Desktop Clerk Auth & Quote */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:amkatwendelogistics1@gmail.com?subject=Inquiry%20%2F%20Quote%20Request"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1C4E9E] hover:bg-[#153c7a] text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4 text-[#F07C33]" />
              <span>Get a Quote</span>
            </a>

            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-sm font-semibold text-slate-600 hover:text-[#1C4E9E] px-3 py-2 transition-colors">
                  Staff Login
                </button>
              </SignInButton>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700 hover:text-[#1C4E9E] focus:outline-none"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Updated with absolute routes (/#section) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          <Link
            onClick={() => setIsOpen(false)}
            href="/#home"
            className="text-lg font-medium text-slate-800 hover:text-[#1C4E9E]"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#about"
            className="text-lg font-medium text-slate-800 hover:text-[#1C4E9E]"
          >
            About Us
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#services"
            className="text-lg font-medium text-slate-800 hover:text-[#1C4E9E]"
          >
            Services
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#track"
            className="text-lg font-medium text-slate-800 hover:text-[#1C4E9E]"
          >
            Track SKR
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#contact"
            className="text-lg font-medium text-slate-800 hover:text-[#1C4E9E]"
          >
            Contact Us
          </Link>
          
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500">
              Staff Access
            </span>
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-sm font-semibold text-[#1C4E9E] bg-blue-50 px-4 py-2 rounded-lg">
                  Staff Login
                </button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>

          <a
            href="mailto:amkatwendelogistics1@gmail.com?subject=Inquiry%20%2F%20Quote%20Request"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-[#F07C33] text-white font-semibold py-3 rounded-xl shadow-md"
          >
            <Mail className="w-4 h-4" />
            <span>Get a Quote on Email</span>
          </a>
        </div>
      )}
    </header>
  );
};