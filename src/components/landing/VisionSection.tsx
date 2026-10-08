import Image from "next/image";

export function VisionSection() {
  return (
    <section className="py-24 bg-[#0e0e10] relative overflow-hidden" id="vision">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#bb00fc]/20 blur-[100px]" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00eefc]/20 blur-[100px]" />
          <Image
            src="/vision-ia.png"
            alt="Perfil humano formado por circuitos con un punto de luz en la mente"
            width={512}
            height={512}
            className="relative w-full h-auto rounded-2xl border border-white/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="space-y-8">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight">
            Cerrando la brecha entre{" "}
            <span className="text-[#bb00fc] italic">complejidad</span> y{" "}
            <span className="text-[#00eefc] italic">simplicidad</span>.
          </h2>
          <div className="space-y-4 font-body text-[#adaaad] text-lg text-left">
            <p>
              En Complexa IA creemos que el tiempo de un empresario vale demasiado
              para gastarlo en tareas que una máquina puede resolver mejor. Cargar
              datos, responder siempre las mismas consultas, armar reportes,
              perseguir facturas: todo eso tiene solución.
            </p>
            <p>
              Nuestro compromiso es simple: detectar cada proceso repetitivo y
              tedioso del negocio y automatizarlo de punta a punta, con tecnología
              que se adapta a la empresa y no al revés. Para que el empresario se
              enfoque en hacer crecer su negocio; del resto nos ocupamos nosotros.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-8 text-left">
            <div>
              <div className="text-2xl font-headline font-bold text-[#fffbfe]">De punta a punta</div>
              <div className="text-xs uppercase tracking-widest text-[#bb00fc] font-bold">
                Automatización completa
              </div>
            </div>
            <div>
              <div className="text-2xl font-headline font-bold text-[#fffbfe]">A medida</div>
              <div className="text-xs uppercase tracking-widest text-[#00eefc] font-bold">
                De cada negocio
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
