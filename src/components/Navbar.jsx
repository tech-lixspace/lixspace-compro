import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Solusi Produk', href: '#solusi' },
    { label: 'Jasa Custom', href: '#jasa' },
    { label: 'Ekosistem POS & Inventory', href: '#pos' },
    { label: 'HRIS Enterprise', href: '#hris' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-lix-darker/90 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo size="md" />

          <div className="hidden lg:flex items-center gap-1 ml-6">
            <div className="flex items-center bg-lix-navy/60 backdrop-blur-md rounded-2xl px-3 py-2 border border-white/5">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="px-3 md:px-4 py-2 text-sm font-medium text-lix-gray hover:text-white transition-colors duration-200 rounded-xl hover:bg-white/5 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-lix-blue to-lix-cyan text-lix-darker font-semibold px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-lix-blue/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm">
              Konsultasi Gratis
            </button>

            <button
              className="lg:hidden p-2 rounded-xl bg-lix-navy/60 border border-white/5 text-white hover:bg-lix-navy transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[600px] pb-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-lix-gray hover:text-white bg-lix-navy/40 rounded-xl hover:bg-lix-navy/60 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button className="md:hidden mt-2 w-full items-center gap-2 bg-gradient-to-r from-lix-blue to-lix-cyan text-lix-darker font-semibold px-5 py-3 rounded-xl hover:shadow-lg hover:shadow-lix-blue/25 transition-all duration-200 text-sm">
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
