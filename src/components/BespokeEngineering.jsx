import React from 'react';

const BespokeEngineering = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      category: 'Web Application Enterprise',
      title: 'Portal B2B, Custom ERP & Engine Finansial',
      description: 'Arsitektur web mission-critical dengan Next.js, Go/Node.js, dan database PostgreSQL/CockroachDB. Mendukung logic transaksi kompleks, reconciliation otomatis, serta integrasi gateway perbankan.',
      points: [
        'Microfrontends & Microservices',
        'High Concurrent User Capacity',
        'Role-Based Access Control (RBAC)',
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      category: 'Mobile Application (iOS / Android)',
      title: 'Aplikasi Konsumen & Field Ops Fluid',
      description: 'Pengembangan aplikasi mobile native (Swift / Kotlin) maupun modern cross-platform (Flutter). Dirancang responsif 60 FPS, sinkronisasi offline-first, dan push notification engine real-time.',
      points: [
        'Offline Cache & Local DB Sync',
        'Biometric Auth & Secure Enclave',
        'Geotagging & IoT Hardware Hook',
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      category: 'Design System & IA',
      title: 'UI/UX Berorientasi Efisiensi & Konversi',
      description: 'Bukan sekadar visual estetis, melainkan perancangan alur kerja yang memangkas waktu kerja staf, mengurangi human error operator hingga 70%, dan meningkatkan konversi user secara signifikan.',
      points: [
        'Scalable Atomic Design Tokens',
        'User Journey Stress Testing',
        'Interactive Figma High-Fidelity Specs',
      ],
    },
  ];

  return (
    <section id="jasa" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-lix-dark to-lix-navy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-lix-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[450px] h-[450px] bg-lix-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lix-navy/40 border border-white/5 rounded-full mb-5">
              <span className="text-xs md:text-sm font-semibold text-lix-blue tracking-[0.2em] uppercase">
                Bespoke Software Engineering
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
              Layanan Rekayasa Sistem Kustom <span className="text-lix-blue">(From Scratch)</span>
            </h2>
          </div>
          <div className="lg:col-span-2 flex lg:items-end">
            <p className="text-base md:text-lg text-lix-slate leading-relaxed">
              Membangun solusi digital unik dari kanvas kosong. Dirancang modular, performa tinggi, dan berorientasi pada kepemilikan source code mutlak.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-lix-navy/50 backdrop-blur-sm border border-white/5 rounded-3xl p-7 md:p-8 hover:border-lix-blue/20 hover:bg-lix-navy/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lix-blue/5 flex flex-col"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-lix-blue/10 border border-lix-blue/15 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="text-xs md:text-sm font-semibold text-lix-blue tracking-widest uppercase mb-3 font-mono">
                {service.category}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-lix-slate leading-relaxed mb-6 text-sm md:text-base flex-1">
                {service.description}
              </p>
              <div className="border-t border-white/5 pt-6 space-y-2.5">
                {service.points.map((point, pIndex) => (
                  <div key={pIndex} className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-lix-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                    <span className="text-sm md:text-base text-lix-gray font-mono">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BespokeEngineering;
