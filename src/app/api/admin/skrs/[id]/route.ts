import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CertificateStatus } from "@prisma/client";

interface RouteContext {
  params: Promise<{ id: string }>;
}

// GET: Fetch single SKR by ID for editing
export async function GET(req: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const certificate = await prisma.skrCertificate.findUnique({
      where: { id },
    });

    if (!certificate) {
      return NextResponse.json(
        { success: false, error: "Certificate not found" },
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

// PUT: Update existing SKR record
export async function PUT(req: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const updatedCertificate = await prisma.skrCertificate.update({
      where: { id },
      data: {
        consignmentId: body.consignmentId,
        clientReference: body.clientReference || "-",
        clientType: body.clientType || "Standard",
        legalName: body.legalName || "-",
        consignor: body.consignor,
        consignee: body.consignee,
        metalType: body.metalType || "Gold",
        form: body.form || "Bars",
        refinery: body.refinery || "N/A",
        serialNumber: body.serialNumber,
        assayPurity: body.assayPurity,
        numberOfUnits: Number(body.numberOfUnits) || 1,
        grossWeight: Number(body.grossWeight),
        fineWeight: Number(body.fineWeight),
        estimatedValue: Number(body.estimatedValue),
        priceBasis: body.priceBasis || "LBMA Spot",
        currency: body.currency || "USD",
        currentStatus: body.currentStatus || CertificateStatus.STORED,
        origin: body.origin,
        destination: body.destination,
        dispatchDate: body.dispatchDate ? new Date(body.dispatchDate) : null,
        arrivalDate: body.arrivalDate ? new Date(body.arrivalDate) : null,
        transporter: body.transporter || null,
        trackingNo: body.trackingNo || null,
        insuranceValue: body.insuranceValue
          ? Number(body.insuranceValue)
          : null,
        insurancePolicy: body.insurancePolicy || null,
      },
    });

    return NextResponse.json({ success: true, data: updatedCertificate });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error("SKR Update Error:", errorMessage);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
