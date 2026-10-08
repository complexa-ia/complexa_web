import { CONTACTO } from "@/lib/site";

const links = [
  { label: "Términos y Condiciones", href: "/terminos" },
  { label: "Política de Privacidad", href: "/privacidad" },
];

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-[#bb00fc]/5 bg-[#0e0e10]">
      <div className="flex flex-col items-center gap-6 px-8">
        <div className="flex flex-wrap justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[10px] tracking-widest uppercase text-gray-600 hover:text-[#00eefc] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="font-body text-[10px] tracking-widest uppercase text-gray-500">
          © {new Date().getFullYear()} Complexa IA. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <a href={CONTACTO.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <span className="material-symbols-outlined text-[#ff6b98] text-sm hover:scale-110 transition-transform">
              chat
            </span>
          </a>
          <a href={`mailto:${CONTACTO.email}`} aria-label="Email">
            <span className="material-symbols-outlined text-[#ff6b98] text-sm hover:scale-110 transition-transform">
              mail
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
