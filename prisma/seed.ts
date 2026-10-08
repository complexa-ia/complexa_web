import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Admin user
  const password = await bcrypt.hash("admin123", 12);
  await prisma.user.upsert({
    where: { email: "admin@complexa.ia" },
    update: {},
    create: {
      email: "admin@complexa.ia",
      name: "Admin",
      password,
      role: "ADMIN",
    },
  });

  // Servicios
  const servicios = [
    {
      nombre: "Software a Medida",
      descripcion: "Desarrollo de ecosistemas digitales robustos. Desde microservicios hasta plataformas empresariales, construimos con el futuro en mente.",
      features: ["Cloud Native Architecture", "API First Design"],
      icono: "code",
      colorAccent: "#bb00fc",
      orden: 1,
    },
    {
      nombre: "Automatización de Procesos",
      descripcion: "Elimine cuellos de botella mediante RPA e integración inteligente. Devolvemos el tiempo a su equipo para lo que realmente importa.",
      features: ["Intelligent RPA", "Workflow Orchestration"],
      icono: "settings_suggest",
      colorAccent: "#00eefc",
      orden: 2,
    },
    {
      nombre: "Consultoría en IA",
      descripcion: "Estrategia de datos y despliegue de modelos LLM personalizados. Transformamos datos brutos en decisiones inteligentes en tiempo real.",
      features: ["LLM Customization", "Neural Insights"],
      icono: "psychology",
      colorAccent: "#ff6b98",
      orden: 3,
    },
    {
      nombre: "Servicios de Ciberseguridad",
      descripcion: "Protección proactiva contra amenazas digitales. Blindamos sus activos de IA y datos críticos con protocolos de seguridad de grado militar.",
      features: ["Threat Neutralization", "AI Integrity Audit"],
      icono: "security",
      colorAccent: "#d73357",
      orden: 4,
    },
  ];

  for (const s of servicios) {
    await prisma.servicio.create({ data: s });
  }

  console.log("✅ Seed completado");
  console.log("   Admin: admin@complexa.ia / admin123");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
