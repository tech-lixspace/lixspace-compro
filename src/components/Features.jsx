import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: 'Full Source Code Ownership',
      description: 'Anda memegang kendali 100% atas IP perangkat lunak, repositori code Git, database, dan infrastruktur cloud. Tanpa biaya lisensi terselubung per seat.',
      highlight: 'Bebas Vendor Lock-in',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'High Scalability & Microservices',
      description: 'Desain database terdistribusi, event-driven queue (Kafka/Redis), dan microservices terisolasi mencegah bottleneck saat ekspansi cabang atau lonjakan traffic promo.',
      highlight: 'High-Concurrency Ready',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: 'Business-First Strategic Logic',
      description: 'Kami tidak hanya memprogram fitur; Principal Architect kami mendalami supply-chain margin, operational leakage, dan otomasi workflow bisnis nyata Anda.',
      highlight: 'Solusi Berdampak Finansial',
    },
  ];

  return (
    <section id="solusi" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-lix-darker to-lix-dark">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-lix-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-lix-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lix-navy/40 border border-white/5 rounded-full mb-5">
              <span className="text-xs md:text-sm font-semibold text-lix-blue tracking-[0.2em] uppercase">
                Engineering Rigor & Strategy
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
              Dari Custom Engineering Hingga Solusi Turnkey Siap Skala
            </h2>
          </div>
          <div className="lg:col-span-2 flex lg:items-end">
            <p className="text-base md:text-lg text-lix-slate leading-relaxed">
              Kami menolak kompromi template kaku atau software monolith lambat. Setiap arsitektur dibangun untuk skalabilitas jutaan transaksi harian.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-lix-navy/50 backdrop-blur-sm border border-white/5 rounded-3xl p-7 md:p-8 hover:border-lix-blue/20 hover:bg-lix-navy/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lix-blue/5"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-lix-blue/10 border border-lix-blue/15 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-lix-slate leading-relaxed mb-6 text-sm md:text-base">
                {feature.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-lix-blue font-semibold text-sm md:text-base">
                  {feature.highlight}
                </span>
                <svg className="w-5 h-5 text-lix-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
