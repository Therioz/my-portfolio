import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    dotenv.config();

    const requiredFields = ["name", "lastname", "email"];
    for (const field of requiredFields) {
      if (!data[field]) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          { status: 400 }
        );
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (error) {
      console.error("SMTP verification failed:", error);
      return new Response(
        JSON.stringify({ error: "Failed to connect to email server" }),
        { status: 500 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL, // Your email (receiver)
      to: process.env.EMAIL_TO, // Sender's email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${data.name}
        Lastname: ${data.lastname}
        Email: ${data.email}
      `,
      html: `
        <h3>Nuevo mensaje desde tu Portfolio</h3>
        <hr>
        <p><strong>Datos del contacto</strong></p>
        <ul>
          <li><strong>Name:</strong> ${data.name} ${data.lastname}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone || "Not provided"}</li>
          <li><strong>Country:</strong> ${data.country}</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
};
