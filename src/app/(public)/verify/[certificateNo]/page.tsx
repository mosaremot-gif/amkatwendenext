import { Suspense } from "react";
import SkrVerifyClientView from "@/components/SkrVerifyClientView";
import { Loader2 } from "lucide-react";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ certificateNo: string }>;
}

export default async function SkrPublicVerifyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const certificateNo = resolvedParams.certificateNo;

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col items-center justify-center p-6">
          <Loader2 className="w-10 h-10 animate-spin text-blue-500 mb-4" />
          <p className="text-slate-400 text-sm font-medium">
            Validating SKR Record from Vault Ledger...
          </p>
        </div>
      }
    >
      <SkrVerifyClientView certificateNo={certificateNo} />
    </Suspense>
  );
}
