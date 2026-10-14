import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{ certificateNo: string }>;
}

export async function GET(req: Request, { params }: RouteParams) {
  try {
    const { certificateNo } = await params;

    const certificate = await prisma.skrCertificate.findUnique({
      where: { certificateNo: certificateNo.toUpperCase() },
    });

    if (!certificate) {
      return NextResponse.json(
        { success: false, error: "Certificate record not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: certificate });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
