"use client";

import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e10]/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:bg-[#0e0e10]/60 light:bg-white/80">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <a href="/" className="flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
          <span className="text-2xl font-black tracking-tighter text-[#bb00fc] drop-shadow-[0_0_8px_rgba(187,0,252,0.4)] font-headline uppercase">
            Complexa IA
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Soluciones", href: "#solutions" },
            { label: "Éxitos", href: "#success" },
            { label: "Visión", href: "#vision" },
            { label: "Consultoría", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-headline tracking-tight uppercase text-sm font-bold text-[#adaaad] hover:text-[#bb00fc] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="text-[#bb00fc] hover:scale-110 transition-transform p-1"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-xl">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <a
            href="#contact"
            className="bg-[#bb00fc] text-white px-6 py-2 font-headline font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(187,0,252,0.4)] rounded-[20px]"
          >
            Get Demo
          </a>
          <a href="/login">
            <span className="material-symbols-outlined text-[#bb00fc] cursor-pointer hover:scale-110 transition-transform">
              terminal
            </span>
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#bb00fc]/10 to-transparent h-[1px] w-full" />
    </nav>
  );
}
