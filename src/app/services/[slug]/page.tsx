import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  FileCheck,
  Plane,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";

// Database of all service details
const servicesData: Record<
  string,
  {
    title: string;
    tagline: string;
    image: string;
    icon: React.ElementType;
    stats: { value: string; label: string }[];
    overview: string;
    capabilities: string[];
    processSteps: { title: string; desc: string }[];
    guarantees: string[];
  }
> = {
  "customs-clearing": {
    title: "Customs Clearing & Forwarding",
    tagline: "Accelerated, zero-delay customs processing across Kenya & East Africa",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    icon: FileCheck,
    stats: [
      { value: "24-48 Hrs", label: "Avg. Clearance" },
      { value: "100%", label: "Compliance Rate" },
      { value: "12+", label: "Border Posts Covered" },
    ],
    overview:
      "Our licensed customs brokerage team operates directly at JKIA Nairobi, Mombasa Port, and major border posts (Namanga, Busia, Malaba). We manage full documentation clearance, tariff classification, tax assessments, and specialized agency approvals (KEBS, Pharmacy Board, KDB) to ensure compliance and rapid cargo release.",
    capabilities: [
      "Exact KRA HS Code classification and valuation assessments",
      "Priority express entry processing at JKIA air cargo terminals",
      "Specialized import/export permits (KEBS, Radiation, Agriculture)",
      "Bonded transit documentation across East African Community (EAC)",
    ],
    processSteps: [
      { title: "Document Verification", desc: "Reviewing bill of lading, commercial invoices, and packing lists." },
      { title: "KRA Lodgement", desc: "Declaring entries into SIMBA/iCMS system for tax assessment." },
    ],
    guarantees: [
      "Zero demurrage penalty support",
      "Transparent KRA duty calculations",
      "Direct licensed customs broker representation",
    ],
  },
  "air-freight": {
    title: "Air Freight Services",
    tagline: "High-priority air cargo solutions engineered for speed, time-critical shipments, and direct airline handling through JKIA Nairobi.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200",
    icon: Plane,
    stats: [
      { value: "24-48 Hrs", label: "Transit Window" },
      { value: "JKIA Hub", label: "Direct Express Entry" },
      { value: "100%", label: "Temperature Controlled" },
    ],
    overview:
      "Operating out of Jomo Kenyatta International Airport (JKIA), we manage priority air express handling, charter services, and temperature-controlled cold chain shipments to keep your supply chain moving globally.",
    capabilities: [
      "Express air charter and direct airline booking options",
      "Temperature-controlled cold chain handling for perishables & pharma",
      "Direct tarmac cargo transfer and immediate clearance at JKIA",
    ],
    processSteps: [
      { title: "Flight Booking & Manifest", desc: "Securing priority air cargo space and generating airway bill." },
      { title: "Tarmac & Terminal Handling", desc: "Rapid unloading and transfer into bonded airport facility." },
    ],
    guarantees: [
      "Guaranteed airline space allocation",
      "Priority airport ground handling",
      "Real-time status tracking updates",
    ],
  },
  "ocean-freight": {
    title: "Ocean & Sea Freight",
    tagline: "Cost-effective global containerized shipping (FCL/LCL), consolidated sea cargo, and port operations via Mombasa Port.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200",
    icon: Ship,
    stats: [
      { value: "350+", label: "Global Ports" },
      { value: "Priority", label: "Mombasa Terminal" },
      { value: "Up to 30%", label: "Cost Savings" },
    ],
    overview:
      "Connecting East Africa to global shipping channels across Asia, Europe, and the Americas. We provide cost-effective maritime freight options for containerized, bulk, and project cargo using trusted ocean carrier routes into the Port of Mombasa.",
    capabilities: [
      "Full Container Load (FCL) & Less than Container Load (LCL) groupage",
      "Port of Mombasa terminal handling and container yard operations",
      "Out-of-Gauge (OOG) and breakbulk heavy machinery transport",
    ],
    processSteps: [
      { title: "Container Allocation", desc: "Selecting standard, reefer, or open-top equipment." },
      { title: "Port Loading", desc: "Managing vessel loading and bill of lading issuance." },
    ],
    guarantees: [
      "Competitive container line tariffs",
      "Secure port container yard handling",
      "Comprehensive maritime cargo insurance options",
    ],
  },
  "road-transport": {
    title: "Regional Road Transport",
    tagline: "Reliable fleet haulage across Kenya, Uganda, Rwanda, South Sudan & DRC",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200",
    icon: Truck,
    stats: [
      { value: "East Africa", label: "Full Coverage" },
      { value: "99.9%", label: "Safety Rating" },
      { value: "Real-time", label: "GPS Telematics" },
    ],
    overview:
      "Our regional trucking network spans the Northern Corridor, bridging Mombasa and Nairobi directly into East Africa’s inland hubs. Equipped with real-time GPS tracking and dedicated drivers, we guarantee safe haulage for standard, containerized, and oversized loads.",
    capabilities: [
      "Flatbed, lowbed, refrigerated, and closed box truck options",
      "Cross-border transit documentation and customs escort coordination",
      "Real-time GPS telematics with speed and route monitoring",
    ],
    processSteps: [
      { title: "Vehicle Dispatch", desc: "Assigning suitable truck type and driver to cargo load." },
      { title: "Cargo Lashing", desc: "Securing cargo according to safety transport standards." },
    ],
    guarantees: [
      "Live GPS tracking access",
      "Trained cross-border drivers",
      "Full transit cargo safety coverage",
    ],
  },
  "bonded-warehousing": {
    title: "Bonded Warehousing",
    tagline: "Secure, duty-deferred storage facilities designed for inventory efficiency",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    icon: Warehouse,
    stats: [
      { value: "24/7", label: "Security Monitoring" },
      { value: "50,000+", label: "Sq Ft Capacity" },
      { value: "12 Months", label: "Duty Deferment" },
    ],
    overview:
      "Optimize cash flow by deferring customs duty payments until your goods are ready for domestic distribution. Our secure, climate-monitored bonded warehouses provide professional inventory management, re-packaging, and order fulfillment capabilities.",
    capabilities: [
      "Customs-bonded duty deferment storage space",
      "WMS-powered inventory tracking with real-time stock balances",
      "Order pick-and-pack, sorting, and palletizing services",
    ],
    processSteps: [
      { title: "Inbound Receiving", desc: "Customs tallying and barcode scanning upon arrival." },
      { title: "System Placement", desc: "Storing in designated rack/shelf zones." },
    ],
    guarantees: [
      "Strict customs compliance storage",
      "24/7 CCTV surveillance and security guards",
      "Accurate WMS inventory reporting",
    ],
  },
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between selection:bg-[#F07C33] selection:text-white">
      <Header />

      <main className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full flex-1">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#F07C33] text-sm font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Services</span>
        </Link>

        {/* Hero Section Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 mb-12 shadow-2xl bg-slate-900">
          <div className="h-80 sm:h-96 w-full relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
          </div>

          <div className="absolute bottom-8 left-6 right-6 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C4E9E]/40 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F07C33]" />
                <span>Amka Twende Logistics Expertise</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {service.title}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
                {service.tagline}
              </p>
            </div>

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1C4E9E] flex items-center justify-center text-white shadow-2xl shrink-0 border border-white/20">
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {service.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F07C33] mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Content Section & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Globe2 className="w-6 h-6 text-[#1C4E9E]" />
                <span>Overview & Operations</span>
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                {service.overview}
              </p>
            </section>

            <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#F07C33]" />
                <span>Key Capabilities</span>
              </h2>
              <ul className="space-y-4">
                {service.capabilities.map((capability, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-slate-300 text-sm sm:text-base">
                    <span className="w-2 h-2 rounded-full bg-[#F07C33] mt-2 shrink-0" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-400" />
                <span>Operational Process</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.processSteps.map((step, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2"
                  >
                    <div className="text-xs font-extrabold text-[#F07C33] uppercase tracking-wider">
                      Step 0{i + 1}
                    </div>
                    <div className="font-bold text-white text-base">
                      {step.title}
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1C4E9E]/30 via-slate-900 to-slate-900 border border-[#1C4E9E]/50 rounded-3xl p-6 shadow-xl sticky top-28">
              <h3 className="text-xl font-bold text-white mb-2">
                Request a Custom Quote
              </h3>
              <p className="text-slate-300 text-xs mb-6 leading-relaxed">
                Connect directly with our logistics managers for precise rates, timeline estimates, and specialized shipping guidance.
              </p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/254735941780?text=Hello,%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#F07C33] hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all duration-300 text-sm hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Logistics Desk</span>
                </a>

                <a
                  href={`mailto:amkatwendelogistics1@gmail.com?subject=Inquiry%20for%20${encodeURIComponent(
                    service.title
                  )}`}
                  className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-3.5 px-4 rounded-xl transition-all duration-300 text-sm hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4 text-[#F07C33]" />
                  <span>Email Quote Inquiry</span>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">
                  Service Commitments
                </h4>
                <div className="space-y-3">
                  {service.guarantees.map((item, i) => (
                    <div
                      key={i}
                      className="text-xs text-slate-300 flex items-center gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}