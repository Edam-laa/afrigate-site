import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.redirect(
        new URL("/contact?sent=error", request.url),
        303,
      );
    }

    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(getRequiredEnv("SMTP_PORT"));
    const smtpSecure = getRequiredEnv("SMTP_SECURE") === "true";
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");

    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL ||
      process.env.QUOTE_RECEIVER_EMAIL ||
      smtpUser;

    const senderEmail =
      process.env.CONTACT_SENDER_EMAIL ||
      process.env.QUOTE_SENDER_EMAIL ||
      smtpUser;

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || "Non renseignée");
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Non renseigné");
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Afrigate Partners - Contact" <${senderEmail}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `Nouveau message de contact - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0b1733; line-height: 1.6;">
          <h2 style="color: #0b1733;">Nouveau message depuis le formulaire de contact</h2>

          <p><strong>Nom :</strong> ${safeName}</p>
          <p><strong>Entreprise :</strong> ${safeCompany}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          <p><strong>Téléphone :</strong> ${safePhone}</p>
          <p><strong>Sujet :</strong> ${safeSubject}</p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p><strong>Message :</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Afrigate Partners" <${senderEmail}>`,
      to: email,
      subject: "Confirmation de réception de votre message",
      html: `
        <div style="font-family: Arial, sans-serif; color: #0b1733; line-height: 1.6;">
          <h2 style="color: #0b1733;">Nous avons bien reçu votre message</h2>

          <p>Bonjour ${safeName},</p>

          <p>
            Merci d’avoir contacté Afrigate Partners. Votre message a bien été transmis à notre équipe.
          </p>

          <p>
            Nous reviendrons vers vous dans les meilleurs délais.
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p><strong>Récapitulatif de votre message :</strong></p>
          <p><strong>Sujet :</strong> ${safeSubject}</p>
          <p>${safeMessage}</p>

          <p style="margin-top: 24px;">
            Cordialement,<br />
            <strong>L’équipe Afrigate Partners</strong>
          </p>
        </div>
      `,
    });

    return NextResponse.redirect(
      new URL("/contact?sent=success", request.url),
      303,
    );
  } catch (error) {
    console.error("Contact email error:", error);

    return NextResponse.redirect(
      new URL("/contact?sent=error", request.url),
      303,
    );
  }
}