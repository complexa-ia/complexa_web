"use client";

import { useEffect, useState } from "react";

type Servicio = {
  id: string;
  nombre: string;
  descripcion: string;
  features: string[];
  icono: string;
  colorAccent: string;
  orden: number;
  activo: boolean;
};

const empty: Omit<Servicio, "id"> = {
  nombre: "", descripcion: "", features: [], icono: "code",
  colorAccent: "#bb00fc", orden: 0, activo: true,
};

const iconOptions = ["code", "settings_suggest", "psychology", "security", "bolt", "hub", "smart_toy", "analytics"];

export default function ServiciosPage() {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [editing, setEditing] = useState<Partial<Servicio> | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = () => {
    fetch("/api/servicios")
      .then((r) => r.json())
      .then((data) => { setServicios(data); setLoading(false); });
  };

  useEffect(() => { load(); }, []);

  const save = async () => {
    setSaving(true);
    const isNew = !editing?.id;
    const url = isNew ? "/api/servicios" : `/api/servicios/${editing!.id}`;
    await fetch(url, {
      method: isNew ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    });
    setSaving(false);
    setEditing(null);
    load();
  };

  const toggleActivo = async (s: Servicio) => {
    await fetch(`/api/servicios/${s.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...s, activo: !s.activo }),
    });
    load();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-headline text-3xl font-bold text-[#fffbfe]">Servicios</h1>
        <button
          onClick={() => setEditing({ ...empty })}
          className="flex items-center gap-2 bg-[#bb00fc] text-white px-5 py-2 rounded-[20px] font-headline font-bold text-sm tracking-wider hover:shadow-[0_0_20px_rgba(187,0,252,0.4)] transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Nuevo Servicio
        </button>
      </div>

      {loading ? (
        <div className="text-center text-[#767578] py-12 font-body">Cargando...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {servicios.map((s) => (
            <div key={s.id} className="glass-panel rounded-xl p-6 flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: s.colorAccent }}
              >
                <span className="material-symbols-outlined text-white">{s.icono}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-headline font-bold text-[#fffbfe]">{s.nombre}</h3>
                <p className="text-[#adaaad] text-sm font-body mt-1 line-clamp-2">{s.descripcion}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {s.features.map((f) => (
                    <span key={f} className="text-[10px] px-2 py-0.5 bg-[#262529] text-[#adaaad] rounded">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button onClick={() => setEditing(s)} className="text-[#adaaad] hover:text-[#00eefc] transition-colors">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                </button>
                <button
                  onClick={() => toggleActivo(s)}
                  className={`transition-colors ${s.activo ? "text-[#00eefc]" : "text-[#767578]"}`}
                  title={s.activo ? "Desactivar" : "Activar"}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {s.activo ? "visibility" : "visibility_off"}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#19191c] border border-[#bb00fc]/20 rounded-2xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-headline text-xl font-bold text-[#fffbfe]">
                {editing.id ? "Editar Servicio" : "Nuevo Servicio"}
              </h2>
              <button onClick={() => setEditing(null)} className="text-[#767578] hover:text-[#fffbfe]">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-[#adaaad] font-bold font-label block">Nombre</label>
              <input
                type="text"
                value={editing.nombre || ""}
                onChange={(e) => setEditing({ ...editing, nombre: e.target.value })}
                className="w-full bg-[#262529] border border-[#48474a] focus:border-[#bb00fc] focus:outline-none text-[#fffbfe] rounded px-3 py-2 font-body text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-[#adaaad] font-bold font-label block">Descripción</label>
              <textarea
                rows={3}
                value={editing.descripcion || ""}
                onChange={(e) => setEditing({ ...editing, descripcion: e.target.value })}
                className="w-full bg-[#262529] border border-[#48474a] focus:border-[#bb00fc] focus:outline-none text-[#fffbfe] rounded px-3 py-2 font-body text-sm resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-[#adaaad] font-bold font-label block">
                Features (separadas por coma)
              </label>
              <input
                type="text"
                value={editing.features?.join(", ") || ""}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    features: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                  })
                }
                className="w-full bg-[#262529] border border-[#48474a] focus:border-[#bb00fc] focus:outline-none text-[#fffbfe] rounded px-3 py-2 font-body text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#adaaad] font-bold font-label block">Ícono</label>
              <div className="flex flex-wrap gap-2">
                {iconOptions.map((icon) => (
                  <button
                    key={icon}
                    onClick={() => setEditing({ ...editing, icono: icon })}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      editing.icono === icon
                        ? "bg-[#bb00fc] text-white"
                        : "bg-[#262529] text-[#adaaad] hover:bg-[#bb00fc]/20"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{icon}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-[#adaaad] font-bold font-label block">
                Color (hex)
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="color"
                  value={editing.colorAccent || "#bb00fc"}
                  onChange={(e) => setEditing({ ...editing, colorAccent: e.target.value })}
                  className="w-10 h-10 rounded cursor-pointer border-0 bg-transparent"
                />
                <input
                  type="text"
                  value={editing.colorAccent || "#bb00fc"}
                  onChange={(e) => setEditing({ ...editing, colorAccent: e.target.value })}
                  className="flex-1 bg-[#262529] border border-[#48474a] focus:border-[#bb00fc] focus:outline-none text-[#fffbfe] rounded px-3 py-2 font-body text-sm"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setEditing(null)}
                className="flex-1 py-3 bg-[#262529] text-[#adaaad] rounded-[20px] font-headline font-bold text-sm tracking-wider hover:text-[#fffbfe] transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={save}
                disabled={saving}
                className="flex-1 py-3 bg-[#bb00fc] text-white rounded-[20px] font-headline font-bold text-sm tracking-wider hover:shadow-[0_0_20px_rgba(187,0,252,0.4)] transition-all disabled:opacity-60"
              >
                {saving ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
