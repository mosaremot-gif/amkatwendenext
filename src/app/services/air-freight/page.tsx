"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  Mail,
  Phone,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Globe2,
  Plane,
} from "lucide-react";

export default function AirFreightPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between selection:bg-[#F07C33] selection:text-white">
      <Header />

      <main className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full flex-1">
        {/* Back Link */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#F07C33] text-sm font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Services</span>
        </Link>

        {/* Hero Image Container */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 mb-8 shadow-2xl bg-slate-900">
          <div className="h-80 sm:h-96 w-full relative overflow-hidden">
           <img
  src="\air.jpg"
  alt="Air Freight Cargo Loading"
  className="w-full h-full object-cover object-center"
/>
          </div>
        </div>

        {/* Header & Wording Section - Positioned directly below the image */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C4E9E]/40 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F07C33]" />
              <span>Amka Twende Logistics Expertise</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Air Freight Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              High-priority air cargo solutions engineered for speed, time-critical shipments, and direct airline handling through JKIA Nairobi.
            </p>
          </div>

          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1C4E9E] flex items-center justify-center text-white shadow-xl shrink-0 border border-white/10">
            <Plane className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F07C33] mb-1">24-48 Hrs</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Transit Window</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F07C33] mb-1">JKIA</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Express Entry</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F07C33] mb-1">100%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Temperature Controlled</div>
          </div>
        </div>

        {/* Main Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Globe2 className="w-6 h-6 text-[#1C4E9E]" />
                <span>Overview & Operations</span>
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                Operating out of Jomo Kenyatta International Airport (JKIA), we manage priority air express handling, charter services, and temperature-controlled cold chain shipments to keep your supply chain moving globally.
              </p>
            </section>

            <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#F07C33]" />
                <span>Key Capabilities</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3.5 text-slate-300 text-sm sm:text-base">
                  <span className="w-2 h-2 rounded-full bg-[#F07C33] mt-2 shrink-0" />
                  <span>Express air charter and direct airline booking options</span>
                </li>
                <li className="flex items-start gap-3.5 text-slate-300 text-sm sm:text-base">
                  <span className="w-2 h-2 rounded-full bg-[#F07C33] mt-2 shrink-0" />
                  <span>Temperature-controlled cold chain handling for perishables & pharma</span>
                </li>
                <li className="flex items-start gap-3.5 text-slate-300 text-sm sm:text-base">
                  <span className="w-2 h-2 rounded-full bg-[#F07C33] mt-2 shrink-0" />
                  <span>Direct tarmac cargo transfer and immediate clearance at JKIA</span>
                </li>
              </ul>
            </section>

            <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-400" />
                <span>Operational Process</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <div className="text-xs font-extrabold text-[#F07C33] uppercase tracking-wider">Step 01</div>
                  <div className="font-bold text-white text-base">Flight Booking & Manifest</div>
                  <div className="text-xs text-slate-400 leading-relaxed">Securing priority air cargo space and generating airway bill.</div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <div className="text-xs font-extrabold text-[#F07C33] uppercase tracking-wider">Step 02</div>
                  <div className="font-bold text-white text-base">Tarmac & Terminal Handling</div>
                  <div className="text-xs text-slate-400 leading-relaxed">Rapid unloading and transfer into bonded airport facility.</div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1C4E9E]/30 via-slate-900 to-slate-900 border border-[#1C4E9E]/50 rounded-3xl p-6 shadow-xl sticky top-28">
              <h3 className="text-xl font-bold text-white mb-2">Request a Custom Quote</h3>
              <p className="text-slate-300 text-xs mb-6 leading-relaxed">
                Connect directly with our logistics managers for precise rates, timeline estimates, and specialized shipping guidance.
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/254735941780?text=Hello,%20I%20am%20inquiring%20about%20Air%20Freight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#F07C33] hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all duration-300 text-sm hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Logistics Desk</span>
                </a>

                <a
                  href="mailto:amkatwendelogistics1@gmail.com?subject=Inquiry%20for%20Air%20Freight"
                  className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-3.5 px-4 rounded-xl transition-all duration-300 text-sm hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4 text-[#F07C33]" />
                  <span>Email Quote Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}