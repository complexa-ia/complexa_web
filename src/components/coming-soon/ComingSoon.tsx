import { Footer } from "@/components/landing/Footer";
import { CONTACTO, whatsappLink } from "@/lib/site";

const areas = [
  {
    icono: "code",
    color: "#bb00fc",
    nombre: "Software a Medida",
    texto: "Sistemas pensados para la forma de trabajar de cada empresa.",
  },
  {
    icono: "settings_suggest",
    color: "#00eefc",
    nombre: "Automatización de Procesos",
    texto: "Flujos que conectan sus herramientas y eliminan la carga manual.",
  },
  {
    icono: "psychology",
    color: "#ff6b98",
    nombre: "Consultoría en IA",
    texto: "Elegimos y configuramos la IA adecuada para cada problema.",
  },
  {
    icono: "security",
    color: "#d73357",
    nombre: "Ciberseguridad",
    texto: "Buenas prácticas para que la automatización no abra puertas.",
  },
];

export function ComingSoon() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          <span className="text-2xl font-black tracking-tighter text-[#bb00fc] drop-shadow-[0_0_8px_rgba(187,0,252,0.4)] font-headline uppercase">
            Complexa IA
          </span>
        </div>
        <div className="bg-gradient-to-b from-[#bb00fc]/10 to-transparent h-[1px] w-full" />
      </header>

      <section className="relative flex-1 flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-[#bb00fc]/5 via-transparent to-[#00eefc]/5" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#bb00fc]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00eefc]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl w-full text-center space-y-10">
          <span className="font-headline text-[#00deec] tracking-[0.3em] uppercase text-xs font-bold pulse-glow block">
            Próximamente
          </span>

          <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-[#fffbfe]">
            Estamos construyendo
            <br />
            <span className="text-[#bb00fc] italic neon-text-shadow">algo a su medida.</span>
          </h1>

          <div className="glass-panel w-full max-w-xl mx-auto p-4 font-mono text-sm text-[#00deec] rounded-lg shadow-2xl border border-[#df8eff]/20 text-left">
            <div className="flex gap-2 mb-3 border-b border-[#262529] pb-2">
              <div className="w-3 h-3 rounded-full bg-[#d73357]" />
              <div className="w-3 h-3 rounded-full bg-[#00eefc]" />
              <div className="w-3 h-3 rounded-full bg-[#bb00fc]" />
            </div>
            <div className="space-y-1">
              <p className="flex gap-2">
                <span>&gt;</span>
                <span className="text-[#adaaad] italic">Inicializando complexa.com.ar...</span>
              </p>
              <p className="flex gap-2">
                <span>&gt;</span>
                <span>Conectando IA + automatizaciones</span>
              </p>
              <p className="flex gap-2">
                <span>&gt;</span>
                <span className="text-[#bb00fc]">Estado: lanzamiento en preparación</span>
              </p>
              <p className="flex gap-2">
                <span>&gt;</span>
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          <p className="font-body text-[#adaaad] max-w-2xl mx-auto text-lg leading-relaxed">
            Complexa IA libera a las empresas de las tareas repetitivas. Configuramos
            las herramientas de inteligencia artificial que cada negocio elija y
            construimos los flujos que las conectan con su operación diaria:
            atención al cliente, ventas, facturación y reportes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {areas.map((a) => (
              <div key={a.nombre} className="glass-panel rounded-xl p-6 space-y-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: a.color }}
                >
                  <span className="material-symbols-outlined text-white text-[20px]">{a.icono}</span>
                </div>
                <h2 className="font-headline font-bold text-[#fffbfe]">{a.nombre}</h2>
                <p className="font-body text-sm text-[#adaaad] leading-relaxed">{a.texto}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <p className="font-headline text-sm uppercase tracking-widest text-[#adaaad]">
              Mientras tanto, hablemos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink("Hola! Vi la web de Complexa IA y quiero hacer una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/50 py-3 px-6 rounded-[20px] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <span className="material-symbols-outlined">chat</span>
                <span className="font-headline font-bold uppercase tracking-widest text-sm">WhatsApp</span>
              </a>
              <a
                href={`mailto:${CONTACTO.email}`}
                className="flex items-center justify-center gap-3 bg-[#bb00fc] text-white py-3 px-6 rounded-[20px] hover:shadow-[0_0_30px_rgba(187,0,252,0.4)] transition-all duration-300"
              >
                <span className="material-symbols-outlined">mail</span>
                <span className="font-headline font-bold tracking-widest text-sm">{CONTACTO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
