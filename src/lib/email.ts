import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? "placeholder_key");
}

export async function sendContactEmail(data: {
  nombre: string;
  email: string;
  descripcion: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[email] RESEND_API_KEY no configurado, email no enviado.");
    return;
  }

  const adminEmail = process.env.ADMIN_EMAIL!;
  const fromEmail = process.env.RESEND_FROM_EMAIL!;

  await getResend().emails.send({
    from: fromEmail,
    to: adminEmail,
    subject: `Nuevo contacto: ${data.nombre}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0e0e10; color: #fffbfe; padding: 32px; border-radius: 8px; border: 1px solid rgba(187,0,252,0.2);">
        <h2 style="color: #bb00fc; margin-bottom: 24px;">Nuevo contacto desde Complexa IA</h2>
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #00eefc;">${data.email}</a></p>
        <p><strong>Descripción:</strong></p>
        <p style="background: #19191c; padding: 16px; border-radius: 4px; border-left: 3px solid #bb00fc;">${data.descripcion}</p>
        <p style="color: #767578; font-size: 12px; margin-top: 32px;">Enviado desde el formulario de contacto de complexa.com.ar</p>
      </div>
    `,
  });
}
