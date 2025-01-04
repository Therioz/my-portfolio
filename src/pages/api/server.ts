import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    dotenv.config();

    // const requiredFields = ["name", "lastname", "email"];
    // for (const field of requiredFields) {
    //   if (!data[field]) {
    //     return new Response(
    //       JSON.stringify({ error: `Missing required field: ${field}` }),
    //       { status: 400 }
    //     );
    //   }
    // }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "danilom666@gmail.com",
        pass: "iigx eliv xvql tvdk",
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
      from: "danilom666@gmail.com", // Your email (receiver)
      to: "dangertriangle@gmail.com", // Sender's email
      subject: `New Contact Form Submission from ${data.name}`,
      text: `
New Contact Form Submission
-------------------------

Service: ${data.service}

Contact Information:
------------------
Name: ${data.name} ${data.lastname}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Country: ${data.country}

Message:
--------
${data.message}

Submitted on: ${new Date().toLocaleString()}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<hr>
<p><strong>Service:</strong> ${data.service}</p>
<h3>Contact Information:</h3>
<ul>
  <li><strong>Name:</strong> ${data.name} ${data.lastname}</li>
  <li><strong>Email:</strong> ${data.email}</li>
  <li><strong>Phone:</strong> ${data.phone || "Not provided"}</li>
  <li><strong>Country:</strong> ${data.country}</li>
</ul>
<h3>Message:</h3>
<p>${data.message}</p>
<p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
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
