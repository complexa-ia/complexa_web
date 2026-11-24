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
      descripcion: "Sistemas pensados para la forma de trabajar de cada empresa: desde una herramienta interna hasta una plataforma completa, preparados para crecer con el negocio.",
      features: ["Diseño a medida", "Integración con sus herramientas"],
      icono: "code",
      colorAccent: "#bb00fc",
      orden: 1,
    },
    {
      nombre: "Automatización de Procesos",
      descripcion: "Conectamos sus herramientas y automatizamos tareas manuales para reducir cuellos de botella y liberar tiempo de su equipo para lo que realmente importa.",
      features: ["Integración entre sistemas", "Flujos automatizados"],
      icono: "settings_suggest",
      colorAccent: "#00eefc",
      orden: 2,
    },
    {
      nombre: "Consultoría en IA",
      descripcion: "Elegimos y configuramos la IA adecuada para cada problema y la conectamos con la información de su empresa para apoyar la toma de decisiones.",
      features: ["Selección de modelos", "Configuración a medida"],
      icono: "psychology",
      colorAccent: "#ff6b98",
      orden: 3,
    },
    {
      nombre: "Servicios de Ciberseguridad",
      descripcion: "Aplicamos buenas prácticas de seguridad en cada sistema que construimos: control de accesos, manejo cuidadoso de credenciales y revisión de riesgos antes de automatizar.",
      features: ["Revisión de riesgos", "Control de accesos"],
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
