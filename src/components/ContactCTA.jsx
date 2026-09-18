import React from 'react';

const ContactCTA = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      title: 'Non-Disclosure Agreement (NDA)',
      description: 'Kerahasiaan ide, data perusahaan, dan logika bisnis Anda terjamin secara legal sebelum diskusi dimulai.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-lix-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Konsultasi Arsitektur 45 Menit Gratis',
      description: 'Sesi telaah teknis mendalam bersama lead software engineer, bukan sekadar penawaran tim sales umum.',
    },
  ];

  return (
    <section id="kontak" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-lix-dark to-lix-darker">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-lix-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lix-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-lix-navy/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30">
          <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-lix-blue/10 via-transparent to-lix-cyan/10 pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 p-6 md:p-10 lg:p-14">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lix-navy/60 border border-lix-blue/15 rounded-full mb-6 w-fit">
                <span className="text-xs md:text-sm font-semibold text-lix-blue tracking-[0.18em] uppercase">
                  Konsultasi Teknis Eksklusif
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
                Punya Kebutuhan Sistem Khusus atau Siap Deploy Ekosistem LixSpace?
              </h2>

              <p className="text-base md:text-lg text-lix-slate leading-relaxed mb-10 max-w-xl">
                Bicarakan tantangan arsitektur, kapasitas skalabilitas cabang, atau integrasi legacy software Anda langsung bersama Principal Architect kami.
              </p>

              <div className="space-y-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-11 h-11 flex items-center justify-center bg-lix-blue/10 border border-lix-blue/15 rounded-2xl flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold text-white mb-1.5">
                        {benefit.title}
                      </div>
                      <p className="text-sm md:text-base text-lix-slate leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md bg-gradient-to-b from-lix-navy/60 to-lix-navy/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Mulai Blueprint Proyek Anda
                </h3>
                <p className="text-sm md:text-base text-lix-slate mb-7">
                  Isi formulir ringkas berikut untuk dijadwalkan sesi teknis hari ini.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Nama Lengkap & Perusahaan
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Hendra Wijaya (PT Retail Megah)"
                      className="w-full px-4 py-3 bg-lix-darker/60 border border-white/10 rounded-xl text-white placeholder-lix-slate/60 focus:outline-none focus:ring-2 focus:ring-lix-blue/40 focus:border-lix-blue/40 transition-all text-sm md:text-base"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Email Bisnis
                      </label>
                      <input
                        type="email"
                        placeholder="hendra@perusahaan.co"
                        className="w-full px-4 py-3 bg-lix-darker/60 border border-white/10 rounded-xl text-white placeholder-lix-slate/60 focus:outline-none focus:ring-2 focus:ring-lix-blue/40 focus:border-lix-blue/40 transition-all text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="08123456789"
                        className="w-full px-4 py-3 bg-lix-darker/60 border border-white/10 rounded-xl text-white placeholder-lix-slate/60 focus:outline-none focus:ring-2 focus:ring-lix-blue/40 focus:border-lix-blue/40 transition-all text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Kebutuhan Solusi
                    </label>
                    <select className="w-full px-4 py-3 bg-lix-darker/60 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-lix-blue/40 focus:border-lix-blue/40 transition-all text-sm md:text-base appearance-none cursor-pointer pr-10">
                      <option>OmniPOS & Multi-Warehouse Inventory Ecosystem</option>
                      <option>CorePeople Predictive HRIS Enterprise</option>
                      <option>Custom Engineering (Web / Mobile / ERP)</option>
                      <option>Audit Arsitektur & Legacy Migration</option>
                      <option>Lainnya (akan didiskusikan)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Ringkasan Skala Masalah / Objektif Proyek
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ceritakan jumlah cabang, jumlah user, atau kendala sistem saat ini..."
                      className="w-full px-4 py-3 bg-lix-darker/60 border border-white/10 rounded-xl text-white placeholder-lix-slate/60 focus:outline-none focus:ring-2 focus:ring-lix-blue/40 focus:border-lix-blue/40 transition-all text-sm md:text-base resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lix-blue to-lix-cyan text-lix-darker font-bold px-7 py-4 rounded-xl hover:shadow-xl hover:shadow-lix-blue/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-sm md:text-base"
                  >
                    Hubungkan ke WhatsApp Tech Lead
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
