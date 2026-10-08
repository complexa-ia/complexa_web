import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [totalCasos, totalServicios, totalContactos, nuevosContactos] = await Promise.all([
    prisma.casoDeExito.count(),
    prisma.servicio.count({ where: { activo: true } }),
    prisma.contacto.count(),
    prisma.contacto.count({ where: { estado: "NUEVO" } }),
  ]);

  const recentContactos = await prisma.contacto.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const stats = [
    { label: "Casos de Éxito", value: totalCasos, icon: "emoji_events", color: "#bb00fc" },
    { label: "Servicios Activos", value: totalServicios, icon: "settings_suggest", color: "#00eefc" },
    { label: "Total Contactos", value: totalContactos, icon: "mail", color: "#ff6b98" },
    { label: "Sin Leer", value: nuevosContactos, icon: "mark_email_unread", color: "#d73357" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold text-[#fffbfe]">Dashboard</h1>
        <p className="text-[#adaaad] font-body mt-1">Bienvenido al panel de administración de Complexa IA.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="glass-panel p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#adaaad] text-sm font-body">{s.label}</span>
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ color: s.color }}
              >
                {s.icon}
              </span>
            </div>
            <div className="text-3xl font-headline font-bold" style={{ color: s.color }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel rounded-xl overflow-hidden">
        <div className="p-6 border-b border-[#48474a]/50">
          <h2 className="font-headline text-lg font-bold text-[#fffbfe]">Últimos Contactos</h2>
        </div>
        {recentContactos.length === 0 ? (
          <div className="p-8 text-center text-[#767578] font-body">
            No hay contactos todavía.
          </div>
        ) : (
          <div className="divide-y divide-[#48474a]/30">
            {recentContactos.map((c) => (
              <div key={c.id} className="p-4 flex items-center justify-between hover:bg-[#19191c] transition-colors">
                <div>
                  <p className="font-body font-medium text-[#fffbfe]">{c.nombre}</p>
                  <p className="text-[#adaaad] text-sm font-body">{c.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded ${
                      c.estado === "NUEVO"
                        ? "bg-[#d73357]/20 text-[#ff6e84]"
                        : c.estado === "LEIDO"
                        ? "bg-[#00eefc]/10 text-[#00eefc]"
                        : "bg-[#bb00fc]/10 text-[#bb00fc]"
                    }`}
                  >
                    {c.estado}
                  </span>
                  <span className="text-[#767578] text-xs font-body">
                    {new Date(c.createdAt).toLocaleDateString("es-AR")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
