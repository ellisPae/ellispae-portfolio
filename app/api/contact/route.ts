import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactEmailTemplate } from "./emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.company) {
      return NextResponse.json({ success: true });
    }
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Ellis Pae <onboarding@resend.dev>",
      to: ["ellis.h.pae@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] Message from ${name}`,
      html: contactEmailTemplate({ name, email, message }),
      text: `
        Name: ${name}
        Email: ${email}

        ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
