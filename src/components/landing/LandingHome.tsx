import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ServiciosSection } from "@/components/landing/ServiciosSection";
import { CasosSection } from "@/components/landing/CasosSection";
import { VisionSection } from "@/components/landing/VisionSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";
import { whatsappLink } from "@/lib/site";

export function LandingHome() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServiciosSection />
      <CasosSection />
      <VisionSection />
      <ContactSection />
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href={whatsappLink("Hola! Quiero saber más sobre Complexa IA.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-[20px] flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95 group"
      >
        <span
          className="material-symbols-outlined text-white text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          chat
        </span>
        <div className="absolute right-20 bg-[#19191c] text-[#fffbfe] px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#48474a] text-xs font-bold tracking-widest uppercase">
          WhatsApp Demo
        </div>
      </a>
    </main>
  );
}
