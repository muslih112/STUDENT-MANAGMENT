import { NextResponse } from "next/server";

export async function POST(req) {
  const result = await req.json();
  console.log("Received data in route:", result);

  return NextResponse.json({ message: "Data received successfully!" });
}
