import React from 'react';

const Stats = () => {
  const stats = [
    {
      value: '99.99%',
      label: 'Arsitektur SLA Guarantee',
      accent: 'text-lix-cyan',
      glow: 'from-lix-cyan/20',
    },
    {
      value: '< 50ms',
      label: 'Real-Time Core Latency',
      accent: 'text-lix-blue',
      glow: 'from-lix-blue/20',
    },
    {
      value: '100%',
      label: 'IP & Source Code Hak Milik',
      accent: 'text-white',
      glow: 'from-white/10',
    },
    {
      value: '0 Rp',
      label: 'Biaya Lisensi Tersembunyi',
      accent: 'text-lix-cyan',
      glow: 'from-lix-cyan/20',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-lix-darker to-lix-dark">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lix-blue/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-lix-navy/30 backdrop-blur-sm border border-white/5 rounded-3xl p-6 md:p-8 lg:p-10 hover:border-lix-blue/15 hover:bg-lix-navy/50 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${stat.glow} to-transparent rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
              <div className="relative text-center">
                <div className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3 md:mb-4 font-mono ${stat.accent}`}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base lg:text-lg text-lix-slate leading-snug font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
