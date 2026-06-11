import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type QuoteRequestData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  category: string;
  product: string;
  quantity: string;
  destination: string;
  deadline: string;
  budget: string;
  message: string;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value || value.trim() === "") {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value.trim();
}

function cleanValue(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildTextEmail(data: QuoteRequestData) {
  return `
Nouvelle demande de devis - Afrigate Partner by Infinity International Intertrade

INFORMATIONS CLIENT
Nom complet : ${data.name || "Non renseigné"}
Entreprise : ${data.company || "Non renseignée"}
Email : ${data.email || "Non renseigné"}
Téléphone / WhatsApp : ${data.phone || "Non renseigné"}
Pays / ville : ${data.location || "Non renseigné"}

DEMANDE PRODUIT
Catégorie : ${data.category || "Non renseignée"}
Produit / référence : ${data.product || "Non renseigné"}
Quantité souhaitée : ${data.quantity || "Non renseignée"}
Destination : ${data.destination || "Non renseignée"}
Délai souhaité : ${data.deadline || "Non renseigné"}
Budget indicatif : ${data.budget || "Non renseigné"}

DÉTAILS DU BESOIN
${data.message || "Aucun détail renseigné"}

---
Email envoyé automatiquement depuis le site Afrigate Partner by Infinity International Intertrade.
`.trim();
}

function buildHtmlEmail(data: QuoteRequestData) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#475569;font-weight:700;width:220px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#011332;">
        ${escapeHtml(value || "Non renseigné")}
      </td>
    </tr>
  `;

  return `
    <div style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;color:#011332;">
      <div style="max-width:760px;margin:0 auto;padding:32px 18px;">
        <div style="background:#011332;color:#ffffff;border-radius:22px 22px 0 0;padding:28px 30px;">
          <p style="margin:0 0 10px;color:#D7A83F;font-size:13px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;">
            Afrigate Partner by Infinity International Intertrade
          </p>
          <h1 style="margin:0;font-size:28px;line-height:1.2;">
            Nouvelle demande de devis
          </h1>
          <p style="margin:14px 0 0;color:rgba(255,255,255,0.72);font-size:15px;line-height:1.7;">
            Une nouvelle demande a été envoyée depuis le formulaire du site.
          </p>
        </div>

        <div style="background:#ffffff;border:1px solid #e5e7eb;border-top:0;padding:0;border-radius:0 0 22px 22px;overflow:hidden;">
          <div style="padding:24px 30px 10px;">
            <h2 style="margin:0 0 14px;font-size:20px;color:#011332;">
              Informations client
            </h2>
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:15px;">
            ${row("Nom complet", data.name)}
            ${row("Entreprise", data.company)}
            ${row("Email", data.email)}
            ${row("Téléphone / WhatsApp", data.phone)}
            ${row("Pays / ville", data.location)}
          </table>

          <div style="padding:28px 30px 10px;">
            <h2 style="margin:0 0 14px;font-size:20px;color:#011332;">
              Demande produit
            </h2>
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:15px;">
            ${row("Catégorie", data.category)}
            ${row("Produit / référence", data.product)}
            ${row("Quantité souhaitée", data.quantity)}
            ${row("Destination", data.destination)}
            ${row("Délai souhaité", data.deadline)}
            ${row("Budget indicatif", data.budget)}
          </table>

          <div style="padding:28px 30px;">
            <h2 style="margin:0 0 14px;font-size:20px;color:#011332;">
              Détails du besoin
            </h2>
            <div style="white-space:pre-line;background:#f8fafc;border:1px solid #e5e7eb;border-radius:16px;padding:18px;color:#334155;line-height:1.7;">
              ${escapeHtml(data.message || "Aucun détail renseigné")}
            </div>
          </div>

          <div style="background:#f8fafc;padding:18px 30px;color:#64748b;font-size:13px;">
            Email envoyé automatiquement depuis le site Afrigate Partner by Infinity International Intertrade.
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildConfirmationTextEmail(data: QuoteRequestData) {
  return `
Bonjour ${data.name || ""},

Nous avons bien reçu votre demande de devis transmise via le site Afrigate Partner by Infinity International Intertrade.

Notre équipe va étudier les informations envoyées pour votre besoin en ${data.category || "produits"} et reviendra vers vous dans les meilleurs délais.

Rappel de votre demande :
- Entreprise : ${data.company || "Non renseignée"}
- Catégorie : ${data.category || "Non renseignée"}
- Produit / référence : ${data.product || "Non renseigné"}
- Quantité souhaitée : ${data.quantity || "Non renseignée"}
- Destination : ${data.destination || "Non renseignée"}
- Délai souhaité : ${data.deadline || "Non renseigné"}

Si vous souhaitez compléter votre demande, vous pouvez répondre directement à cet email.

Afrigate Partner by Infinity International Intertrade
Email : ${getRequiredEnv("QUOTE_RECEIVER_EMAIL")}
Téléphone : +216 28 829 817
`.trim();
}

function buildConfirmationHtmlEmail(data: QuoteRequestData) {
  return `
    <div style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;color:#011332;">
      <div style="max-width:720px;margin:0 auto;padding:32px 18px;">
        <div style="background:#011332;color:#ffffff;border-radius:22px;padding:28px 30px;">
          <p style="margin:0 0 10px;color:#D7A83F;font-size:13px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;">
            Afrigate Partner by Infinity International Intertrade
          </p>
          <h1 style="margin:0;font-size:28px;line-height:1.2;">
            Votre demande de devis a bien été reçue
          </h1>
          <p style="margin:14px 0 0;color:rgba(255,255,255,0.72);font-size:15px;line-height:1.7;">
            Bonjour ${escapeHtml(data.name || "")}, notre équipe va étudier votre demande et revenir vers vous rapidement.
          </p>
        </div>

        <div style="margin-top:18px;background:#ffffff;border:1px solid #e5e7eb;border-radius:22px;padding:28px 30px;">
          <p style="margin:0 0 16px;font-size:16px;line-height:1.8;color:#334155;">
            Nous avons bien reçu votre demande concernant <strong>${escapeHtml(data.category || "vos besoins produits")}</strong>.
          </p>
          <p style="margin:0 0 20px;font-size:15px;line-height:1.8;color:#475569;">
            Notre équipe va vérifier les informations transmises pour vous orienter vers la meilleure réponse : devis, sourcing, coordination commerciale ou suivi export.
          </p>

          <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:16px;padding:18px 20px;">
            <p style="margin:0 0 8px;font-size:14px;color:#64748b;">
              Rappel de votre demande
            </p>
            <p style="margin:0;font-size:15px;line-height:1.8;color:#011332;">
              Entreprise : ${escapeHtml(data.company || "Non renseignée")}<br />
              Catégorie : ${escapeHtml(data.category || "Non renseignée")}<br />
              Produit / référence : ${escapeHtml(data.product || "Non renseigné")}<br />
              Quantité souhaitée : ${escapeHtml(data.quantity || "Non renseignée")}<br />
              Destination : ${escapeHtml(data.destination || "Non renseignée")}<br />
              Délai souhaité : ${escapeHtml(data.deadline || "Non renseigné")}
            </p>
          </div>

          <p style="margin:20px 0 0;font-size:15px;line-height:1.8;color:#475569;">
            Vous pouvez répondre directement à cet email si vous souhaitez ajouter des précisions.
          </p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const data: QuoteRequestData = {
      name: cleanValue(formData.get("name")),
      company: cleanValue(formData.get("company")),
      email: cleanValue(formData.get("email")),
      phone: cleanValue(formData.get("phone")),
      location: cleanValue(formData.get("location")),
      category: cleanValue(formData.get("category")),
      product: cleanValue(formData.get("product")),
      quantity: cleanValue(formData.get("quantity")),
      destination: cleanValue(formData.get("destination")),
      deadline: cleanValue(formData.get("deadline")),
      budget: cleanValue(formData.get("budget")),
      message: cleanValue(formData.get("message")),
    };

    const errorUrl = new URL("/demande-devis?sent=error", request.url);
    const successUrl = new URL("/demande-devis?sent=success", request.url);

    if (
      !data.name ||
      !data.email ||
      !isValidEmail(data.email) ||
      !data.phone ||
      !data.category ||
      !data.message
    ) {
      return NextResponse.redirect(errorUrl, { status: 303 });
    }

    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(getRequiredEnv("SMTP_PORT"));
    const smtpSecure = getRequiredEnv("SMTP_SECURE") === "true";
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");
    const receiverEmail = getRequiredEnv("QUOTE_RECEIVER_EMAIL");
    const senderEmail = getRequiredEnv("QUOTE_SENDER_EMAIL");

    if (!Number.isFinite(smtpPort)) {
      throw new Error("Invalid environment variable: SMTP_PORT");
    }

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

    const subjectProduct = data.product || data.category || "Demande de devis";

    await transporter.sendMail({
      from: `"Afrigate Partner by Infinity International Intertrade" <${senderEmail}>`,
      to: receiverEmail,
      replyTo: data.email,
      subject: `Nouvelle demande de devis - ${subjectProduct}`,
      text: buildTextEmail(data),
      html: buildHtmlEmail(data),
    });

    try {
      await transporter.sendMail({
        from: `"Afrigate Partner by Infinity International Intertrade" <${senderEmail}>`,
        to: data.email,
        replyTo: receiverEmail,
        subject:
          "Afrigate Partner by Infinity International Intertrade - Confirmation de votre demande de devis",
        text: buildConfirmationTextEmail(data),
        html: buildConfirmationHtmlEmail(data),
      });
    } catch (confirmationError) {
      console.error(
        "Quote request confirmation email error:",
        confirmationError,
      );
    }

    return NextResponse.redirect(successUrl, { status: 303 });
  } catch (error) {
    console.error("Quote request email error:", error);

    const errorUrl = new URL("/demande-devis?sent=error", request.url);
    return NextResponse.redirect(errorUrl, { status: 303 });
  }
}