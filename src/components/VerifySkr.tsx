"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShieldCheck, ArrowRight, Lock } from "lucide-react";

export function VerifySkr() {
  const [skrNo, setSkrNo] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!skrNo.trim()) return;

    setLoading(true);
    router.push(`/verify/${skrNo.trim().toUpperCase()}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 my-14 md:my-20 relative z-20">
      {/* Background card set to Royal Blue (#0D52CE) */}
      <div className="bg-[#0D52CE] text-white p-8 md:p-10 rounded-2xl shadow-2xl shadow-[#0D52CE]/30 border border-white/20 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-white/10 border border-white/20 rounded-xl text-white">
            <ShieldCheck className="w-6 h-6 text-[#FF5C00]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-wide">
              Track & Verify Safe Keeping Receipt (SKR)
            </h3>
            <p className="text-xs text-blue-100 mt-0.5">
              Enter your official certificate tracking number to inspect live
              vault status.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleVerify}
          className="flex flex-col sm:flex-row gap-3.5"
        >
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              value={skrNo}
              onChange={(e) => setSkrNo(e.target.value)}
              placeholder="e.g. SKR2026000001"
              className="w-full bg-[#05286A] border border-white/20 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm placeholder:text-blue-200/60 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all uppercase tracking-wider font-mono"
            />
          </div>

          {/* Primary Action Button set to Signature Orange (#FF5C00) */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#FF5C00] hover:bg-[#E05100] text-white font-medium px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-black/20 disabled:opacity-50 text-sm whitespace-nowrap cursor-pointer"
          >
            {loading ? "Checking..." : "Verify SKR"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-4 flex items-center justify-between text-xs text-blue-100/80 pt-3 border-t border-white/15">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-300" /> Secure Vault
            Registry Lookup
          </span>
          <span className="font-semibold text-white">
            Amka Twende Logistics
          </span>
        </div>
      </div>
    </div>
  );
}
