import Link from "next/link";

export function PrivacidadNota({ className = "" }: { className?: string }) {
  return (
    <div
      className={`glass-panel rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4 text-left border border-[#00eefc]/20 ${className}`}
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#00eefc]/10 border border-[#00eefc]/40 flex-shrink-0">
        <span className="material-symbols-outlined text-[#00eefc] text-[20px]">shield_lock</span>
      </div>
      <div className="space-y-2">
        <h2 className="font-headline font-bold text-[#fffbfe]">Privacidad desde el diseño</h2>
        <p className="font-body text-sm text-[#adaaad] leading-relaxed">
          Diseñamos nuestros sistemas pensando en la privacidad desde el inicio: pedimos solo los
          datos necesarios y limitamos quién puede verlos. Cada desarrollo está pensado para que su
          empresa pueda cumplir con la{" "}
          <Link href="/privacidad" className="text-[#00deec] hover:underline">
            Ley 25.326 de Protección de los Datos Personales
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
