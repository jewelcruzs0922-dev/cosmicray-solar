import { NextResponse } from "next/server";

interface EstimateRequest {
  address: string;
  roofType: string;
  monthlyBill: number;
}

interface EstimateResponse {
  systemSize: number;
  monthlySavings: number;
  paybackPeriod: number;
  twentyFiveYearSavings: number;
  annualProduction: number;
}

function calculateEstimate(data: EstimateRequest): EstimateResponse {
  const costPerKw =
    data.roofType === "flat"
      ? 2.8
      : data.roofType === "tile"
        ? 3.2
        : data.roofType === "metal"
          ? 2.9
          : 3.0;

  const sunHours = 4.5;
  const efficiency = 0.18;
  const degradation = 0.005;
  const utilityRate = 0.14;

  const annualBill = data.monthlyBill * 12;
  const annualUsageKwh = annualBill / utilityRate;
  const systemSizeRaw = annualUsageKwh / (sunHours * 365 * efficiency);
  const systemSize = Math.round(Math.min(Math.max(systemSizeRaw, 3), 25) * 10) / 10;

  const systemCost = systemSize * costPerKw * 1000;
  const taxCredit = systemCost * 0.3;
  const netCost = systemCost - taxCredit;

  const firstYearProduction = systemSize * sunHours * 365 * efficiency;
  const annualProduction = Math.round(firstYearProduction);

  const monthlySavings = Math.round(data.monthlyBill * 0.85);
  const annualSavings = monthlySavings * 12;
  const paybackPeriod = Math.round((netCost / annualSavings) * 10) / 10;

  let totalSavings = 0;
  for (let year = 0; year < 25; year++) {
    const yearFactor = 1 - degradation * year;
    totalSavings += annualSavings * yearFactor;
  }
  const twentyFiveYearSavings = Math.round(totalSavings);

  return {
    systemSize,
    monthlySavings,
    paybackPeriod,
    twentyFiveYearSavings,
    annualProduction,
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EstimateRequest;

    if (!body.address || !body.roofType || typeof body.monthlyBill !== "number") {
      return NextResponse.json(
        { error: "Missing required fields: address, roofType, monthlyBill" },
        { status: 400 }
      );
    }

    if (body.monthlyBill < 50 || body.monthlyBill > 800) {
      return NextResponse.json(
        { error: "monthlyBill must be between 50 and 800" },
        { status: 400 }
      );
    }

    const validRoofTypes = ["asphalt", "tile", "metal", "flat", "slate"];
    if (!validRoofTypes.includes(body.roofType)) {
      return NextResponse.json(
        { error: "Invalid roof type" },
        { status: 400 }
      );
    }

    const estimate = calculateEstimate(body);

    return NextResponse.json({ success: true, estimate });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
