"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowLeft,
  Printer,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  Building2,
  Package,
  Plane,
} from "lucide-react";

interface CertificateData {
  certificateNo: string;
  consignmentId: string;
  issueDate: string;
  clientReference?: string;
  clientType?: string;
  legalName?: string;
  consignor: string;
  consignee: string;
  metalType: string;
  form: string;
  refinery?: string;
  serialNumber: string;
  assayPurity: string;
  numberOfUnits: number;
  grossWeight: string;
  fineWeight: string;
  estimatedValue: string;
  priceBasis: string;
  currency: string;
  currentStatus: "STORED" | "IN_TRANSIT" | "RELEASED" | "HOLD";
  origin: string;
  destination: string;
  dispatchDate?: string;
  arrivalDate?: string;
  transporter?: string;
  trackingNo?: string;
  insuranceValue?: string;
  insurancePolicy?: string;
}

export default function SkrVerifyClientView({
  certificateNo,
}: {
  certificateNo: string;
}) {
  const [data, setData] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!certificateNo) return;

    fetch(`/api/public/verify/${certificateNo}`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          setData(resData.data);
        } else {
          setNotFound(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [certificateNo]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "STORED":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "IN_TRANSIT":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "RELEASED":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "HOLD":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      default:
        return "bg-slate-800 text-slate-300 border-slate-700";
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col items-center justify-center p-6">
        <Loader2 className="w-10 h-10 animate-spin text-blue-500 mb-4" />
        <p className="text-slate-400 text-sm font-medium">
          Validating SKR Record from Vault Ledger...
        </p>
      </div>
    );
  }

  if (notFound || !data) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col items-center justify-center p-6 text-center">
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Certificate Not Found
        </h1>
        <p className="text-slate-400 max-w-md mb-6 text-sm">
          No official Safe Keeping Receipt record matches{" "}
          <span className="font-mono text-white font-semibold">
            {certificateNo}
          </span>
          . Please verify the tracking number and try again.
        </p>
        <Link
          href="/"
          className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all"
        >
          Return to Verification Lookup
        </Link>
      </div>
    );
  }

  const liveVerificationUrl =
    typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 p-4 md:p-10 font-sans print:bg-white print:text-black">
      {/* Top Bar Navigation (Hidden when printing) */}
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-8 print:hidden">
        <Link
          href="/"
          className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> New Search
        </Link>

        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4" /> Print / Save PDF
        </button>
      </div>

      {/* Main SKR Digital Certificate Shell */}
      <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800/90 rounded-2xl p-6 md:p-10 shadow-2xl print:border-none print:shadow-none print:p-0 print:bg-transparent">
        {/* Certificate Header with QR Code */}
        <div className="flex flex-col items-center text-center pb-8 border-b border-slate-800/80 mb-8">
          <div className="p-3 bg-white rounded-xl shadow-xl mb-4 border border-slate-200">
            <QRCodeSVG value={liveVerificationUrl} size={110} level="H" />
          </div>

          <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1">
            <ShieldCheck className="w-4 h-4" /> Amka Twende Vault Services
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
            SAFE KEEPING RECEIPT
          </h1>
          <p className="text-xs text-slate-400 max-w-sm mb-4">
            Official Custody Certificate of Verification
          </p>

          <div className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-mono">
            <span className="text-slate-400">CERTIFICATE NO:</span>
            <span className="text-blue-400 font-bold tracking-wider">
              {data.certificateNo}
            </span>
          </div>
        </div>

        {/* Core Info Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-950/60 border border-slate-800/60 rounded-xl mb-8 text-xs">
          <div>
            <span className="text-slate-500 uppercase font-semibold block mb-1">
              Consignment ID
            </span>
            <span className="text-white font-mono font-bold">
              {data.consignmentId}
            </span>
          </div>
          <div>
            <span className="text-slate-500 uppercase font-semibold block mb-1">
              Issue Date
            </span>
            <span className="text-slate-200">
              {new Date(data.issueDate).toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-slate-500 uppercase font-semibold block mb-1">
              Client Reference
            </span>
            <span className="text-slate-200">
              {data.clientReference || "-"}
            </span>
          </div>
          <div>
            <span className="text-slate-500 uppercase font-semibold block mb-1">
              Client Type
            </span>
            <span className="text-slate-200">{data.clientType || "-"}</span>
          </div>
        </div>

        {/* Owner & Client Information */}
        <div className="mb-8">
          <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-800">
            <Building2 className="w-4 h-4" /> Owner & Client Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/40">
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Consignor
              </span>
              <span className="text-slate-200 font-medium">
                {data.consignor}
              </span>
            </div>
            <div className="bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/40">
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Consignee
              </span>
              <span className="text-slate-200 font-medium">
                {data.consignee}
              </span>
            </div>
          </div>
        </div>

        {/* Metal & Product Details */}
        <div className="mb-8">
          <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-800">
            <Package className="w-4 h-4" /> Metal / Product Details
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Metal Type
              </span>
              <span className="text-white font-bold">{data.metalType}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Form
              </span>
              <span className="text-slate-200">{data.form}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Refinery
              </span>
              <span className="text-slate-200">{data.refinery || "N/A"}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Serial Number
              </span>
              <span className="text-slate-200 font-mono">
                {data.serialNumber}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Assay / Purity
              </span>
              <span className="text-amber-400 font-bold">
                {data.assayPurity}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Number of Units
              </span>
              <span className="text-slate-200 font-bold">
                {data.numberOfUnits}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Gross Weight
              </span>
              <span className="text-amber-400 font-bold">
                {Number(data.grossWeight).toLocaleString()} g
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Fine Weight
              </span>
              <span className="text-amber-400 font-bold">
                {Number(data.fineWeight).toLocaleString()} g
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Estimated Value
              </span>
              <span className="text-emerald-400 font-bold">
                {data.currency} {Number(data.estimatedValue).toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Price Basis
              </span>
              <span className="text-slate-200">{data.priceBasis}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Currency
              </span>
              <span className="text-slate-200">{data.currency}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Current Status
              </span>
              <span
                className={`inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-bold ${getStatusBadge(data.currentStatus)}`}
              >
                {data.currentStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Shipment & Logistics */}
        <div className="mb-8">
          <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-800">
            <Plane className="w-4 h-4" /> Shipment & Logistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Origin
              </span>
              <span className="text-slate-200 font-bold">{data.origin}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Destination
              </span>
              <span className="text-slate-200 font-bold">
                {data.destination}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Transporter
              </span>
              <span className="text-slate-200">{data.transporter || "-"}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Tracking No
              </span>
              <span className="text-slate-200 font-mono">
                {data.trackingNo || "-"}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold mb-1">
                Insurance Policy
              </span>
              <span className="text-slate-200 font-mono">
                {data.insurancePolicy || "-"}
              </span>
            </div>
          </div>
        </div>

        {/* Verification Authentication Banner */}
        <div className="p-4 bg-emerald-950/30 border border-emerald-500/20 rounded-xl flex items-center justify-center text-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
          <div className="text-xs">
            <p className="text-emerald-400 font-bold text-sm">
              Certificate Verified Authentic
            </p>
            <p className="text-slate-400 mt-0.5">
              This Safe Keeping Receipt is digitally certified and active in the
              Amka Twende Vault Registry.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-4 border-t border-slate-800 text-center text-[10px] text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-emerald-400" /> Amka Twende Logistics
            Vault Management
          </span>
          <span>Official Custodial Record</span>
        </div>
      </div>
    </div>
  );
}
