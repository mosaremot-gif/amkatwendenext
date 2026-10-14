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
      <div className="bg-[#0B0F19] text-white p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-800 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-wide">
              Track & Verify Safe Keeping Receipt (SKR)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
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
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              value={skrNo}
              onChange={(e) => setSkrNo(e.target.value)}
              placeholder="e.g. SKR2026000001"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all uppercase tracking-wider font-mono"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#1C4E9E] hover:bg-[#163c7b] text-white font-medium px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/30 disabled:opacity-50 text-sm whitespace-nowrap cursor-pointer"
          >
            {loading ? "Checking..." : "Verify SKR"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-800/80">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" /> Secure Vault
            Registry Lookup
          </span>
          <span>Amka Twende Logistics</span>
        </div>
      </div>
    </div>
  );
}
