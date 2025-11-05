import { NextResponse, NextRequest } from "next/server";
import { connDb } from "../../../../libs/conn";
import { Student } from "../../../../models/student";

export async function POST(request) {
  try {
    await connDb();

    const result = await request.json();

    const newStudent = await Student.create(result);
    return NextResponse.json(
      { message: "sent" },
      { status: 200 },
      { newStudent }
    );
  } catch (error) {
    return NextResponse.json({ message: "failed" }, { status: 400 });
  }
}
export async function GET() {
  try {
    await connDb();
    const students = await Student.find();
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
