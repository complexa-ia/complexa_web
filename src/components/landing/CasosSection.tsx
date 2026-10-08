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
  linkUrl?: string;
};

const fallbackCasos: Caso[] = [
  {
    id: "piu-bella",
    titulo: "Piu Bella — Gestión Integral",
    descripcion:
      "Centro estético que centraliza toda su operación en una sola plataforma: bandeja unificada de WhatsApp, Instagram, Facebook, Telegram y email, agenda de turnos según disponibilidad de operadoras y equipos, y facturación electrónica integrada con ARCA.",
    categorias: ["Estética", "CRM", "Automatización"],
    metricaValor: "5 canales",
    metricaLabel: "En una sola bandeja",
    imagenUrl: "",
  },
];

const accentColors = ["#00eefc", "#ff6b98", "#bb00fc", "#d73357"];

export function CasosSection() {
  const [casos, setCasos] = useState<Caso[]>(fallbackCasos);

  useEffect(() => {
    fetch("/api/casos")
      .then((r) => r.json())
      .then((data) => { if (data.length > 0) setCasos(data); })
      .catch(() => {});
  }, []);

  return (
    <section className="py-24 px-6 overflow-hidden" id="success">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
            Casos de <span className="text-[#bb00fc]">Éxito</span>
          </h2>
          <p className="font-body text-[#adaaad] italic">Métricas reales, impacto tangible.</p>
        </div>

        <div
          className={
            casos.length === 1
              ? "max-w-4xl mx-auto"
              : "grid grid-cols-1 lg:grid-cols-2 gap-12"
          }
        >
          {casos.map((caso, i) => {
            const accent = accentColors[i % accentColors.length];
            return (
              <div
                key={caso.id}
                className="flex flex-col md:flex-row gap-8 items-center glass-panel p-1 rounded-xl group overflow-hidden"
              >
                <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-lg relative">
                  {caso.imagenUrl ? (
                    <Image
                      src={caso.imagenUrl}
                      alt={caso.titulo}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#19191c] to-[#0e0e10] flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-[120px] opacity-40 transition-transform duration-700 group-hover:scale-110"
                        style={{ color: accent }}
                      >
                        spa
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 md:w-1/2 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {caso.categorias.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded"
                        style={{ backgroundColor: `${accent}1a`, color: accent }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-headline text-xl font-bold text-[#fffbfe]">{caso.titulo}</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-headline font-black" style={{ color: accent }}>
                      {caso.metricaValor}
                    </span>
                    <span className="text-xs uppercase tracking-tighter text-[#adaaad]">
                      {caso.metricaLabel}
                    </span>
                  </div>
                  <p className="text-sm text-[#adaaad]">{caso.descripcion}</p>
                  {caso.linkUrl && (
                    <a
                      href={caso.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors"
                      style={{ color: accent }}
                    >
                      Ver proyecto
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
