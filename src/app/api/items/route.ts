import items from "@/data/items/10.json";
import { NextResponse } from "next/server";

export async function GET() {
  const encodedData = Buffer.from(JSON.stringify(items.data)).toString(
    "base64"
  );
  return NextResponse.json({ data: encodedData });
}
