"use client";

import { useEffect, useState } from "react";

type Servicio = {
  id: string;
  nombre: string;
  descripcion: string;
  features: string[];
  icono: string;
  colorAccent: string;
};

const fallbackServicios: Servicio[] = [
  {
    id: "1",
    nombre: "Software a Medida",
    descripcion:
      "Desarrollo de ecosistemas digitales robustos. Desde microservicios hasta plataformas empresariales, construimos con el futuro en mente.",
    features: ["Cloud Native Architecture", "API First Design"],
    icono: "code",
    colorAccent: "#bb00fc",
  },
  {
    id: "2",
    nombre: "Automatización de Procesos",
    descripcion:
      "Elimine cuellos de botella mediante RPA e integración inteligente. Devolvemos el tiempo a su equipo para lo que realmente importa.",
    features: ["Intelligent RPA", "Workflow Orchestration"],
    icono: "settings_suggest",
    colorAccent: "#00eefc",
  },
  {
    id: "3",
    nombre: "Consultoría en IA",
    descripcion:
      "Estrategia de datos y despliegue de modelos LLM personalizados. Transformamos datos brutos en decisiones inteligentes en tiempo real.",
    features: ["LLM Customization", "Neural Insights"],
    icono: "psychology",
    colorAccent: "#ff6b98",
  },
  {
    id: "4",
    nombre: "Servicios de Ciberseguridad",
    descripcion:
      "Protección proactiva contra amenazas digitales. Blindamos sus activos de IA y datos críticos con protocolos de seguridad de grado militar.",
    features: ["Threat Neutralization", "AI Integrity Audit"],
    icono: "security",
    colorAccent: "#d73357",
  },
];

export function ServiciosSection() {
  const [servicios, setServicios] = useState<Servicio[]>(fallbackServicios);

  useEffect(() => {
    fetch("/api/servicios")
      .then((r) => r.json())
      .then((data) => { if (data.length > 0) setServicios(data); })
      .catch(() => {});
  }, []);

  return (
    <section className="py-24 px-6 bg-[#131316] relative" id="solutions">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter uppercase">
              Nuestros <span className="text-[#00eefc]">Servicios</span>
            </h2>
            <div className="h-1 w-24 bg-[#00eefc] shadow-[0_0_10px_rgba(0,238,252,0.5)]" />
          </div>
          <p className="font-body text-[#adaaad] max-w-md">
            Soluciones de ingeniería diseñadas para la escalabilidad masiva y la precisión técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((s) => (
            <div
              key={s.id}
              className="group relative glass-panel p-10 rounded-xl transition-all duration-500 hover:-translate-y-2"
              style={{
                "--hover-shadow": `0 20px 50px ${s.colorAccent}1a`,
              } as React.CSSProperties}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 20px 50px ${s.colorAccent}1a`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "")
              }
            >
              <div
                className="absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center rounded-lg shadow-lg"
                style={{ backgroundColor: s.colorAccent }}
              >
                <span className="material-symbols-outlined text-white">{s.icono}</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-[#fffbfe]">
                {s.nombre}
              </h3>
              <p className="text-[#adaaad] text-sm leading-relaxed mb-6">{s.descripcion}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs font-label uppercase tracking-wider"
                    style={{ color: s.colorAccent }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: s.colorAccent }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
