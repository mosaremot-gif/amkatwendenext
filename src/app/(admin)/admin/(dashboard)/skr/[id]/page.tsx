"use client";

import { useEffect, useState, use, Suspense } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import { Button } from "@/components/ui/button";

import { format } from "date-fns";
import { ArrowLeft, Loader2, Save, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

function SkrManageForm({ params }: PageProps) {
  const { id } = use(params);
  const router = useRouter();
  const isNew = id === "new";
  const [dispatchDate, setDispatchDate] = useState<Date | undefined>();
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>();

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    consignmentId: "",
    clientReference: "-",
    clientType: "Direct Client",
    legalName: "-",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    consignor: "",
    consignee: "",
    metalType: "Gold",
    form: "Bars",
    refinery: "N/A",
    serialNumber: "",
    assayPurity: "99.9%",
    numberOfUnits: "",
    grossWeight: "",
    fineWeight: "",
    estimatedValue: "",
    priceBasis: "LBMA Spot",
    currency: "USD",
    currentStatus: "HOLD",
    origin: "NAIROBI-KENYA",
    destination: "DUBAI",
    transporter: "",
    insuranceValue: "",
  });

  useEffect(() => {
    if (!isNew) {
      fetch(`/api/admin/skrs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setFormData(data.data);
            if (data.data.dispatchDate)
              setDispatchDate(new Date(data.data.dispatchDate));
            if (data.data.arrivalDate)
              setArrivalDate(new Date(data.data.arrivalDate));
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch record:", err);
          setLoading(false);
        });
    }
  }, [id, isNew]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...formData,
      dispatchDate: dispatchDate ? dispatchDate.toISOString() : null,
      arrivalDate: arrivalDate ? arrivalDate.toISOString() : null,
    };

    try {
      const endpoint = isNew ? "/api/admin/skrs" : `/api/admin/skrs/${id}`;
      const method = isNew ? "POST" : "PUT";

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setSuccessMsg(
          isNew
            ? `Successfully generated: ${data.data.certificateNo}`
            : "Record updated successfully!",
        );
        setTimeout(() => {
          router.push("/admin");
        }, 1200);
      } else {
        alert(`Error: ${data.error}`);
        setSaving(false);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      alert(`Submission failed: ${message}`);
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 p-8 max-w-5xl mx-auto font-sans">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
        <Link
          href="/admin"
          className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <h1 className="text-xl font-bold text-white">
          {isNew ? "Generate New SKR Certificate" : `Manage / Edit SKR`}
        </h1>
      </div>

      {successMsg && (
        <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>{successMsg}</span>
        </div>
      )}

      {loading ? (
        <div className="p-20 text-center text-slate-500 flex flex-col items-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
          Loading record details...
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl shadow-2xl backdrop-blur-md"
        >
          {/* Consignment Section */}
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-blue-400 uppercase mb-4 pb-2 border-b border-slate-800">
              1. Consignment Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Consignment ID
                </label>
                <input
                  type="text"
                  name="consignmentId"
                  required
                  placeholder="F7E17E712E"
                  value={formData.consignmentId}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Client Reference
                </label>
                <input
                  type="text"
                  name="clientReference"
                  placeholder="-"
                  value={formData.clientReference}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Client Type
                </label>
                <input
                  type="text"
                  name="clientType"
                  placeholder="Direct Client"
                  value={formData.clientType}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Owner / Client Parties */}
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-blue-400 uppercase mb-4 pb-2 border-b border-slate-800">
              2. Owner & Client Parties & Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Client Full Name / Contact Person
                </label>
                <input
                  type="text"
                  name="clientName"
                  placeholder="e.g. John Doe"
                  value={formData.clientName}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Client Email (For SKR Dispatch)
                </label>
                <input
                  type="email"
                  name="clientEmail"
                  placeholder="client@company.com"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Client Phone Number
                </label>
                <input
                  type="text"
                  name="clientPhone"
                  placeholder="+254 700 000000"
                  value={formData.clientPhone}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Consignor
                </label>
                <input
                  type="text"
                  name="consignor"
                  required
                  placeholder="Consignor Name / Company"
                  value={formData.consignor}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Consignee
                </label>
                <input
                  type="text"
                  name="consignee"
                  required
                  placeholder="Destination Buyer / Company"
                  value={formData.consignee}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Metal & Vault Specs */}
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-blue-400 uppercase mb-4 pb-2 border-b border-slate-800">
              3. Metal & Vault Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Metal Type
                </label>
                <input
                  type="text"
                  name="metalType"
                  value={formData.metalType}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Form
                </label>
                <input
                  type="text"
                  name="form"
                  value={formData.form}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Refinery
                </label>
                <input
                  type="text"
                  name="refinery"
                  value={formData.refinery}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Serial Number
                </label>
                <input
                  type="text"
                  name="serialNumber"
                  required
                  placeholder="AK-2026-001"
                  value={formData.serialNumber}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Assay / Purity
                </label>
                <input
                  type="text"
                  name="assayPurity"
                  required
                  placeholder="99.9%"
                  value={formData.assayPurity}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Number of Units
                </label>
                <input
                  type="text"
                  name="numberOfUnits"
                  required
                  value={formData.numberOfUnits}
                  placeholder="e.g. 20 pallets"
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Gross Weight (KG)
                </label>
                <input
                  type="number"
                  step="0.001"
                  name="grossWeight"
                  required
                  placeholder="1000.00"
                  value={formData.grossWeight}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Fine Weight (KG)
                </label>
                <input
                  type="number"
                  step="0.001"
                  name="fineWeight"
                  required
                  placeholder="999.00"
                  value={formData.fineWeight}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Estimated Value (USD)
                </label>
                <input
                  type="text"
                  step="0.01"
                  name="estimatedValue"
                  required
                  placeholder="13351199.00"
                  value={formData.estimatedValue}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Shipment & Logistics */}
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-blue-400 uppercase mb-4 pb-2 border-b border-slate-800">
              4. Shipment & Logistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Origin
                </label>
                <input
                  type="text"
                  name="origin"
                  required
                  value={formData.origin}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  required
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Current Status
                </label>
                <select
                  name="currentStatus"
                  value={formData.currentStatus}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                >
                  <option value="PICKED">Picked</option>
                  <option value="IN_TRANSIT">In Transit</option>
                  <option value="HOLD">Hold</option>
                  <option value="DELIVERED">Delivered</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Transporter
                </label>
                <input
                  type="text"
                  name="transporter"
                  placeholder="e.g. PHENOM EXECUTIVE JET"
                  value={formData.transporter}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              {/* Dispatch Date Picker */}
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Dispatch Date
                </label>
                <Popover>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-slate-950 border-slate-800 text-white hover:bg-slate-900"
                      />
                    }
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-blue-400" />
                    {dispatchDate ? (
                      format(dispatchDate, "PPP")
                    ) : (
                      <span className="text-slate-500">
                        Select dispatch date
                      </span>
                    )}
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-slate-900 border-slate-800 text-white shadow-xl"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={dispatchDate}
                      onSelect={setDispatchDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Arrival Date Picker */}
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">
                  Arrival Date
                </label>
                <Popover>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-slate-950 border-slate-800 text-white hover:bg-slate-900"
                      />
                    }
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-blue-400" />
                    {arrivalDate ? (
                      format(arrivalDate, "PPP")
                    ) : (
                      <span className="text-slate-500">
                        Select arrival date
                      </span>
                    )}
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-slate-900 border-slate-800 text-white shadow-xl"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={arrivalDate}
                      onSelect={setArrivalDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-6 border-t border-slate-800">
            <Link
              href="/admin"
              className="w-full sm:w-auto text-center bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-3 sm:py-2.5 rounded-xl font-medium transition-all"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="w-full sm:w-auto justify-center bg-[#1C4E9E] hover:bg-[#163c7b] text-white px-8 py-3 sm:py-2.5 rounded-xl font-medium flex items-center gap-2 shadow-lg shadow-blue-900/30 transition-all disabled:opacity-50"
            >
              {saving ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              {saving
                ? "Saving Record..."
                : isNew
                  ? "Save & Generate Certificate No"
                  : "Update SKR Record"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function SkrManagePage(props: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0B0F19] text-slate-100 p-20 text-center flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          <p className="text-slate-400 font-medium">
            Initializing form interface...
          </p>
        </div>
      }
    >
      <SkrManageForm {...props} />
    </Suspense>
  );
}
