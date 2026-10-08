"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Caso = {
  id: string;
  titulo: string;
  descripcion: string;
  categorias: string[];
  metricaValor: string;
  metricaLabel: string;
  imagenUrl: string;
  linkUrl: string;
  esPublico: boolean;
  orden: number;
};

const empty: Omit<Caso, "id"> = {
  titulo: "", descripcion: "", categorias: [], metricaValor: "",
  metricaLabel: "", imagenUrl: "", linkUrl: "", esPublico: true, orden: 0,
};

export default function CasosPage() {
  const [casos, setCasos] = useState<Caso[]>([]);
  const [editing, setEditing] = useState<Partial<Caso> | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = () => {
    fetch("/api/casos")
      .then((r) => r.json())
      .then((data) => { setCasos(data); setLoading(false); });
  };

  useEffect(() => { load(); }, []);

  const save = async () => {
    setSaving(true);
    const isNew = !editing?.id;
    const url = isNew ? "/api/casos" : `/api/casos/${editing!.id}`;
    await fetch(url, {
      method: isNew ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    });
    setSaving(false);
    setEditing(null);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("¿Eliminar este caso?")) return;
    await fetch(`/api/casos/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-headline text-3xl font-bold text-[#fffbfe]">Casos de Éxito</h1>
        <button
          onClick={() => setEditing({ ...empty })}
          className="flex items-center gap-2 bg-[#bb00fc] text-white px-5 py-2 rounded-[20px] font-headline font-bold text-sm tracking-wider hover:shadow-[0_0_20px_rgba(187,0,252,0.4)] transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Nuevo Caso
        </button>
      </div>

      {loading ? (
        <div className="text-center text-[#767578] py-12 font-body">Cargando...</div>
      ) : casos.length === 0 ? (
        <div className="glass-panel rounded-xl p-12 text-center text-[#767578] font-body">
          No hay casos de éxito. Creá el primero.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {casos.map((c) => (
            <div key={c.id} className="glass-panel rounded-xl overflow-hidden flex">
              <div className="w-32 h-32 relative shrink-0">
                {c.imagenUrl ? (
                  <Image src={c.imagenUrl} alt={c.titulo} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-[#262529] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#48474a]">image</span>
                  </div>
                )}
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline font-bold text-[#fffbfe]">{c.titulo}</h3>
                  <p className="text-[#adaaad] text-sm font-body mt-1 line-clamp-2">{c.descripcion}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#bb00fc] font-headline font-bold">{c.metricaValor}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditing(c)}
                      className="text-[#adaaad] hover:text-[#00eefc] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <button
                      onClick={() => remove(c.id)}
                      className="text-[#adaaad] hover:text-[#ff6e84] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#19191c] border border-[#bb00fc]/20 rounded-2xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-headline text-xl font-bold text-[#fffbfe]">
                {editing.id ? "Editar Caso" : "Nuevo Caso"}
              </h2>
              <button onClick={() => setEditing(null)} className="text-[#767578] hover:text-[#fffbfe]">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {[
              { key: "titulo", label: "Título", type: "text" },
              { key: "metricaValor", label: "Métrica (ej: +45%)", type: "text" },
              { key: "metricaLabel", label: "Label métrica (ej: Eficiencia Operativa)", type: "text" },
              { key: "imagenUrl", label: "URL de imagen", type: "url" },
              { key: "linkUrl", label: "Link al proyecto (opcional)", type: "url" },
            ].map(({ key, label, type }) => (
              <div key={key} className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-[#adaaad] font-bold font-label block">{label}</label>
                <input
                  type={type}
                  value={(editing as Record<string, unknown>)[key] as string || ""}
                  onChange={(e) => setEditing({ ...editing, [key]: e.target.value })}
                  className="w-full bg-[#262529] border border-[#48474a] focus:border-[#bb00fc] focus:outline-none text-[#fffbfe] rounded px-3 py-2 font-body text-sm"
                />
              </div>
            ))}

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
                Categorías (separadas por coma)
              </label>
              <input
                type="text"
                value={editing.categorias?.join(", ") || ""}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    categorias: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                  })
                }
                className="w-full bg-[#262529] border border-[#48474a] focus:border-[#bb00fc] focus:outline-none text-[#fffbfe] rounded px-3 py-2 font-body text-sm"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="esPublico"
                checked={editing.esPublico ?? true}
                onChange={(e) => setEditing({ ...editing, esPublico: e.target.checked })}
                className="w-4 h-4 accent-[#bb00fc]"
              />
              <label htmlFor="esPublico" className="text-sm font-body text-[#adaaad]">
                Visible en el sitio
              </label>
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
