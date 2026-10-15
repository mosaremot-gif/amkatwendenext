// src/app/(admin)/admin/(dashboard)/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Plus,
  ShieldCheck,
  FileText,
  Truck,
  Edit3,
  ExternalLink,
  Loader2,
} from "lucide-react";

interface SkrCertificate {
  id: string;
  certificateNo: string;
  consignmentId: string;
  consignee: string;
  metalType: string;
  grossWeight: number;
  currentStatus: string;
}

export default function AdminDashboardPage() {
  const [certificates, setCertificates] = useState<SkrCertificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/skrs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setCertificates(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load SKRs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 p-8 font-sans">
      {/* Top Header Bar */}
      <div className="flex justify-between items-center mb-8 border-b border-slate-800/80 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#1C4E9E]" />
            Vault Admin Control Center
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Manage Safe Keeping Receipt (SKR) documents, logistics, and vault
            assets.
          </p>
        </div>
        <Link
          href="/admin/skr/new"
          className="bg-[#1C4E9E] hover:bg-[#163c7b] text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 shadow-lg shadow-blue-900/30 transition-all"
        >
          <Plus className="w-5 h-5" />
          Generate New SKR
        </Link>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-sm font-medium">Total Certificates</span>
            <FileText className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-white">
            {certificates.length}
          </div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-sm font-medium">Active Transit / Stored</span>
            <Truck className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-white">
            {
              certificates.filter(
                (c) =>
                  c.currentStatus === "STORED" ||
                  c.currentStatus === "IN_TRANSIT",
              ).length
            }
          </div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-sm font-medium">System Status</span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <div className="text-xl font-semibold text-emerald-400 mt-1">
            Operational
          </div>
        </div>
      </div>

      {/* Records Table */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">
            Recent Vault Records
          </h2>
          <span className="text-xs text-slate-400 font-mono">
            Database: Connected (Neon PG)
          </span>
        </div>

        {loading ? (
          <div className="p-16 text-center text-slate-500 flex flex-col items-center gap-3">
            <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
            Loading vault records...
          </div>
        ) : certificates.length === 0 ? (
          <div className="p-16 text-center text-slate-500 flex flex-col items-center gap-2">
            <FileText className="w-8 h-8 text-slate-600 mb-1" />
            <p>No SKR records found.</p>
            <Link
              href="/admin/skr/new"
              className="text-blue-400 hover:underline text-sm font-medium mt-2 inline-block"
            >
              Click here to generate your first SKR
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/80 text-slate-400 uppercase text-xs tracking-wider border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4">Certificate No</th>
                  <th className="px-6 py-4">Consignment ID</th>
                  <th className="px-6 py-4">Consignee</th>
                  <th className="px-6 py-4">Metal / Weight</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {certificates.map((cert) => (
                  <tr
                    key={cert.id}
                    className="hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="px-6 py-4 font-mono font-medium text-blue-400">
                      {cert.certificateNo}
                    </td>
                    <td className="px-6 py-4 font-mono text-slate-400">
                      {cert.consignmentId}
                    </td>
                    <td className="px-6 py-4 truncate max-w-xs">
                      {cert.consignee}
                    </td>
                    <td className="px-6 py-4">
                      {cert.metalType} ({cert.grossWeight}g)
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cert.currentStatus === "STORED"
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            : cert.currentStatus === "IN_TRANSIT"
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        }`}
                      >
                        {cert.currentStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/skr/${cert.id}`}
                        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs font-medium"
                      >
                        <Edit3 className="w-4 h-4 text-blue-400" /> Edit
                      </Link>
                      <a
                        href={`/verify/${cert.certificateNo}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs font-medium"
                      >
                        <ExternalLink className="w-4 h-4 text-emerald-400" />{" "}
                        View Card
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
