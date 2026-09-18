import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-lix-darker via-lix-dark to-lix-navy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-lix-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-lix-cyan/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-lix-blue/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-transparent to-lix-darker/80" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(94, 200, 245, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(94, 200, 245, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lix-navy/60 backdrop-blur-sm border border-white/5 rounded-full mb-6 md:mb-8">
              <span className="w-2 h-2 bg-lix-blue rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-lix-blue tracking-widest uppercase">
                Enterprise Digital Architecture & SaaS Matrix
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5 md:mb-7">
              <span className="text-white">Transformasi Digital </span>
              <span className="text-lix-blue">Skala Enterprise,</span>
              <span className="text-white"> Bukan Sekadar Software Jadi.</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-lix-slate leading-relaxed mb-8 md:mb-10 max-w-xl">
              LixSpace merancang arsitektur sistem kustom dari nol, serta menghadirkan ekosistem
              pintar <span className="text-white font-semibold">Next-Gen POS</span> yang tersinkronisasi
              otomatis dengan <span className="text-white font-semibold">Real-Time Multi-Warehouse
              Inventory</span> dan <span className="text-white font-semibold">Enterprise HRIS</span>{' '}
              berbasis data performa terintegrasi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-14">
              <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lix-blue to-lix-cyan text-lix-darker font-bold px-7 py-4 rounded-2xl hover:shadow-2xl hover:shadow-lix-blue/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-base md:text-lg">
                Jadwalkan Diskusi Arsitektur
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold px-7 py-4 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-base md:text-lg">
                Eksplorasi Ekosistem Produk
                <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-lix-blue/10 border border-lix-blue/20">
                  <svg className="w-5 h-5 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-lix-gray font-mono">99.9% Uptime Architecture</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-lix-blue/10 border border-lix-blue/20">
                  <svg className="w-5 h-5 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-lix-gray font-mono">Real-Time Sync Engine</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-lix-blue/10 border border-lix-blue/20">
                  <svg className="w-5 h-5 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3m9-4a4 4 0 014 4m0 0a4 4 0 01-4 4M6 8a4 4 0 00-4 4m0 0a4 4 0 004 4" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-lix-gray font-mono">Zero Vendor Lock-in Codebase</span>
              </div>
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="absolute -inset-4 bg-gradient-to-r from-lix-blue/20 to-lix-cyan/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative animate-float">
              <div className="bg-lix-navy/70 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 md:p-6 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between px-4 py-3 bg-lix-darker/70 rounded-2xl mb-5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-lix-blue/80" />
                  </div>
                  <div className="font-mono text-xs text-lix-slate hidden sm:block">lixspace-cluster-telemetry.sys</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-emerald-400 font-mono">ONLINE</span>
                  </div>
                </div>

                <div className="bg-lix-darker/70 rounded-2xl p-5 mb-5 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-lix-slate font-mono">Omni-Channel Sync Latency</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-lix-blue font-mono">14ms</span>
                      <span className="text-xs text-lix-slate font-mono">(Sub-second)</span>
                    </div>
                  </div>
                  <div className="relative h-28 flex items-end gap-1">
                    <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#5EC8F5" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#5EC8F5" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,70 Q40,65 80,62 T160,55 T240,40 T320,48 T400,35 L400,100 L0,100 Z"
                        fill="url(#chartGrad)"
                      />
                      <path
                        d="M0,70 Q40,65 80,62 T160,55 T240,40 T320,48 T400,35"
                        fill="none"
                        stroke="#5EC8F5"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_rgba(94,200,245,0.6)]"
                      />
                      {[
                        { x: 50, y: 68 },
                        { x: 120, y: 60 },
                        { x: 200, y: 48 },
                        { x: 280, y: 42 },
                        { x: 360, y: 38 },
                      ].map((dot, i) => (
                        <circle key={i} cx={dot.x} cy={dot.y} r="4" fill="#5EC8F5" className="drop-shadow-[0_0_6px_rgba(94,200,245,0.8)]" />
                      ))}
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-lix-darker/70 rounded-2xl p-5 border border-white/5">
                    <div className="text-xs font-medium text-lix-slate font-mono mb-2">Active Inventory Nodes</div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl md:text-4xl font-extrabold text-white font-mono">1,480</span>
                      <span className="text-sm font-semibold text-lix-blue">Hubs</span>
                    </div>
                    <div className="text-xs text-lix-blue font-mono opacity-90">Multi-Warehouse Sync Active</div>
                  </div>
                  <div className="bg-lix-darker/70 rounded-2xl p-5 border border-white/5">
                    <div className="text-xs font-medium text-lix-slate font-mono mb-2">HRIS Automated Payroll</div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl md:text-4xl font-extrabold text-white font-mono">99.98%</span>
                      <span className="text-sm font-semibold text-lix-blue">Precision</span>
                    </div>
                    <div className="text-xs text-lix-blue font-mono opacity-90">PPh 21 & BPJS Validated</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4 py-3.5 bg-lix-darker/70 rounded-2xl border border-white/5">
                  <span className="text-lix-cyan font-mono text-sm font-bold">$</span>
                  <div className="flex-1 font-mono text-xs md:text-sm text-lix-gray">
                    cluster.reconcile(ledger_hash): verified (0 errors)
                  </div>
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
