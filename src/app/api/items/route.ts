// import items from "@/data/items/10.json";
import { NextResponse } from "next/server";

export async function GET({
  params = { version: "11" },
}: {
  params?: { version?: string };
}) {
  const { version } = params;
  const itemsData = await import(`@/data/items/${version}.json`);
  const encodedData = Buffer.from(JSON.stringify(itemsData.data)).toString(
    "base64"
  );
  return NextResponse.json({ data: encodedData });
}
