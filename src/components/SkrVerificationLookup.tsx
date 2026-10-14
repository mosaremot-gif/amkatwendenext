"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Search, ArrowRight, Lock } from "lucide-react";

export default function SkrVerificationLookup() {
  const [skrInput, setSkrInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!skrInput.trim()) return;

    setLoading(true);
    const formattedSkr = skrInput.trim().toUpperCase();
    router.push(`/verify/${formattedSkr}`);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-12 p-8 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white tracking-wide">
            Vault Certificate Verification
          </h2>
          <p className="text-xs text-slate-400">
            Verify real-time Safe Keeping Receipts (SKR) & consignment status.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSearch}
        className="mt-6 flex flex-col sm:flex-row gap-3"
      >
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            required
            value={skrInput}
            onChange={(e) => setSkrInput(e.target.value)}
            placeholder="Enter Certificate No (e.g. SKR2026000001)"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all uppercase tracking-wider font-mono"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50 text-sm whitespace-nowrap"
        >
          {loading ? "Searching..." : "Verify Certificate"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-800/60">
        <span className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-emerald-400" /> End-to-End
          Cryptographic Validation
        </span>
        <span>Amka Twende Vault Registry</span>
      </div>
    </div>
  );
}
