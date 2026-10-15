"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { QuoteContact } from "@/components/QuoteContact";
import { Values } from "@/components/Values";
import { Footer } from "@/components/Footer";
import { VerifySkr } from "@/components/VerifySkr";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 selection:bg-[#1C4E9E] selection:text-white">
      {/* Navigation Bar */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex w-full min-w-0 flex-col">
        <section id="home">
          <Hero />
        </section>
        <section id="track">
          <VerifySkr />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="contact">
          <QuoteContact />
        </section>

        <section id="values">
          <Values />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
