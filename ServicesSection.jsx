import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechCursor from './TechCursor';

const servicesData = [
  {
    number: "01",
    title: "Montagem e Upgrade de PCs",
    description: "Construímos e atualizamos computadores à medida das suas necessidades empresariais. Desde configurações básicas para faturação até estações de trabalho robustas para gestão, garantindo um desempenho fiável e sem atrasos. Garantia e homologação total para empresas.",
    tags: ["Montagem", "Hardware Upgrades", "Estações de Trabalho"]
  },
  {
    number: "02",
    title: "Manutenção e Reparação de Equipamentos",
    description: "Diagnóstico rápido, manutenção proativa e reparação especializada de equipamentos informáticos para pequenas e médias empresas. Intervenção no local em menos de 24 horas para que os seus sistemas críticos não parem.",
    tags: ["SLA Dedicado", "Reparação Expresso", "Suporte Local"]
  },
  {
    number: "03",
    title: "Redes e Wi-Fi Empresarial",
    description: "Instalação e otimização de redes corporativas estruturadas com equipamentos Ubiquiti e MikroTik. Segmentação VLAN, VPNs e Wi-Fi isolado para clientes e colaboradores, com encriptação forçada e alta disponibilidade para restauração e comércio local.",
    tags: ["Ubiquiti", "VLANs", "VPNs", "Wi-Fi Corporativo"]
  },
  {
    number: "04",
    title: "Cibersegurança e Proteção de Dados (RGPD)",
    description: "Auditorias completas de vulnerabilidade, mitigação de ameaças em tempo real, EDR e conformidade com o RGPD. Proteção ativa contra ransomware, acessos não autorizados e fuga de dados com backups invioláveis com encriptação ponto-a-ponto.",
    tags: ["Pentesting", "RGPD", "EDR", "Backups Encriptados"]
  },
  {
    number: "05",
    title: "Chatbots e Automação com Inteligência Artificial",
    description: "Desenvolvimento e integração de assistentes virtuais inteligentes para WhatsApp e websites. Automatizamos respostas a clientes, fluxos de reservas e FAQ operacional 24 horas, reduzindo a carga administrativa e aumentando as taxas de conversão.",
    tags: ["LLM", "WhatsApp APIs", "Automação Inteligente"]
  },
  {
    number: "06",
    title: "Suporte IT Mensal (Subscrição)",
    description: "Planos de suporte contínuo adaptados à realidade do seu negócio. Acompanhamento mensal presencial ou remoto com monitorização de sistemas, atualizações de segurança, backups e resposta prioritária. Ideal para PMEs que não têm departamento de IT interno.",
    tags: ["Subscrição", "Monitorização 24/7", "Suporte Prioridade"]
  }
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative z-10 py-32 border-t border-slate-900/60 bg-[#07090e]/40 backdrop-blur-sm px-6 md:px-16">
      <TechCursor activeService={activeService} />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div className="space-y-4">
            <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block">// Engenharia de Sistemas</span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase text-white">O que fazemos.</h2>
          </div>
          <p className="text-slate-600 font-mono text-xs max-w-xs md:text-right">
            [ Soluções desenhadas para mitigar falhas estruturais ]
          </p>
        </div>

        <div className="border-t border-slate-800/40">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative border-b border-slate-800/40 py-12 cursor-pointer group"
              onMouseEnter={() => setActiveService(service.title)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-baseline gap-6 md:gap-16">
                  <span className="font-mono text-xs text-slate-700 group-hover:text-blue-500 transition-colors duration-300">
                    {service.number}
                  </span>
                  <h3 className="text-3xl md:text-6xl font-black text-slate-600 group-hover:text-white tracking-tighter transition-colors duration-300 ease-out">
                    {service.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 bg-slate-900/60 border border-slate-800/80 text-slate-500 group-hover:border-blue-900/50 group-hover:text-blue-400 transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {activeService === service.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="pl-12 md:pl-20 max-w-3xl text-slate-400 font-light text-base md:text-lg leading-relaxed"
                  >
                    {service.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
