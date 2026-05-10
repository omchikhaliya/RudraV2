import { Resend } from "resend";

const resend = new Resend("re_ZyHuqX49_2h8xRc2NPpQs9AbwCoziVPGD");

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const response = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: "omchikhaliya121@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
      data: response,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

//re_ZyHuqX49_2h8xRc2NPpQs9AbwCoziVPGD