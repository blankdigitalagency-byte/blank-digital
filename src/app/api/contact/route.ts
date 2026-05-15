import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getResend } from "@/lib/resend";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    await getResend().emails.send({
      from: "contact@blankdigital.co.uk",
      to: "info@blankdigital.co.uk",
      replyTo: data.email,
      subject: `New enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h2 style="color: #0a0a0a; font-size: 24px; font-weight: 900; margin-bottom: 24px;">
            New Project Enquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 120px; font-size: 14px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0a0a0a; font-size: 14px; font-weight: 600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0a0a0a; font-size: 14px; font-weight: 600;">${data.email}</td>
            </tr>
            ${
              data.company
                ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0a0a0a; font-size: 14px; font-weight: 600;">${data.company}</td>
            </tr>`
                : ""
            }
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #666; font-size: 14px; margin-bottom: 8px;">Message</p>
            <p style="color: #0a0a0a; font-size: 15px; line-height: 1.6; background: #f8fafc; padding: 16px; border-radius: 12px; margin: 0;">${data.message.replace(/\n/g, "<br>")}</p>
          </div>
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f0f0f0;">
            <p style="color: #999; font-size: 12px; margin: 0;">Sent via blankdigital.co.uk contact form</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
