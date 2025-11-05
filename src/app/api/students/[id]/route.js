import { NextResponse } from "next/server";
import { connDb } from "../../../../../libs/conn";
import { Student } from "../../../../../models/student";

export async function DELETE(request, { params }) {
  try {
    await connDb();
    const { id } = params;
    const deleted = await Student.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting student:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
export async function PUT(request, { params }) {
  try {
    await connDb();
    const { id } = params;
    const body = await request.json();

    const updated = await Student.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error("Error updating student:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
