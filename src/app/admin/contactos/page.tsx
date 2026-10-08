"use client";

import { useEffect, useState } from "react";

type Contacto = {
  id: string;
  nombre: string;
  email: string;
  descripcion: string;
  estado: "NUEVO" | "LEIDO" | "RESPONDIDO";
  createdAt: string;
};

const estadoColors = {
  NUEVO: { bg: "bg-[#d73357]/20", text: "text-[#ff6e84]" },
  LEIDO: { bg: "bg-[#00eefc]/10", text: "text-[#00eefc]" },
  RESPONDIDO: { bg: "bg-[#bb00fc]/10", text: "text-[#bb00fc]" },
};

export default function ContactosPage() {
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [selected, setSelected] = useState<Contacto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/contactos")
      .then((r) => r.json())
      .then((data) => { setContactos(data); setLoading(false); });
  }, []);

  const updateEstado = async (id: string, estado: string) => {
    await fetch(`/api/admin/contactos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado }),
    });
    setContactos((prev) =>
      prev.map((c) => (c.id === id ? { ...c, estado: estado as Contacto["estado"] } : c))
    );
    if (selected?.id === id) setSelected((s) => s ? { ...s, estado: estado as Contacto["estado"] } : null);
  };

  return (
    <div className="space-y-6">
      <h1 className="font-headline text-3xl font-bold text-[#fffbfe]">Contactos</h1>

      <div className="flex gap-6">
        {/* List */}
        <div className="flex-1 glass-panel rounded-xl overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-[#767578] font-body">Cargando...</div>
          ) : contactos.length === 0 ? (
            <div className="p-8 text-center text-[#767578] font-body">No hay contactos.</div>
          ) : (
            <div className="divide-y divide-[#48474a]/30">
              {contactos.map((c) => {
                const colors = estadoColors[c.estado];
                return (
                  <button
                    key={c.id}
                    onClick={() => { setSelected(c); updateEstado(c.id, c.estado === "NUEVO" ? "LEIDO" : c.estado); }}
                    className={`w-full text-left p-4 flex items-center justify-between hover:bg-[#19191c] transition-colors ${selected?.id === c.id ? "bg-[#19191c]" : ""}`}
                  >
                    <div>
                      <p className={`font-body font-medium ${c.estado === "NUEVO" ? "text-[#fffbfe]" : "text-[#adaaad]"}`}>
                        {c.nombre}
                      </p>
                      <p className="text-[#767578] text-sm font-body truncate max-w-xs">{c.email}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded ${colors.bg} ${colors.text}`}>
                        {c.estado}
                      </span>
                      <span className="text-[#767578] text-xs">
                        {new Date(c.createdAt).toLocaleDateString("es-AR")}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Detail */}
        {selected && (
          <div className="w-96 glass-panel rounded-xl p-6 space-y-4 h-fit">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-lg font-bold text-[#fffbfe]">{selected.nombre}</h3>
              <button
                onClick={() => setSelected(null)}
                className="text-[#767578] hover:text-[#fffbfe] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <a href={`mailto:${selected.email}`} className="text-[#00eefc] text-sm font-body hover:underline block">
              {selected.email}
            </a>
            <div className="bg-[#19191c] rounded-lg p-4 border-l-2 border-[#bb00fc]">
              <p className="text-[#adaaad] text-sm font-body leading-relaxed">{selected.descripcion}</p>
            </div>
            <div className="flex gap-2 pt-2">
              {(["NUEVO", "LEIDO", "RESPONDIDO"] as const).map((estado) => {
                const colors = estadoColors[estado];
                return (
                  <button
                    key={estado}
                    onClick={() => updateEstado(selected.id, estado)}
                    className={`flex-1 py-2 text-[10px] font-bold tracking-widest uppercase rounded transition-all ${
                      selected.estado === estado
                        ? `${colors.bg} ${colors.text} border border-current`
                        : "bg-[#262529] text-[#767578] hover:text-[#adaaad]"
                    }`}
                  >
                    {estado}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
