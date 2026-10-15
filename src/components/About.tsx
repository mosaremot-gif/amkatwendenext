import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  Truck,
  MapPin,
  ShieldCheck,
  FileCheck,
  Ship,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Clearing & Forwarding",
    description:
      "Customs documentation, clearance coordination and efficient cargo handling.",
    icon: FileCheck,
  },
  {
    number: "02",
    title: "Air & Ocean Freight",
    description:
      "Freight coordination connecting your cargo to regional and international markets.",
    icon: Plane,
  },
  {
    number: "03",
    title: "Regional Transportation",
    description:
      "Coordinated cargo movement across Kenya and the wider East African region.",
    icon: Truck,
  },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 text-slate-900 sm:py-24 lg:py-28"
    >
      {/* Subtle brand atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-50/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[38rem] h-80 w-80 rounded-full bg-orange-50/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Section introduction */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-100 bg-orange-50/80 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#f58043]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#C85C1F]">
              Amka Twende Logistics
            </span>
          </div>

          <h2 className="mt-7 text-center text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-[#1C4E9E] sm:text-5xl lg:text-[68px]">
            Moving business.
            <br />
            <span className="text-[#f58043]">Beyond borders.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Your logistics partner for clearing, forwarding and cargo
            transportation — connecting businesses to where they need to be.
          </p>
        </div>

        {/* About the company */}
        <div className="mt-14 grid items-center gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* Editorial image */}
          <div className="group relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-slate-100 sm:aspect-[1.08/1]">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=85&w=1500"
                alt="Freight and warehouse operations"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-lg border border-white/30 bg-white/95 px-3.5 py-2.5 shadow-sm sm:left-7 sm:top-7">
                <MapPin className="h-4 w-4 text-[#f58043]" />
                <span className="text-xs font-semibold text-slate-800">
                  JKIA, Nairobi, Kenya
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-300">
                  Our commitment
                </span>

                <p className="mt-3 max-w-md text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
                  Every shipment matters.
                  <br />
                  Every connection counts.
                </p>
              </div>
            </div>

            {/* Small orange signature detail */}
            <div
              aria-hidden="true"
              className="absolute -bottom-2 -right-2 -z-10 h-24 w-24 rounded-2xl bg-[#f58043] sm:-bottom-3 sm:-right-3 sm:h-32 sm:w-32"
            />
          </div>

          {/* Company narrative */}
          <div className="py-3 lg:py-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.19em] text-[#D96825]">
              Who we are
            </span>

            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-[42px]">
              We move cargo.
              <br />
              <span className="text-[#1C4E9E]">We move you forward.</span>
            </h3>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
              At Amka Twende Logistics, we bring clearing, forwarding and
              transportation together to simplify the movement of goods. Our
              objective is to make logistics more straightforward for businesses
              through professional service and careful coordination.
            </p>

            <div className="mt-8 flex items-start gap-4 border-t border-slate-100 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1C4E9E]">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  A partner you can work with
                </h4>
                <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
                  Clear communication, coordinated services and attention to
                  every stage of your shipment.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/254735941780"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#f4772b] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D96825]"
            >
              Discuss your shipment
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Service range strip */}
        <div className="mt-20 border-y border-slate-200/80 py-6 sm:mt-24 sm:py-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            <div className="flex items-center gap-3 sm:justify-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#D96825]">
                <FileCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Clearing & forwarding
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Customs and documentation
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:justify-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1C4E9E]">
                <Ship className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Freight coordination
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Air and ocean freight
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:justify-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#D96825]">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Regional transportation
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Cargo movement and delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};
