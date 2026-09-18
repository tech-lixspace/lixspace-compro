import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const columns = [
    {
      title: 'Solusi & Produk',
      links: [
        { label: 'Enterprise Platform Suite', href: '#solusi' },
        { label: 'Ekosistem POS Omnichannel', href: '#pos' },
        { label: 'Multi-Warehouse Inventory', href: '#pos' },
        { label: 'HRIS & Payroll Automation', href: '#hris' },
        { label: 'Bespoke ERP & API Integration', href: '#jasa' },
      ],
    },
    {
      title: 'Tech Stacks & Standar',
      links: [
        { label: 'Architecture: Microservices & Event-Driven', href: '#' },
        { label: 'Cloud Native: Kubernetes, AWS, GCP', href: '#' },
        { label: 'Frontend: Next.js, Flutter, Tailwind', href: '#' },
        { label: 'Data Core: PostgreSQL, Redis, Kafka', href: '#' },
        { label: 'Security: Zero Trust, End-to-End Auth', href: '#' },
      ],
    },
    {
      title: 'Akselerasi',
      description: 'Diskusikan blueprint arsitektur sistem bersama tim principal engineer kami.',
      cta: {
        label: 'Jadwalkan Demo',
        href: '#kontak',
      },
    },
  ];

  const bottomLinks = [
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Syarat & Ketentuan', href: '#' },
    { label: 'SLA Guarantee', href: '#' },
  ];

  return (
    <footer className="relative overflow-hidden bg-lix-darker border-t border-white/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-lix-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-lix-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-10 md:pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="lg" />
            </div>
            <p className="text-base md:text-lg text-lix-slate leading-relaxed mb-7 max-w-md">
              High-performance enterprise software engineering house & intelligent SaaS ecosystem. Kami mengarsitektur platform digital yang tangguh, aman, dan siap scale-up.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center px-4 py-2 bg-lix-navy/50 border border-lix-blue/15 rounded-full text-lix-blue text-sm md:text-base font-mono font-semibold">
                ISO 27001 Ready
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-lix-navy/50 border border-white/10 rounded-full text-lix-gray text-sm md:text-base font-mono font-semibold">
                99.99% SLA
              </span>
            </div>
          </div>

          {columns.slice(0, 2).map((col, colIdx) => (
            <div key={colIdx}>
              <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-[0.14em] mb-5 md:mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3.5">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="inline-block text-sm md:text-base text-lix-slate hover:text-lix-blue transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-[0.14em] mb-5 md:mb-6">
              {columns[2].title}
            </h4>
            <p className="text-sm md:text-base text-lix-slate leading-relaxed mb-6">
              {columns[2].description}
            </p>
            <a
              href={columns[2].cta.href}
              className="group inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold px-5 py-3 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-sm md:text-base"
            >
              {columns[2].cta.label}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-sm md:text-base text-lix-slate font-medium text-center md:text-left">
            © 2025 PT LixSpace Digital Nusantara. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {bottomLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm md:text-base text-lix-slate hover:text-lix-blue transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
