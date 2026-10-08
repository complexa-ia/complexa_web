import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, descripcion } = body;

    if (!nombre?.trim() || !email?.trim() || !descripcion?.trim()) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const contacto = await prisma.contacto.create({
      data: { nombre: nombre.trim(), email: email.trim(), descripcion: descripcion.trim() },
    });

    // Send email (non-blocking — don't fail the request if email fails)
    sendContactEmail({ nombre, email, descripcion }).catch(console.error);

    return NextResponse.json({ ok: true, id: contacto.id }, { status: 201 });
  } catch (err) {
    console.error("[contact/POST]", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
