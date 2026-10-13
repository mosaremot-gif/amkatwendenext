import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { CertificateStatus } from "@prisma/client";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface CreateSkrRequestBody {
  consignmentId?: string;
  clientReference?: string;
  clientType?: string;
  legalName?: string;
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  consignor: string;
  consignee: string;
  metalType?: string;
  form?: string;
  refinery?: string;
  serialNumber: string;
  assayPurity: string;
  numberOfUnits: string;
  grossWeight: string | number;
  fineWeight: string | number;
  estimatedValue: string;
  priceBasis?: string;
  currency?: string;
  currentStatus?: CertificateStatus;
  origin: string;
  destination: string;
  dispatchDate?: string;
  arrivalDate?: string;
  transporter?: string;
  insuranceValue?: string | number;
}

// GET: Fetch all SKR certificates for the dashboard list
export async function GET() {
  try {
    const certificates = await prisma.skrCertificate.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, data: certificates });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    // Log the exact database error to terminal / Vercel logs
    console.error("GET /api/admin/skrs Error:", error);

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}

// POST: Create a new SKR with Auto-Generator & Resend Dispatch
export async function POST(req: Request) {
  try {
    const body: CreateSkrRequestBody = await req.json();

    // 1. Auto-generate official unique SKR tracking number
    const year = new Date().getFullYear();
    const randomHex = crypto.randomBytes(4).toString("hex").toUpperCase();
    const certificateNo = `SKR${year}-${randomHex}`;

    // 2. Save record to Neon Database via Prisma
    const newCertificate = await prisma.skrCertificate.create({
      data: {
        certificateNo,
        consignmentId: body.consignmentId?.trim() || "-",
        issueDate: new Date(),
        clientReference: body.clientReference?.trim() || "-",
        clientType: body.clientType?.trim() || "Standard",
        legalName: body.legalName?.trim() || "-",
        clientName: body.clientName?.trim() || null,
        clientEmail: body.clientEmail?.trim() || null,
        clientPhone: body.clientPhone?.trim() || null,
        consignor: body.consignor,
        consignee: body.consignee,
        metalType: body.metalType || "Gold",
        form: body.form || "Bars",
        refinery: body.refinery || "N/A",
        serialNumber: body.serialNumber,
        assayPurity: body.assayPurity,
        numberOfUnits: body.numberOfUnits || "1",
        grossWeight: Number(body.grossWeight),
        fineWeight: Number(body.fineWeight),
        estimatedValue: body.estimatedValue?.trim() || "0.00",
        priceBasis: body.priceBasis || "LBMA Spot",
        currency: body.currency || "USD",
        currentStatus: body.currentStatus || CertificateStatus.HOLD,
        origin: body.origin,
        destination: body.destination,
        dispatchDate: body.dispatchDate ? new Date(body.dispatchDate) : null,
        arrivalDate: body.arrivalDate ? new Date(body.arrivalDate) : null,
        transporter: body.transporter || null,
        insuranceValue: body.insuranceValue
          ? Number(body.insuranceValue)
          : null,
      },
    });

    // 3. Send Email Dispatch via Resend if clientEmail is provided
    if (newCertificate.clientEmail) {
      const verificationUrl = `${
        process.env.NEXT_PUBLIC_APP_URL || "https://amkatwendelogistics.com"
      }/verify/${newCertificate.certificateNo}`;

      await resend.emails.send({
        from: "Amka Twende Vault Services <info@amkatwendelogistics.com>",
        to: [newCertificate.clientEmail],
        subject: `Official Safe Keeping Receipt Issued - ${certificateNo}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #0B0F19; color: #f8fafc; padding: 24px; border-radius: 12px;">
            <h2 style="color: #60a5fa; border-bottom: 1px solid #1e293b; padding-bottom: 12px;">Amka Twende Logistics - Safe Keeping Receipt</h2>
            <p>Dear <strong>${newCertificate.clientName || "Valued Client"}</strong>,</p>
            <p>Your vault asset deposit has been successfully logged and secured.</p>
            <div style="background-color: #1e293b; padding: 16px; border-radius: 8px; margin: 16px 0;">
              <p style="margin: 4px 0;"><strong>Certificate Number:</strong> ${newCertificate.certificateNo}</p>
              <p style="margin: 4px 0;"><strong>Consignment ID:</strong> ${newCertificate.consignmentId}</p>
              <p style="margin: 4px 0;"><strong>Metal / Form:</strong> ${newCertificate.numberOfUnits}x ${newCertificate.form} (${newCertificate.metalType})</p>
              <p style="margin: 4px 0;"><strong>Gross Weight:</strong> ${newCertificate.grossWeight}g</p>
              <p style="margin: 4px 0;"><strong>Status:</strong> ${newCertificate.currentStatus}</p>
            </div>
            <p>You can verify your live certificate status anytime using our secure verification portal:</p>
            <a href="${verificationUrl}" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none; margin-top: 12px;">Verify Live SKR Status</a>
            <p style="font-size: 12px; color: #94a3b8; margin-top: 24px;">This is an automated message from Amka Twende Logistics. Please do not reply directly to this email.</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, data: newCertificate });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error("SKR Creation & Email Error:", errorMessage);

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
