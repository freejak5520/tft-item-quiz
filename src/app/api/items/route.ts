import items from "@/data/items/10.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(items.data);
}
