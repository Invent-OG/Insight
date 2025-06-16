// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   const { name, email, phone, message } = await req.json();

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.SMTP_EMAIL!,
//       pass: process.env.SMTP_PASSWORD!,
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: process.env.SMTP_EMAIL!,
//     subject: `New Contact Form Submission from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // Add this in your .env.local

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // ✅ Admin receives inquiry
    const adminEmail = await resend.emails.send({
      from: "Insight Abroad <onboarding@resend.dev>", // Temporary sender
      to: "rahulachuz69@gmail.com", // Your email to receive leads
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

    // ✅ Auto-response to user
    const userReply = await resend.emails.send({
      from: "Insight Abroad <onboarding@resend.dev>", // Same sender
      to: email, // Sender's email from form
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
      message: "Emails sent successfully",
      admin: adminEmail,
      user: userReply,
    });
  } catch (error) {
    console.error("❌ Resend email error:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
