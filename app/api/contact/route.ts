
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { getZohoAccessToken } from "@/lib/zoho/getAccessToken";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // 1. Save to Supabase
    await db.insert(leads).values({
      name,
      email,
      phone,
      interest: message,
    });

    // 2. Send to Zoho Bigin
    try {
      const accessToken = await getZohoAccessToken();

      const zohoPayload = {
        data: [
          {
            Last_Name: name,
            Email: email,
            Phone: phone,
            Description: message,
          },
        ],
        trigger: ["workflow"],
      };

      const zohoRes = await fetch("https://www.zohoapis.in/bigin/v1/Contacts", {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(zohoPayload),
      });

      const zohoData = await zohoRes.json();
      const result = zohoData?.data?.[0];

      if (!zohoRes.ok || result?.code !== "SUCCESS") {
        console.error("❌ Zoho error:", zohoData);
      }
    } catch (zohoErr) {
      console.error("❌ Failed Zoho sync:", zohoErr);
    }

    // 3. Send admin email
    const adminEmail = await resend.emails.send({
      from: "Insight Abroad <noreply@resend.dev>",
      to: "rahulachuz69@gmail.com",
      subject: `📬 New Inquiry from ${name}`,
      html: `
    <div style="font-family: sans-serif; line-height: 1.5;">
      <h2 style="color: #EF4444;">New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    </div>
  `,
    });

    // 4. Auto-response to user
    const userReply = await resend.emails.send({
      from: "Insight Abroad <onboarding@resend.dev>",
      to: email,
      subject: `🎉 Thank You for Contacting Insight Abroad`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>Hello ${name},</h2>
          <p>Thank you for reaching out to <strong>Insight Abroad Services</strong>.</p>
          <p>We’ve received your message and will get back to you shortly.</p>
          <hr/>
          <p><strong>Your Message:</strong><br/>${message}</p>
          <br/>
          <p>Warm regards,<br/><strong>Insight Abroad Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "✅ Form submitted successfully",
      admin: adminEmail,
      user: userReply,
    });
  } catch (error: any) {
    console.error("❌ Error in /api/contact:", error);
    return NextResponse.json(
      { error: "Failed to process contact submission", details: error.message },
      { status: 500 }
    );
  }
}

