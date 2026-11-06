import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import SkrVerifyClientView from "@/components/SkrVerifyClientView";

interface PageProps {
  params: Promise<{
    certificateNo: string;
  }>;
}

function VerificationLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0B0F19] p-6 text-slate-100">
      <Loader2
        className="mb-4 h-10 w-10 animate-spin text-blue-500"
        aria-hidden="true"
      />

      <p className="text-center text-sm font-medium text-slate-400">
        Validating SKR Record from Vault Ledger...
      </p>
    </div>
  );
}

async function VerificationContent({
  params,
}: {
  params: PageProps["params"];
}) {
  const { certificateNo } = await params;

  return <SkrVerifyClientView certificateNo={certificateNo} />;
}

export default function SkrPublicVerifyPage({ params }: PageProps) {
  return (
    <Suspense fallback={<VerificationLoading />}>
      <VerificationContent params={params} />
    </Suspense>
  );
}
