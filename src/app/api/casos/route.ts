import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const casos = await prisma.casoDeExito.findMany({
    where: { esPublico: true },
    orderBy: { orden: "asc" },
  });
  return NextResponse.json(casos);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const caso = await prisma.casoDeExito.create({ data: body });
  return NextResponse.json(caso, { status: 201 });
}
