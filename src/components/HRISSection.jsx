import React from 'react';

const HRISSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-5 h-5 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      title: 'Geofencing & Face Biometric',
      description: 'Absensi berbasis pengenalan wajah anti-spoofing (foto/video palsu) dengan akurasi radius GPS kantor.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18M12 6v.75m0 3v.75m0 3v.75m0 3V18M7.5 6v.75m0 3v.75m0 3v.75m0 3V18M4.5 4.5h15a1.5 1.5 0 011.5 1.5V18a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 18V6a1.5 1.5 0 011.5-1.5z" />
        </svg>
      ),
      title: 'Auto Payroll & Slip Otomatis',
      description: 'Hitung lembur, potongan telat, tunjangan, dan PPh 21 sekali klik dengan slip gaji terenkripsi ke WhatsApp/Email.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
      title: 'Burnout & Sentiment Metric',
      description: 'Algoritma mendeteksi ritme lembur ekstrem dan perubahan kepuasan kerja sebelum menjadi turnover talenta.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M2.25 12c0-1.268.14-2.503.402-3.697a18.039 18.039 0 014.39-6.37 18.003 18.003 0 019.545 0c.82.932 1.503 1.979 2.035 3.104A18.05 18.05 0 0121.75 12a18.05 18.05 0 01-.403 3.697 18.003 18.003 0 01-2.035 3.104 18.003 18.003 0 01-9.545 0 18.039 18.039 0 01-4.39-6.37A18.05 18.05 0 012.25 12z" />
        </svg>
      ),
      title: 'Self-Service Bot Approval',
      description: 'Pengajuan cuti, sakit, dan reimbursement disetujui langsung oleh atasan lewat integrasi chat bot.',
    },
  ];

  return (
    <section id="hris" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-lix-darker to-lix-dark">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-lix-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lix-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-lix-navy/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30">
          <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-lix-cyan/10 via-transparent to-lix-blue/10 pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 p-6 md:p-10 lg:p-14">
            <div className="relative order-1 lg:order-1 flex items-center justify-center">
              <div className="absolute -inset-6 bg-gradient-to-br from-lix-cyan/15 to-lix-blue/10 rounded-[2.5rem] blur-2xl opacity-60" />
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
                          HR Command Center | LixSpace
                        </div>
                        <div className="w-16 flex justify-end">
                          <div className="w-5 h-5 rounded-full bg-lix-navy border border-white/10" />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5">
                          <div className="text-[9px] sm:text-[10px] text-lix-slate font-mono mb-1">Turnover Risk</div>
                          <div className="text-sm sm:text-lg font-bold text-emerald-400 font-mono">7.8%</div>
                          <div className="mt-1 h-1.5 bg-lix-navy rounded-full overflow-hidden">
                            <div className="h-full w-[22%] bg-emerald-400 rounded-full" />
                          </div>
                        </div>
                        <div className="bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5">
                          <div className="text-[9px] sm:text-[10px] text-lix-slate font-mono mb-1">HR Efficiency</div>
                          <div className="text-sm sm:text-lg font-bold text-lix-cyan font-mono">93%</div>
                          <div className="mt-1 h-1.5 bg-lix-navy rounded-full overflow-hidden">
                            <div className="h-full w-[93%] bg-lix-cyan rounded-full" />
                          </div>
                        </div>
                        <div className="bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5">
                          <div className="text-[9px] sm:text-[10px] text-lix-slate font-mono mb-1">Overtime Risk</div>
                          <div className="text-sm sm:text-lg font-bold text-orange-400 font-mono">47%</div>
                          <div className="mt-1 h-1.5 bg-lix-navy rounded-full overflow-hidden">
                            <div className="h-full w-[47%] bg-orange-400 rounded-full" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="col-span-2 bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5">
                          <svg viewBox="0 0 200 90" className="w-full h-14 sm:h-16" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="hrGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#5CE1E6" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#5CE1E6" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            <path d="M0,70 Q30,60 60,55 T120,40 T180,50 L200,48 L200,90 L0,90 Z" fill="url(#hrGrad)" />
                            <path d="M0,70 Q30,60 60,55 T120,40 T180,50 L200,48" fill="none" stroke="#5CE1E6" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M0,60 Q40,50 70,65 T140,58 T200,62" fill="none" stroke="#5EC8F5" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
                          </svg>
                        </div>
                        <div className="col-span-3 bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5">
                          <div className="text-[9px] sm:text-[10px] text-lix-slate font-mono mb-1.5 sm:mb-2">Dynamic Roster Scheduling</div>
                          <div className="space-y-1">
                            {[
                              { t: '06:00 - 14', c: 'bg-lix-cyan/80', d: 'Morning Shift' },
                              { t: '14:00 - 22', c: 'bg-orange-400/80', d: 'Evening Shift' },
                              { t: '22:00 - 06', c: 'bg-lix-blue/80', d: 'Night Shift' },
                            ].map((s, i) => (
                              <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                                <div className={`w-1 sm:w-1.5 h-4 sm:h-5 rounded-sm ${s.c}`} />
                                <span className="text-[9px] sm:text-[10px] text-white font-mono font-semibold">{s.t}</span>
                                <span className="text-[8px] sm:text-[9px] text-lix-slate flex-1 truncate">{s.d}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-2 sm:gap-3 h-20 sm:h-24">
                        <div className="col-span-3 bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5">
                          <div className="text-[9px] sm:text-[10px] text-lix-slate font-mono mb-1 sm:mb-1.5">Automated Tax Calculation</div>
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] sm:text-[10px] text-lix-slate">PPh 21 TER</span>
                              <span className="text-[10px] sm:text-xs text-white font-mono font-bold">Rp 3,878,900</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] sm:text-[10px] text-lix-slate">BPJS TK & KES</span>
                              <span className="text-[10px] sm:text-xs text-white font-mono font-bold">Rp 1,224,500</span>
                            </div>
                            <div className="h-1.5 mt-1 rounded-full bg-gradient-to-r from-lix-blue via-lix-cyan to-emerald-400" />
                          </div>
                        </div>
                        <div className="col-span-2 bg-lix-darker/70 rounded-lg p-2 sm:p-2.5 border border-white/5 flex flex-col justify-between">
                          <div className="text-[9px] sm:text-[10px] text-lix-slate font-mono">Roster Alerts</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-emerald-400">
                              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                              Compliance Check: 100%
                            </div>
                            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-orange-400">
                              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
                              3 Overtime Risk Flag
                            </div>
                            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-red-400">
                              <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                              1 Sentiment Anomaly
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 w-[90%] sm:w-[95%]">
                  <div className="flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3 bg-lix-darker/95 backdrop-blur-xl border border-lix-cyan/20 rounded-2xl shadow-2xl shadow-black/40 gap-2">
                    <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-lix-blue rounded-full animate-pulse flex-shrink-0 shadow-[0_0_8px_rgba(94,200,245,0.7)]" />
                      <span className="text-xs sm:text-sm text-lix-blue font-mono font-semibold whitespace-nowrap truncate">Dynamic Roster Optimization</span>
                    </div>
                    <span className="text-xs sm:text-sm text-lix-cyan font-mono font-bold whitespace-nowrap truncate">Zero Payroll Friction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center order-2 lg:order-2">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-lix-cyan/15 border border-lix-cyan/25 rounded-full text-lix-cyan text-sm font-semibold">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1zm-1 6a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1zm7 4a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14v6.5z" />
                  </svg>
                  Predictive Enterprise HRIS
                </span>
                <span className="inline-flex items-center px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-lix-gray text-sm font-medium font-mono">
                  Otonasi Pajak & BPJS
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
                CorePeople: Predictive & Agile HRIS
              </h3>

              <p className="text-base md:text-lg text-lix-slate leading-relaxed mb-8">
                HRIS modern yang <span className="text-white font-semibold">melampaui sekadar absensi statis</span>. Menyatukan dynamic shift roster, kalkulasi otomatis PPh 21 TER, BPJS Ketenagakerjaan & Kesehatan, hingga evaluasi beban kerja untuk deteksi dini risiko kelelahan tim (<em className="text-lix-blue not-italic">burnout prediction</em>).
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-lix-cyan/10 border border-lix-cyan/15 rounded-xl flex-shrink-0">
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
                <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-lix-cyan to-lix-blue text-lix-darker font-bold px-7 py-3.5 rounded-xl hover:shadow-lg hover:shadow-lix-cyan/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm md:text-base">
                  Jadwalkan Demo CorePeople
                  <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.422 48.422 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                </button>
                <div className="flex items-center gap-2.5 text-lix-slate">
                  <svg className="w-5 h-5 text-lix-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-sm font-mono font-medium">Kepatuhan Regulasi Kemenaker RI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRISSection;
