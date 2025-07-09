import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmails({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const admin = await resend.emails.send({
    from: "Insight Abroad <no-reply@insightabroadservices.org>",
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

  const user = await resend.emails.send({
    from: "Insight Abroad <no-reply@insightabroadservices.org>",
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

  return { admin, user };
}
