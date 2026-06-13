import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('promo-dismissed');
    if (dismissed) setShowBanner(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem('promo-dismissed', 'true');
  };

  const closeMobile = () => setIsMobileOpen(false);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Blog", href: "/blog" }
  ];

  return (
    <motion.header 
      className={`fixed left-0 right-0 z-40 transition-all duration-500 flex flex-col items-center px-6 md:px-16 ${isScrolled ? 'top-4' : 'top-0'}`}
      initial={{ y: 0 }}
    >
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden"
          >
            <div className="w-full max-w-7xl mx-auto flex items-center justify-center gap-4 py-2 border-b border-blue-500/10">
              <span className="text-[11px] font-mono text-blue-300/90 tracking-wide">
                Primeiro projeto com <span className="text-blue-400 font-bold">20% de desconto</span> para novos clientes.
              </span>
              <button onClick={dismissBanner} className="text-blue-400/40 hover:text-blue-300 transition-colors flex-shrink-0" aria-label="Fechar promoção">
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 border-b ${
        isScrolled ? 'bg-[#0b101d]/80 backdrop-blur-xl border-slate-800/50 px-6 py-3 rounded-full' : 'bg-transparent border-slate-900/0 py-8'
      }`}>
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-sans font-black text-xl tracking-tighter text-white group-hover:text-blue-500 transition-colors">ZAR<span className="text-blue-500">IX</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="font-mono text-xs text-slate-400 hover:text-white transition-colors relative py-1 group">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="/planos" className="hidden md:inline-flex font-mono text-[11px] font-bold uppercase bg-blue-600/10 border border-blue-500/20 text-blue-400 px-5 py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all">
          Orçamento →
        </a>

        <button onClick={() => setIsMobileOpen(true)} className="md:hidden text-slate-300 hover:text-white transition-colors relative w-6 h-6 flex items-center justify-center" aria-label="Abrir menu">
          <motion.div animate={isMobileOpen ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
            <Menu size={22} />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMobile} />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#0b101d] border-l border-slate-800/50 flex flex-col p-8 pt-24"
            >
              <button onClick={closeMobile} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors" aria-label="Fechar menu">
                <X size={22} />
              </button>
              {[...navLinks, { name: "Orçamento", href: "/planos" }].map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  onClick={closeMobile}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="font-mono text-lg text-slate-300 hover:text-blue-400 transition-colors py-4 border-b border-slate-800/30 last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
