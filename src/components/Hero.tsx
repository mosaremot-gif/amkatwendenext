import React, { useEffect, useState } from "react";
import { ArrowRight, Plane, Truck, Ship } from "lucide-react";

const slides = [
  {
    id: 0,
    title: "Freight Solutions.\nWithout Boundaries.",
    mobileTitle: "Freight Solutions.",
    mobileAccent: "Without Boundaries.",
    subtitle:
      "Ocean freight, customs clearance, and bonded warehousing. Reliable logistics solutions that keep your business moving across borders.",
    mobileSubtitle:
      "Ocean freight and customs clearance for cargo moving across borders.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=85&w=2200",
    badge: "Ocean Cargo",
    description: "Global shipping",
    icon: Ship,
  },
  {
    id: 1,
    title: "Your Cargo.\nCloser to Its Destination.",
    mobileTitle: "Your Cargo.",
    mobileAccent: "Closer to Its Destination.",
    subtitle:
      "Efficient air freight solutions for time-sensitive shipments, with professional handling and dependable coordination from departure to delivery.",
    mobileSubtitle: "Air freight coordination for time-sensitive shipments.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=85&w=2200",
    badge: "Air Freight",
    description: "Speed & precision",
    icon: Plane,
  },
  {
    id: 2,
    title: "Connecting Businesses.\nAcross East Africa.",
    mobileTitle: "Connecting Businesses.",
    mobileAccent: "Across East Africa.",
    subtitle:
      "Reliable road transport for commercial cargo, heavy equipment, and regional distribution, delivered with care at every stage.",
    mobileSubtitle: "Reliable road transport across Kenya and East Africa.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=85&w=2200",
    badge: "Road Transit",
    description: "Regional transport",
    icon: Truck,
  },
];

const ROTATION_INTERVAL = 5000;

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

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-slate-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          key={active.id}
          src={active.image}
          alt=""
          fetchPriority={currentSlide === 0 ? "high" : "auto"}
          className="h-full w-full animate-[heroFade_700ms_ease-out] object-cover"
        />
      </div>

      {/* Image overlays */}
      <div className="absolute inset-0 -z-10 bg-slate-950/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/65 via-slate-950/40 to-slate-950/90" />

      {/* Main hero content */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pb-6 pt-24 text-center sm:px-8 sm:pb-8 sm:pt-28">
        <div
          key={`content-${active.id}`}
          className="flex w-full animate-[heroContent_600ms_ease-out] flex-col items-center"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Service badge */}
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md sm:mb-9 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.16em]">
            <active.icon className="h-3.5 w-3.5 text-[#F07C33] sm:h-4 sm:w-4" />
            {active.badge}
          </span>

          {/* Mobile headline */}
          <h1 className="max-w-5xl text-[1.85rem] font-bold leading-[1.13] tracking-[-0.04em] text-white sm:whitespace-pre-line sm:text-6xl sm:leading-[1.12] sm:tracking-tight lg:text-7xl xl:text-[82px]">
            <span className="block sm:hidden">{active.mobileTitle}</span>
            <span className="block text-[#F07C33] sm:hidden">
              {active.mobileAccent}
            </span>
            <span className="hidden sm:inline">{active.title}</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-md text-[13px] leading-5 text-white/80 sm:mt-8 sm:max-w-2xl sm:text-lg sm:leading-8 lg:text-xl">
            <span className="sm:hidden">{active.mobileSubtitle}</span>
            <span className="hidden sm:inline">{active.subtitle}</span>
          </p>

          {/* Compact actions on mobile; original sizing on desktop */}
          <div className="mt-6 grid w-full max-w-sm grid-cols-2 gap-2.5 sm:mt-10 sm:flex sm:w-auto sm:max-w-none sm:justify-center sm:gap-4">
            <a
              href="https://wa.me/254735941780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-[#f4772b] px-3 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#dc6825] sm:min-h-14 sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
            >
              Get a Quote
              <ArrowRight className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </a>

            <a
              href="#services"
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-white/35 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 sm:min-h-14 sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Service selector: pushed below the first mobile viewport */}
      <div className="mx-auto mt-20 w-full max-w-4xl px-5 pb-6 sm:mt-0 sm:px-8 sm:pb-9">
        <p className="mb-3 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55 sm:mb-5 sm:text-xs sm:tracking-[0.2em]">
          Explore our logistics solutions
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            const selected = currentSlide === index;

            return (
              <button
                key={slide.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setCurrentSlide(index)}
                className={`flex min-w-0 flex-col items-center justify-center gap-2 rounded-lg border px-1.5 py-3 transition-colors duration-300 sm:flex-row sm:gap-3 sm:px-5 sm:py-4 ${
                  selected
                    ? "border-white/40 bg-white/15 text-white"
                    : "border-white/10 bg-black/20 text-white/65 hover:border-white/25 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 sm:h-5 sm:w-5 ${
                    selected ? "text-[#F07C33]" : ""
                  }`}
                />

                <span className="min-w-0 text-center sm:text-left">
                  <span className="block text-[10px] font-semibold leading-tight sm:text-sm">
                    {slide.badge}
                  </span>

                  <span className="mt-1 hidden text-xs text-white/50 sm:block">
                    {slide.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes heroFade {
          from { opacity: 0.65; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes heroContent {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[heroFade_700ms_ease-out\\],
          .animate-\\[heroContent_600ms_ease-out\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};
