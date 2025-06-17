import { NextRequest, NextResponse } from "next/server";
import { getAdminPassword, updateAdminPassword } from "@/lib/adminStore";

export async function POST(req: NextRequest) {
  try {
    const { currentPassword, newPassword } = await req.json();

    const actualPassword = await getAdminPassword(); // Might throw

    if (currentPassword !== actualPassword) {
      return NextResponse.json(
        { message: "Incorrect current password" },
        { status: 400 }
      );
    }

    await updateAdminPassword(newPassword); // Might throw

    return NextResponse.json({
      message: "Password updated successfully",
      logout: true,
    });
  } catch (error: any) {
    console.error("❌ Server Error in change-password API:", error);
    return NextResponse.json(
      { message: "Something went wrong on the server" },
      { status: 500 }
    );
  }
}
