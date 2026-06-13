import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronRight, Check, Server, Video, Shield, Cloud, Cpu } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const modulosZarix = [
  {
    id: 'infraestrutura',
    titulo: 'Infraestrutura & Suporte Técnico',
    descricaoCurta: 'Manutenção de computadores, servidores locais e redes.',
    pecaTexto: 'INF',
    icon: Server,
    especialidades: [
      'Assistência e reparação técnica avançada de computadores e postos de trabalho.',
      'Instalação, configuração e manutenção de servidores locais e sistemas NAS.',
      'Desenho e parametrização de redes estruturadas (Acess Points Wi-Fi, Routers e Switches).'
    ]
  },
  {
    id: 'seguranca_fisica',
    titulo: 'Sistemas de Videovigilância',
    descricaoCurta: 'Instalação de câmaras CCTV e controlo de acessos.',
    pecaTexto: 'CCTV',
    icon: Video,
    especialidades: [
      'Dimensionamento e instalação de sistemas de videovigilância IP (CCTV) de alta definição.',
      'Configuração de visualização remota em tempo real via smartphone ou ecrã central.',
      'Controlo de acessos físicos e manutenção preventiva de hardware de segurança.'
    ]
  },
  {
    id: 'ciberseguranca',
    titulo: 'Cibersegurança & Auditorias',
    descricaoCurta: 'Proteção contra ransomware, malware e falhas críticas.',
    pecaTexto: 'SEC',
    icon: Shield,
    especialidades: [
      'Auditorias de segurança detalhadas para deteção de vulnerabilidades na rede.',
      'Implementação e gestão de Firewalls perimetrais e sistemas de isolamento de ameaças.',
      'Proteção avançada de endpoints contra vírus, ransomware e ataques de phishing.'
    ]
  },
  {
    id: 'cloud_backup',
    titulo: 'Serviços Cloud & Continuidade',
    descricaoCurta: 'Cópias de segurança, alojamento web e emails profissionais.',
    pecaTexto: 'CLD',
    icon: Cloud,
    especialidades: [
      'Configuração e automação de cópias de segurança (Backups) locais e na nuvem.',
      'Migração e gestão de emails corporativos profissionais (ex: Microsoft 365 / Google Workspace).',
      'Alojamento web (Hosting) ultra-rápido com gestão de domínios e certificados SSL.'
    ]
  },
  {
    id: 'automacao_ia',
    titulo: 'Desenvolvimento & Automação IA',
    descricaoCurta: 'Software à medida, integrações de APIs e chatbots inteligência artificial.',
    pecaTexto: 'A.I',
    icon: Cpu,
    especialidades: [
      'Desenvolvimento de software à medida e otimização de sistemas internos.',
      'Integração avançada de ferramentas empresariais através de APIs personalizadas.',
      'Criação de Chatbots inteligentes com IA para automação de atendimento e suporte.'
    ]
  }
];

export default function OrcamentoZarix() {
  const [blocosAtivos, setBlocosAtivos] = useState([]);
  const [infoExplica, setInfoExplica] = useState(null);
  const debounceRef = useRef(null);

  const toggleBloco = (id) => {
    if (debounceRef.current) return;
    debounceRef.current = setTimeout(() => { debounceRef.current = null; }, 300);
    if (blocosAtivos.includes(id)) {
      setBlocosAtivos(blocosAtivos.filter(item => item !== id));
    } else {
      setBlocosAtivos([...blocosAtivos, id]);
    }
  };

  const enviarWhatsApp = () => {
    if (blocosAtivos.length === 0) {
      alert("Por favor, selecione pelo menos um módulo para a sua configuração antes de enviar.");
      return;
    }
    const servicosEscolhidos = modulosZarix
      .filter(modulo => blocosAtivos.includes(modulo.id))
      .map(modulo => `• ${modulo.titulo}`)
      .join("\n");

    const textoMensagem = `Olá Zarix! 👋\n\nAcabei de criar a minha configuração personalizada no vosso site e gostaria de pedir uma validação de engenharia.\n\n🛠️ *Módulos Selecionados:*\n${servicosEscolhidos}\n\nPor favor, entrem em contacto comigo para analisarmos os detalhes técnicos do meu negócio. Obrigado!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textoMensagem)}`;
    const win = window.open(url, '_blank');
    if (!win) window.location.href = url;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

      <div className="lg:col-span-5 bg-[#0D111C]/90 border border-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-500 font-bold block mb-2">
            // Configuração Técnica Operacional
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight leading-tight pb-4 text-white uppercase">
            Desenha o teu<br />ecossistema IT.
          </h2>

          <p className="text-[10px] font-mono text-slate-500 leading-relaxed mb-5 border-l-2 border-blue-500/30 pl-3">
            Seleciona os módulos abaixo. No final recebes um orçamento validado pela engenharia — <span className="text-blue-400 font-bold">sem compromisso</span>.
          </p>

          <div className="divide-y divide-slate-900/60">
            {modulosZarix.map((modulo) => {
              const isActive = blocosAtivos.includes(modulo.id);
              const isOpen = infoExplica === modulo.id;
              return (
                <div
                  key={modulo.id}
                  className="py-5 relative cursor-pointer group"
                  onClick={() => toggleBloco(modulo.id)}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setInfoExplica(isOpen ? null : modulo.id);
                    }}
                    className={`absolute top-5 right-0 p-1 rounded transition-colors z-10 ${
                      isOpen ? 'text-blue-400 bg-slate-900/50' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <HelpCircle size={16} />
                  </button>

                  <div className="pr-8">
                    <h3 className={`font-bold text-sm sm:text-base flex items-center gap-3 transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-white'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-blue-500' : 'bg-slate-800'}`} />
                      {modulo.titulo}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-sm">{modulo.descricaoCurta}</p>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden bg-transparent pl-4 border-l border-slate-900 mt-3 text-xs text-slate-400"
                      >
                        <ul className="space-y-2 list-none pl-0 m-0">
                          {modulo.especialidades.map((esp, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-relaxed">
                              <span className="text-blue-500 select-none font-bold">·</span>
                              <span>{esp}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/60">
          <button
            onClick={enviarWhatsApp}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 tracking-wider shadow-lg shadow-blue-900/10"
          >
            SOLICITAR VALIDAÇÃO DE ENGENHARIA <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="lg:col-span-7 bg-[#0D111C]/90 border border-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center shadow-2xl backdrop-blur-md relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md w-full relative z-10">
          {modulosZarix.map((modulo, index) => {
            const isActive = blocosAtivos.includes(modulo.id);
            const Icono = modulo.icon;
            const isLast = index === modulosZarix.length - 1;

            return (
              <motion.div
                key={modulo.id}
                layout
                className={`relative h-28 rounded-xl border transition-all duration-500 flex flex-col justify-between p-4 ${
                  isLast ? 'sm:col-span-2' : 'col-span-1'
                } ${
                  isActive
                    ? 'border-blue-500 bg-blue-950/20 shadow-[0_0_25px_rgba(37,99,235,0.15)]'
                    : 'border-slate-900 bg-black/10 opacity-30 hover:opacity-50'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06)_0%,transparent_70%)] pointer-events-none" />
                )}

                <div className="flex items-center justify-between relative z-10">
                  <div className={`p-1.5 rounded-lg border ${isActive ? 'border-blue-500/30 text-blue-400 bg-blue-950/60' : 'border-slate-900 text-slate-600'}`}>
                    <Icono size={18} strokeWidth={1.5} />
                  </div>
                  <div className="font-mono text-[9px] tracking-widest uppercase">
                    {isActive ? (
                      <span className="text-blue-400 font-bold flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                        ONLINE
                      </span>
                    ) : (
                      <span className="text-slate-600">OFFLINE</span>
                    )}
                  </div>
                </div>

                <div className="flex items-end justify-between relative z-10">
                  <div>
                    <p className={`font-mono text-xs font-bold tracking-wider ${isActive ? 'text-white' : 'text-slate-500'}`}>
                      {modulo.pecaTexto}
                    </p>
                    <p className="text-[9px] text-slate-500 uppercase font-mono tracking-tight mt-0.5">
                      {modulo.id.replace('_', ' ')}
                    </p>
                  </div>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all duration-500 ${isActive ? 'border-blue-500 bg-blue-600 text-white' : 'border-slate-900 text-transparent'}`}>
                    <Check size={8} strokeWidth={4} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex gap-4 text-[9px] font-mono text-slate-600 border-t border-slate-900/60 pt-4 w-full max-w-md justify-between relative z-10">
          <div>ZARIX_CORE: //v2.0</div>
          <div>ACTIVE_NODES: {blocosAtivos.length}</div>
        </div>
      </div>

    </div>
  );
}
