import React, { useState, useEffect } from "react";
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
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#1C4E9E] flex items-center justify-center shadow-md group-hover:bg-[#F07C33] transition-colors duration-300 p-2">
            <Image
              src="/favicon.svg"
              alt="Amka Twende Logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>
          <div>
            <span className="block font-extrabold text-lg text-[#1C4E9E] tracking-tight leading-tight">
              AMKA TWENDE
            </span>
            <span className="block text-xs font-bold text-[#F07C33] tracking-wider uppercase">
              Clearing and forwarding
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links  */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          <a href="#home" className="hover:text-[#1C4E9E] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#1C4E9E] transition-colors">
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-[#1C4E9E] transition-colors"
          >
            Services
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#track"
            className="text-lg font-medium text-slate-800 hover:text-[#1C4E9E]"
          >
            Track SKR
          </a>
          <a href="#contact" className="hover:text-[#1C4E9E] transition-colors">
            Contact Us
          </a>
          {/* Desktop Clerk Auth */}
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          <a
            onClick={() => setIsOpen(false)}
            href="#home"
            className="text-lg font-medium text-slate-800 hover:text-[#1C4E9E]"
          >
            Home
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#about"
            className="text-lg font-medium text-slate-800 hover:text-[#1C4E9E]"
          >
            About Us
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#services"
            className="text-lg font-medium text-slate-800 hover:text-[#1C4E9E]"
          >
            Services
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#track"
            className="text-lg font-medium text-slate-800 hover:text-[#1C4E9E]"
          >
            Track SKR
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#contact"
            className="text-lg font-medium text-slate-800 hover:text-[#1C4E9E]"
          >
            Contact Us
          </a>
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
