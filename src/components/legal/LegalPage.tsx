import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

type Seccion = { titulo: string; parrafos: string[] };

export function LegalPage({
  titulo,
  actualizado,
  secciones,
}: {
  titulo: string;
  actualizado: string;
  secciones: Seccion[];
}) {
  return (
    <main>
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 pt-36 pb-24 space-y-10">
        <header className="space-y-3">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase text-[#fffbfe]">
            {titulo}
          </h1>
          <p className="font-body text-sm text-[#767578]">Última actualización: {actualizado}</p>
        </header>
        {secciones.map((s, i) => (
          <section key={s.titulo} className="space-y-3">
            <h2 className="font-headline text-xl font-bold text-[#fffbfe]">
              {i + 1}. {s.titulo}
            </h2>
            {s.parrafos.map((p) => (
              <p key={p} className="font-body text-[#adaaad] leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>
      <Footer />
    </main>
  );
}
