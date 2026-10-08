export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#bb00fc]/5 via-transparent to-[#00eefc]/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#bb00fc]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00eefc]/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0e10]/50 to-[#0e0e10]" />
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-8">
        <span className="font-headline text-[#00deec] tracking-[0.3em] uppercase text-xs font-bold pulse-glow block">
          System Online: Protocol Synthetic Pulse
        </span>

        <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-[#fffbfe]">
          El Futuro no se Espera, se Construye:
          <br />
          <span className="text-[#bb00fc] italic neon-text-shadow">
            Su Visión, Nuestra Ingeniería.
          </span>
        </h1>

        <div className="flex flex-col items-center gap-8">
          <div className="glass-panel w-full max-w-xl p-4 font-mono text-sm text-[#00deec] rounded-lg shadow-2xl border border-[#df8eff]/20">
            <div className="flex gap-2 mb-3 border-b border-[#262529] pb-2">
              <div className="w-3 h-3 rounded-full bg-[#d73357]" />
              <div className="w-3 h-3 rounded-full bg-[#00eefc]" />
              <div className="w-3 h-3 rounded-full bg-[#bb00fc]" />
            </div>
            <div className="space-y-1">
              <p className="flex gap-2">
                <span>&gt;</span>
                <span className="text-[#adaaad] italic">Initializing automation sequence...</span>
              </p>
              <p className="flex gap-2">
                <span>&gt;</span>
                <span>Complexa Core v1.0.4 - Status: Active</span>
              </p>
              <p className="flex gap-2">
                <span>&gt;</span>
                <span className="text-[#bb00fc]">Optimization at 98.7%</span>
              </p>
              <p className="flex gap-2">
                <span>&gt;</span>
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          <p className="font-body text-[#adaaad] max-w-2xl text-lg leading-relaxed">
            Desbloqueamos el potencial latente de su empresa mediante arquitecturas
            de IA personalizadas y flujos de trabajo autónomos que redefinen la
            eficiencia operativa.
          </p>
        </div>
      </div>
    </section>
  );
}
