import nodemailer from "nodemailer";

export async function post({ request }: { request: Request }) {
  try {
    const formData = await request.json(); // Assuming the contact form sends JSON data
    const { name, email, message } = formData;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: Number(import.meta.env.SMTP_PORT),
      secure: false, // True for 465, false for other ports
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    // Configure email content
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender address
      to: import.meta.env.TO_EMAIL, // Receiver address
      subject: `New message from ${name}`, // Subject line
      text: message, // Plain text body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Email failed to send." }),
      { status: 500 },
    );
  }
}
