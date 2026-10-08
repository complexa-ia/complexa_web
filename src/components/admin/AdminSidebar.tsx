"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const links = [
  { href: "/admin", label: "Dashboard", icon: "dashboard" },
  { href: "/admin/casos", label: "Casos de Éxito", icon: "emoji_events" },
  { href: "/admin/servicios", label: "Servicios", icon: "settings_suggest" },
  { href: "/admin/contactos", label: "Contactos", icon: "mail" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#131316] border-r border-[#bb00fc]/10 flex flex-col">
      <div className="p-6 border-b border-[#bb00fc]/10">
        <a href="/" className="text-lg font-black tracking-tighter text-[#bb00fc] font-headline uppercase">
          Complexa IA
        </a>
        <p className="text-[#767578] text-xs mt-1 font-body">Admin Panel</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-body text-sm font-medium ${
                active
                  ? "bg-[#bb00fc]/15 text-[#bb00fc] border border-[#bb00fc]/20"
                  : "text-[#adaaad] hover:bg-[#19191c] hover:text-[#fffbfe]"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#bb00fc]/10">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#adaaad] hover:text-[#fffbfe] hover:bg-[#19191c] transition-all text-sm font-medium font-body mb-1"
        >
          <span className="material-symbols-outlined text-[20px]">open_in_new</span>
          Ver sitio
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#ff6e84] hover:bg-[#d73357]/10 transition-all text-sm font-medium font-body"
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
