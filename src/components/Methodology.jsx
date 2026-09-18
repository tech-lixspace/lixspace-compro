import React from 'react';

const Methodology = () => {
  const phases = [
    {
      num: 1,
      label: 'PHASE 01',
      title: 'Discovery & Blueprint',
      description: 'Bedah kebutuhan bisnis, perancangan schema database, perumusan SLA, dan diagram alur microservices.',
      output: 'Technical Blueprint Docs',
    },
    {
      num: 2,
      label: 'PHASE 02',
      title: 'High-Fidelity Prototyping',
      description: 'Perancangan antarmuka pengguna interaktif, design system tokenized, serta usability validation bersama tim internal Anda.',
      output: 'Clickable Prototype',
    },
    {
      num: 3,
      label: 'PHASE 03',
      title: 'Agile Sprint & QA',
      description: 'Pengembangan modular berbasis 2-week sprint, continuous integration (CI/CD), automated regression test, dan security audit.',
      output: 'Production-Ready Code',
    },
    {
      num: 4,
      label: 'PHASE 04',
      title: 'Deployment & SLA',
      description: 'Roll-out ke cloud private/public (AWS/GCP), handover repository & dokumentasi API lengkap, didukung monitoring 24/7.',
      output: 'Live High-Uptime System',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-lix-navy to-lix-darker">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lix-blue/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(94, 200, 245, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(94, 200, 245, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lix-navy/40 border border-white/5 rounded-full mb-5">
            <span className="text-xs md:text-sm font-semibold text-lix-blue tracking-[0.2em] uppercase">
              Engineering Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Bagaimana Kami Mewujudkan Sistem Anda
          </h2>
          <p className="text-base md:text-lg text-lix-slate leading-relaxed max-w-3xl mx-auto">
            Siklus rekayasa transparan, terukur, dan disiplin tinggi dari konsepsi arsitektur hingga deployment cloud production.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-px bg-gradient-to-r from-lix-blue/0 via-lix-blue/30 to-lix-blue/0 pointer-events-none" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="group relative bg-lix-navy/50 backdrop-blur-sm border border-white/5 rounded-3xl p-7 md:p-8 hover:border-lix-blue/20 hover:bg-lix-navy/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lix-blue/5 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs md:text-sm font-semibold text-lix-blue tracking-[0.18em] uppercase font-mono">
                    {phase.label}
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center bg-lix-blue/10 border border-lix-blue/20 rounded-full group-hover:bg-lix-blue/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <span className="text-sm md:text-base font-bold text-lix-blue">{phase.num}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                  {phase.title}
                </h3>
                <p className="text-lix-slate leading-relaxed mb-6 text-sm md:text-base flex-1">
                  {phase.description}
                </p>

                <div className="pt-5 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm text-lix-gray font-mono font-semibold">Output:</span>
                    <span className="text-xs md:text-sm text-lix-cyan font-mono">{phase.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
