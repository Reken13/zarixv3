import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TermsModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openModal = () => setIsOpen(true);
    window.addEventListener('open-terms-modal', openModal);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-terms-modal', openModal);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
            initial={{ opacity: 0, scale: 0.3, y: 100, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.5, y: 80, filter: 'blur(8px)' }}
            transition={{ type: 'spring', stiffness: 280, damping: 22, mass: 0.8 }}
            className="w-full max-w-2xl bg-[#0b101d] border border-slate-800 rounded-lg shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden relative z-10 font-sans"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-900 bg-[#080d17]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest">// DOCUMENTAÇÃO LEGAL</span>
                <span className="text-white text-xs font-bold tracking-tight">Termos e Condições</span>
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
              <h2 className="text-xl font-bold tracking-tight text-white font-mono">Termos e Condições de Serviço</h2>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 1. Âmbito e objeto</h4>
                <p>Os presentes Termos e Condições regem o acesso e a utilização do website da <strong>Zarix</strong>, bem como a solicitação de orçamentos e informações sobre os nossos serviços de infraestrutura IT, cibersegurança e automação digital corporativa em Portugal.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 2. Prestação de serviços e orçamentos</h4>
                <p>As simulações realizadas através do nosso configurador dinâmico de engenharia constituem uma estimativa preliminar baseada nos dados fornecidos pelo utilizador. Não vinculam a Zarix a um contrato comercial definitivo até que seja efetuada uma auditoria técnica direta e validada por um dos nossos engenheiros.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 3. Propriedade intelectual</h4>
                <p>Todo o conteúdo deste website — incluindo textos, estruturas assimétricas de design, interfaces líquidas, componentes de software, marcas e logótipos — é propriedade exclusiva da Zarix ou dos seus licenciantes, estando protegido pelas leis de propriedade intelectual vigentes em Portugal e na União Europeia.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 4. Responsabilidade do utilizador</h4>
                <p>O utilizador compromete-se a utilizar o website de boa-fé e a fornecer dados verdadeiros e atualizados nos formulários de diagnóstico. É estritamente proibida qualquer tentativa de engenharia inversa, injeção de scripts maliciosos ou utilização indevida da infraestrutura informática do portal.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 5. Exclusão de responsabilidade</h4>
                <p>A Zarix envida todos os esforços para garantir a máxima estabilidade e segurança do website. Contudo, não nos responsabilizamos por interrupções temporárias de serviço decorrentes de falhas de rede de terceiros, atualizações técnicas globais ou incidentes de força maior.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-blue-400 font-medium uppercase">// 6. Lei aplicável e foro</h4>
                <p>Para a resolução de qualquer litígio emergente da interpretação ou execução dos presentes Termos, será aplicável a legislação da República Portuguesa. É eleito o foro da Comarca de Aveiro como competência exclusiva, com expressa renúncia a qualquer outro.</p>
              </div>

              <div className="pt-6 border-t border-slate-900 flex justify-between items-center font-mono text-[10px] text-slate-600">
                <span>SYSTEM_LOG: TERMS_COMPLIANT</span>
                <span>Última atualização: Junho de 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
