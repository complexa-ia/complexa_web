"use client";

import { useState } from "react";
import { CONTACTO, whatsappLink } from "@/lib/site";

export function ContactSection() {
  const [form, setForm] = useState({ nombre: "", email: "", descripcion: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setForm({ nombre: "", email: "", descripcion: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 px-6 relative" id="contact">
      <div className="max-w-5xl mx-auto glass-panel p-12 rounded-2xl shadow-[0_0_80px_rgba(187,0,252,0.05)] border border-[#df8eff]/10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter uppercase">
            Let&apos;s <span className="text-[#00eefc]">Automate</span> Together
          </h2>
          <p className="font-body text-[#adaaad]">
            Inicie la transformación digital de su organización hoy mismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-[#adaaad] font-bold block">
                Nombre Completo
              </label>
              <input
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-[#262529] border-0 border-b-2 border-[#48474a] focus:border-[#00eefc] focus:outline-none text-[#fffbfe] px-0 py-2 transition-colors font-body"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-[#adaaad] font-bold block">
                Email Corporativo
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="j.doe@company.com"
                className="w-full bg-[#262529] border-0 border-b-2 border-[#48474a] focus:border-[#00eefc] focus:outline-none text-[#fffbfe] px-0 py-2 transition-colors font-body"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-[#adaaad] font-bold block">
                Descripción del Proyecto
              </label>
              <textarea
                required
                rows={4}
                value={form.descripcion}
                onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                placeholder="¿Cómo podemos potenciar su flujo de trabajo?"
                className="w-full bg-[#262529] border-0 border-b-2 border-[#48474a] focus:border-[#00eefc] focus:outline-none text-[#fffbfe] px-0 py-2 transition-colors font-body resize-none"
              />
            </div>

            {status === "ok" && (
              <p className="text-[#00eefc] text-sm font-bold">
                ✓ Mensaje enviado. Te contactamos pronto.
              </p>
            )}
            {status === "error" && (
              <p className="text-[#ff6e84] text-sm font-bold">
                Error al enviar. Intentá de nuevo.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#bb00fc] text-white py-4 font-headline font-bold tracking-widest uppercase hover:shadow-[0_0_30px_rgba(187,0,252,0.4)] transition-all rounded-[20px] disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : "Enviar Protocolo"}
            </button>
          </form>

          <div className="flex flex-col justify-center space-y-12 text-left">
            <div className="space-y-6">
              <h4 className="font-headline text-2xl font-bold">Contacto Directo</h4>
              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACTO.email}`}
                  className="flex items-center gap-4 text-[#adaaad] hover:text-[#00eefc] transition-colors"
                >
                  <span className="material-symbols-outlined text-[#00eefc]">mail</span>
                  <span className="font-body">{CONTACTO.email}</span>
                </a>
                <a
                  href={CONTACTO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#adaaad] hover:text-[#00eefc] transition-colors"
                >
                  <span className="material-symbols-outlined text-[#00eefc]">call</span>
                  <span className="font-body">{CONTACTO.telefono}</span>
                </a>
              </div>
            </div>

            <div className="p-8 bg-[#00eefc]/5 border border-[#00eefc]/20 rounded-xl space-y-4">
              <p className="font-headline font-bold text-[#fffbfe] italic">
                &ldquo;La mejor manera de predecir el futuro es automatizándolo.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00eefc] flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-[#005359]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bolt
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#00eefc]">
                    Respuesta Estimada
                  </div>
                  <div className="text-sm font-body text-[#adaaad]">&lt; 2 Horas</div>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink("Hola! Quiero solicitar una demo de Complexa IA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-[#25D366]/10 border border-[#25D366]/50 py-4 px-6 rounded-[20px] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <span className="material-symbols-outlined">chat</span>
              <span className="font-headline font-bold uppercase tracking-widest">
                Solicitar Demo
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
