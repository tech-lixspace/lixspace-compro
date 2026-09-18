import React from 'react';

const ProductFlagship = () => {
  const features = [
    {
      icon: (
        <svg className="w-5 h-5 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Sub-Second Multi-Outlet Sync',
      description: 'Stok toko offline, gudang transit, dan marketplace online terpotong seketika tanpa double booking.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
      title: 'Predictive Replenishment',
      description: 'Algoritma menghitung rata-rata lead-time supplier dan memicu Purchase Order (PO) otomatis.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
      title: 'COGS / HPP Akurat per Batch',
      description: 'Kalkulasi FIFO & Average Cost otomatis menyesuaikan harga bahan baku yang fluktuatif.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: 'Fraud Prevention & Void Audit',
      description: 'Log audit tanpa cela untuk setiap void, diskon manual, pembukaan laci kasir, dan integrasi KDS.',
    },
  ];

  return (
    <section id="pos" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-lix-dark to-lix-darker">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-lix-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-lix-cyan/5 rounded-full blur-3xl" />
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
              Next-Gen Software Ecosystem
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Produk Flagship Siap Pakai & Terintegrasi Mendalam
          </h2>
          <p className="text-base md:text-lg text-lix-slate leading-relaxed max-w-3xl mx-auto">
            Dua fondasi sistem operasional perusahaan mutakhir: platform kasir-gudang berkecepatan tinggi dan manajemen talenta prediktif.
          </p>
        </div>

        <div className="relative bg-lix-navy/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30">
          <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-lix-blue/10 via-transparent to-lix-cyan/10 pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 p-6 md:p-10 lg:p-14">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-lix-blue/15 border border-lix-blue/25 rounded-full text-lix-blue text-sm font-semibold">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Flagship Retail & F&B Engine
                </span>
                <span className="inline-flex items-center px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-lix-gray text-sm font-medium font-mono">
                  Offline-First Sync
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
                OmniPOS & Smart Inventory Ecosystem
              </h3>

              <p className="text-base md:text-lg text-lix-slate leading-relaxed mb-8">
                Bukan sekadar kasir pencatat struk kertas, melainkan <span className="text-white font-semibold">otak operasional terpusat</span> untuk multi-cabang, outlet F&B, dan jaringan retail modern. Mengeliminasi selisih stok dengan sinkronisasi sub-detik dan penentuan COGS/HPP presisi per batch kedatangan.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-lix-blue/10 border border-lix-blue/15 rounded-xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="text-sm md:text-base font-semibold text-white mb-1">
                        {feature.title}
                      </div>
                      <p className="text-xs md:text-sm text-lix-slate leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-lix-blue to-lix-cyan text-lix-darker font-bold px-7 py-3.5 rounded-xl hover:shadow-lg hover:shadow-lix-blue/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm md:text-base">
                  Request Demo OmniPOS
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <div className="flex items-center gap-2.5 text-lix-slate">
                  <svg className="w-5 h-5 text-lix-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                  <span className="text-sm font-mono font-medium">Tahan Putus Internet (100% Offline-Safe)</span>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 flex items-center justify-center">
              <div className="absolute -inset-6 bg-gradient-to-br from-lix-blue/15 to-lix-cyan/10 rounded-[2.5rem] blur-2xl opacity-60" />
              <div className="relative w-full max-w-lg">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-float">
                  <div className="bg-gradient-to-br from-lix-navy to-lix-darker aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 p-3 sm:p-4">
                      <div className="flex items-center justify-between px-3 py-2 bg-lix-darker/80 backdrop-blur-sm rounded-xl border border-white/5 mb-3 sm:mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-400/70" />
                          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                          <div className="w-2 h-2 rounded-full bg-lix-blue/70" />
                        </div>
                        <div className="font-mono text-[10px] sm:text-xs text-lix-slate truncate px-2">
                          LixSpace Dashboard
                        </div>
                        <div className="w-10" />
                      </div>

                      <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
                        {[
                          { label: 'Transaksi', value: '$2.485M' },
                          { label: 'Cabang', value: '14' },
                          { label: 'SKU Aktif', value: '96' },
                          { label: 'Revenue', value: '$87M' },
                        ].map((stat, i) => (
                          <div key={i} className="bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5">
                            <div className="text-[9px] sm:text-[10px] text-lix-slate font-mono truncate mb-0.5">{stat.label}</div>
                            <div className={`${i === 0 || i === 3 ? 'text-lix-cyan' : 'text-white'} text-xs sm:text-sm font-bold font-mono`}>{stat.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-3 sm:mb-4 h-24 sm:h-28">
                        <div className="col-span-3 bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5 flex flex-col">
                          <div className="text-[9px] sm:text-[10px] text-lix-slate font-mono mb-1.5 sm:mb-2">Revenue by Warehouse</div>
                          <div className="flex-1 flex items-end gap-1 sm:gap-1.5">
                            {[70, 55, 90, 65, 85, 50, 78].map((h, i) => (
                              <div key={i} className="flex-1 bg-gradient-to-t from-lix-blue to-lix-cyan rounded-sm opacity-80" style={{ height: `${h}%` }} />
                            ))}
                          </div>
                        </div>
                        <div className="col-span-2 bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5 flex flex-col justify-between">
                          <div className="text-[9px] sm:text-[10px] text-lix-slate font-mono">Top Selling</div>
                          <div className="space-y-1">
                            {[
                              { n: 'SKU #031', h: 82 },
                              { n: 'SKU #107', h: 64 },
                              { n: 'SKU #042', h: 46 },
                            ].map((it, i) => (
                              <div key={i} className="flex items-center gap-1.5">
                                <div className="h-1.5 bg-lix-blue/80 rounded-full" style={{ width: `${it.h}%` }} />
                                <span className="text-[8px] sm:text-[9px] text-lix-slate font-mono flex-1">{it.n}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-2 sm:gap-3 h-20 sm:h-24">
                        <div className="col-span-3 bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5 flex flex-col">
                          <div className="text-[9px] sm:text-[10px] text-lix-slate font-mono mb-1 sm:mb-1.5">Revenue (7-day)</div>
                          <div className="flex-1 relative">
                            <svg viewBox="0 0 300 70" className="w-full h-full" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="revGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#5CE1E6" stopOpacity="0.3" />
                                  <stop offset="100%" stopColor="#5CE1E6" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              <path d="M0,55 L50,50 L100,30 L150,45 L200,25 L250,35 L300,18 L300,70 L0,70 Z" fill="url(#revGrad)" />
                              <path d="M0,55 L50,50 L100,30 L150,45 L200,25 L250,35 L300,18" fill="none" stroke="#5CE1E6" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </div>
                        </div>
                        <div className="col-span-2 bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5">
                          <div className="text-[9px] sm:text-[10px] text-lix-slate font-mono mb-1 sm:mb-1.5">Warehouse Map</div>
                          <div className="relative h-[46px] sm:h-[54px] rounded bg-lix-navy/50 border border-lix-blue/10 overflow-hidden">
                            <div className="absolute inset-0 opacity-40" style={{
                              backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(94,200,245,0.4) 1px, transparent 1px), radial-gradient(circle at 65% 60%, rgba(94,200,245,0.4) 1px, transparent 1px), radial-gradient(circle at 80% 30%, rgba(94,200,245,0.4) 1px, transparent 1px)',
                              backgroundSize: '12px 12px'
                            }} />
                            {[
                              { l: '20%', t: '25%' },
                              { l: '45%', t: '55%' },
                              { l: '70%', t: '35%' },
                              { l: '85%', t: '65%' },
                            ].map((p, i) => (
                              <div key={i} className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 bg-lix-cyan rounded-full shadow-[0_0_6px_rgba(92,225,230,0.8)] animate-pulse" style={{ left: p.l, top: p.t }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 w-[90%] sm:w-[95%]">
                  <div className="flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3 bg-lix-darker/95 backdrop-blur-xl border border-lix-blue/20 rounded-2xl shadow-2xl shadow-black/40">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-pulse flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                      <span className="text-xs sm:text-sm text-white font-semibold truncate">Warehouse Hub Jakarta Timur</span>
                    </div>
                    <div className="flex items-baseline gap-1 flex-shrink-0">
                      <span className="text-lix-cyan font-bold font-mono text-xs sm:text-sm">In-Stock: 99.4%</span>
                      <span className="text-lix-slate text-[10px] sm:text-xs font-mono hidden sm:inline">SLA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFlagship;
