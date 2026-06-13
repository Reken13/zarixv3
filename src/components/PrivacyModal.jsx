import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openModal = () => setIsOpen(true);
    window.addEventListener('open-privacy-modal', openModal);
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-privacy-modal', openModal);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const macosAnimation = {
    hidden: { 
      opacity: 0, 
      scale: 0.3, 
      y: 100,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 280, 
        damping: 22,
        mass: 0.8
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.5, 
      y: 80,
      filter: "blur(8px)",
      transition: { 
        duration: 0.25, 
        ease: [0.32, 0, 0.67, 0]
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#04060a]/60 backdrop-blur-md cursor-pointer"
          />

          <motion.div 
            variants={macosAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-2xl bg-[#0b101d] border border-slate-800 rounded-lg shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden relative z-10 font-sans"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-900 bg-[#080d17]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest">// SECURE_DOC //</span>
                <span className="text-white text-xs font-bold tracking-tight">Política de Privacidade</span>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-red-500/40 hover:bg-red-950/20 transition-all duration-200 group font-mono text-xs"
                aria-label="Fechar"
              >
                ×
              </button>
            </div>

            <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-6 font-light text-slate-400 text-sm leading-relaxed scrollbar-none">
              
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 1. Responsável pelo tratamento</h4>
                <p>Zarix, com sede em Aveiro, Portugal. Contacto para assuntos de privacidade: <a href="mailto:info@zarix.site" className="text-white hover:underline">info@zarix.site</a></p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 2. Dados recolhidos</h4>
                <p>Através do formulário de contacto recolhemos: nome, e-mail, número de telefone (opcional) e a mensagem submetida.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 3. Finalidade e base legal</h4>
                <p>Os dados são utilizados exclusivamente para responder ao seu pedido de contacto ou orçamento (Art. 6.º, n.º 1, al. b) do RGPD). Não utilizamos os seus dados para fins de marketing sem consentimento expresso.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 4. Conservação dos dados</h4>
                <p>Os dados são conservados pelo período necessário para responder ao pedido e, no máximo, durante 12 meses após o último contacto.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 5. Partilha de dados</h4>
                <p>Os seus dados não são vendidos nem partilhados com terceiros para fins comerciais. Apenas prestadores de serviços técnicos, sob obrigação de confidencialidade, podem ter acesso.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 6. Os seus direitos (RGPD)</h4>
                <p>Tem direito a aceder, corrigir, eliminar ou limitar o tratamento dos seus dados, bem como a opor-se ao mesmo. Para exercer os seus direitos: <a href="mailto:info@zarix.site" className="text-white hover:underline">info@zarix.site</a>. Tem também o direito de apresentar reclamação à CNPD.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 7. Cookies</h4>
                <p>Este site não utiliza cookies de rastreio ou publicidade. Apenas cookies técnicos essenciais ao funcionamento, quando aplicável.</p>
              </div>

              <div className="pt-6 border-t border-slate-900 flex justify-between items-center font-mono text-[10px] text-slate-600">
                <span>SYSTEM_LOG: RGPD_COMPLIANT</span>
                <span>Última atualização: Maio de 2025</span>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
