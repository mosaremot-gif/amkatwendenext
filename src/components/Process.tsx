import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ArrowRight,
  Compass,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Share your documents",
    description:
      "Send your commercial invoice, packing list and shipping details. We review your requirements and help you understand the next steps.",
    detail: "YOUR FIRST STEP",
    icon: FileText,
  },
  {
    step: "02",
    title: "Clear customs",
    description:
      "We coordinate the necessary customs documentation, duty assessment and clearance requirements for your shipment.",
    detail: "DOCUMENTATION & COMPLIANCE",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Move your cargo",
    description:
      "Your shipment is coordinated for the appropriate transport option, including air freight, ocean freight or regional road transport.",
    detail: "FREIGHT & TRANSPORT",
    icon: Truck,
  },
  {
    step: "04",
    title: "Receive your shipment",
    description:
      "We coordinate the final stage of the journey and keep you informed as your cargo progresses towards its destination.",
    detail: "FINAL DELIVERY",
    icon: CheckCircle2,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-24 text-slate-900 sm:py-28 lg:py-32"
    >
      {/* Restrained background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-50/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-orange-50/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2">
            <Compass className="h-4 w-4 text-[#F07C33]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#1C4E9E]">
              From pickup to delivery
            </span>
          </div>

          <h2 className="mt-7 text-center text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-[#1C4E9E] sm:text-5xl lg:text-[64px]">
            A clearer path
            <br />
            <span className="text-slate-900">for every shipment.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-slate-500 sm:text-lg">
            From the first document to the final destination, we coordinate each
            stage to make moving your cargo more straightforward.
          </p>
        </motion.div>

        {/* Journey overview */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <div className="mb-7 flex items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              Your shipment journey
            </span>
            <span className="flex items-center gap-2 text-xs font-semibold text-[#1C4E9E]">
              <span className="h-2 w-2 rounded-full bg-[#F07C33]" />
              Four coordinated stages
            </span>
          </div>

          {/* Desktop connected timeline */}
          <div className="relative hidden md:block">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-7 h-px bg-slate-200"
            />

            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
              className="absolute left-[12.5%] right-[12.5%] top-7 h-px origin-left bg-gradient-to-r from-[#1C4E9E] via-[#1C4E9E] to-[#F07C33]"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative grid grid-cols-4 gap-6"
            >
              {steps.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.step}
                    variants={itemVariants}
                    className="group min-w-0"
                  >
                    {/* Milestone on the route */}
                    <div className="relative z-10 flex h-14 items-start justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:border-[#1C4E9E] group-hover:shadow-lg group-hover:shadow-blue-900/10">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#1C4E9E] transition-colors duration-300 group-hover:bg-[#1C4E9E] group-hover:text-white">
                          <Icon className="h-[19px] w-[19px]" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-7">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F07C33]" />
                        <span className="text-[10px] font-bold uppercase leading-5 tracking-[0.12em] text-slate-400">
                          {item.detail}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-[#1C4E9E]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {item.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4">
                        <span className="text-xs font-semibold text-[#1C4E9E]">
                          Stage {item.step}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#F07C33] transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile vertical journey */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="relative md:hidden"
          >
            <div
              aria-hidden="true"
              className="absolute bottom-12 left-6 top-6 w-px bg-gradient-to-b from-[#1C4E9E] via-slate-200 to-[#F07C33]"
            />

            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.step}
                  variants={itemVariants}
                  className={`relative grid grid-cols-[48px_minmax(0,1fr)] gap-5 ${
                    index === steps.length - 1 ? "" : "pb-10"
                  }`}
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                    <Icon className="h-5 w-5 text-[#1C4E9E]" />
                  </div>

                  <div className="min-w-0 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#D96825]">
                      {item.detail}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#1C4E9E]">
                      Stage {item.step}
                      <ArrowRight className="h-3.5 w-3.5 text-[#F07C33]" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Contact call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-2xl border border-slate-200 bg-white sm:mt-24"
        >
          <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-12">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1C4E9E] sm:h-14 sm:w-14">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#D96825]">
                  Ready when you are
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-2xl">
                  Have cargo that needs moving?
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Tell us about your shipment and let’s discuss the right way to
                  get it to its destination.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/254735941780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#1C4E9E] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#163D7A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C4E9E]"
            >
              Discuss your shipment
              <ArrowUpRight className="h-4 w-4 text-orange-300" />
            </a>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-[#1C4E9E] via-[#1C4E9E] to-[#F07C33]" />
        </motion.div>
      </div>
    </section>
  );
};
