import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { InstagramLineIcon } from './AnimatedIcons.jsx';
import PrivacyTrigger from './PrivacyTrigger';

export default function Footer() {
  const footerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const shadowX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const shadowY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const footerElement = footerRef.current;
    if (footerElement) {
      footerElement.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (footerElement) {
        footerElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <footer 
      ref={footerRef}
      className="relative bg-[#04060a] border-t border-slate-950 pt-24 pb-12 px-6 md:px-16 overflow-hidden group/footer"
    >
      <motion.div 
        style={{ left: shadowX, top: shadowY }}
        className="absolute w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/footer:opacity-100 transition-opacity duration-500 z-0"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-slate-900/60">
          
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-sans font-black text-xl tracking-tighter text-white uppercase">ZARIX</span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 border border-blue-500/20 text-blue-400 bg-blue-950/20 rounded-[2px] tracking-widest">// CORE_v2.6</span>
            </div>
            <p className="text-slate-500 font-sans text-xs font-light leading-relaxed max-w-xs">
              Engenharia de sistemas e otimização estrutural de infraestruturas IT. Soluções escaláveis sem fricção para marcas digitais e negócios locais.
            </p>
            
            <div className="pt-2">
              <a 
                href="https://www.instagram.com/zarix_it/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 group text-slate-400 hover:text-blue-400 transition-colors"
              >
                <InstagramLineIcon />
                <span className="font-mono text-[11px] tracking-wide mt-0.5">@zarix_it <span className="text-slate-600 group-hover:text-blue-500 transition-colors">↗</span></span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">// Serviços</span>
            <ul className="space-y-2.5 font-sans text-xs text-slate-400">
              <li><a href="/servicos" className="hover:text-white transition-colors block">Infraestrutura Redes</a></li>
              <li><a href="/servicos" className="hover:text-white transition-colors block">Cibersegurança Activa</a></li>
              <li><a href="/servicos" className="hover:text-white transition-colors block">Sistemas ERP & POS</a></li>
              <li><a href="/servicos" className="hover:text-white transition-colors block">Suporte Hardware Mac/PC</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">// Empresa</span>
            <ul className="space-y-2.5 font-sans text-xs text-slate-400">
              <li><a href="/planos" className="hover:text-white transition-colors block">Orçamentos</a></li>
              <li><a href="mailto:geral@zarix.site" className="hover:text-white transition-colors block">Contacto</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4 md:text-right">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">// Cobertura Coimbra/Aveiro</span>
            <div className="space-y-1 font-sans text-xs text-slate-400">
              <p className="text-white font-medium">Suporte Presencial e Remoto</p>
              <p className="text-slate-500">Segunda a Sexta · 09:00 — 18:00</p>
            </div>
            <div className="pt-2">
              <a href="mailto:geral@zarix.site" className="font-mono text-[11px] text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">
                geral@zarix.site
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[10px] text-slate-600">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} ZARIX. TODOS OS DIREITOS RESERVADOS.</span>
            <PrivacyTrigger text="// PRIVACIDADE" className="text-slate-600 hover:text-slate-400 font-mono text-[10px]" />
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-terms-modal'))} className="hover:text-slate-400 transition-colors">// TERMOS</button>
          </div>
          <div className="flex items-center gap-2 text-slate-500 bg-slate-950/60 px-2.5 py-1 border border-slate-900/60 rounded-[3px]">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>LATENCY_AVEIRO: 04ms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
