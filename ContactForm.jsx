import React, { useState } from 'react';
import PrivacyTrigger from './PrivacyTrigger';
import { WHATSAPP_NUMBER } from '../constants';

const servicos = [
  { value: "infraestrutura", label: "Infraestrutura & Suporte Técnico" },
  { value: "seguranca_fisica", label: "Sistemas de Videovigilância (CCTV)" },
  { value: "ciberseguranca", label: "Cibersegurança & Auditorias" },
  { value: "cloud_backup", label: "Serviços Cloud & Continuidade" },
  { value: "automacao_ia", label: "Desenvolvimento & Automação IA" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!privacyAccepted) return;

    const servicoLabel = servicos.find(s => s.value === formData.servico)?.label || formData.servico;
    const texto = `Olá Zarix! 👋\n\n*Novo contacto do site*\n\nNome: ${formData.nome}\nE-mail: ${formData.email}${formData.telefone ? `\nTelefone: ${formData.telefone}` : ''}\nServiço: ${servicoLabel}\nMensagem: ${formData.mensagem}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    const win = window.open(url, '_blank');
    if (!win) window.location.href = url;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
      <div>
        <label htmlFor="nome" className="text-slate-500 block mb-2">// Nome *</label>
        <input
          id="nome" name="nome" type="text" value={formData.nome} onChange={handleChange}
          className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 outline-none p-3 text-white transition-colors text-sm font-sans"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="text-slate-500 block mb-2">// E-mail *</label>
        <input
          id="email" name="email" type="email" value={formData.email} onChange={handleChange}
          className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 outline-none p-3 text-white transition-colors text-sm font-sans"
          required
        />
      </div>
      <div>
        <label htmlFor="telefone" className="text-slate-500 block mb-2">// Telefone (opcional)</label>
        <input
          id="telefone" name="telefone" type="tel" value={formData.telefone} onChange={handleChange}
          className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 outline-none p-3 text-white transition-colors text-sm font-sans"
        />
      </div>
      <div>
        <label htmlFor="servico" className="text-slate-500 block mb-2">// Serviço de Interesse *</label>
        <select
          id="servico" name="servico" value={formData.servico} onChange={handleChange}
          className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 outline-none p-3 text-slate-400 transition-colors text-sm font-sans appearance-none rounded-none"
          required
        >
          <option value="">Selecione um serviço...</option>
          {servicos.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="mensagem" className="text-slate-500 block mb-2">// Mensagem *</label>
        <textarea
          id="mensagem" name="mensagem" rows="4" value={formData.mensagem} onChange={handleChange}
          className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 outline-none p-3 text-white transition-colors text-sm font-sans"
          required
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          type="checkbox" id="privacy" checked={privacyAccepted}
          onChange={(e) => setPrivacyAccepted(e.target.checked)}
          className="mt-1 accent-blue-600 h-4 w-4" required
        />
        <span className="text-slate-500 font-sans text-xs leading-tight">
          Li e aceito a <PrivacyTrigger text="Política de Privacidade" className="text-slate-400 underline decoration-slate-800 underline-offset-2 hover:text-blue-400 transition-colors" />. Os meus dados serão utilizados exclusivamente para responder ao meu pedido.
        </span>
      </div>
      <button
        type="submit"
        className="w-full border border-blue-500/30 bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 py-4 uppercase font-bold tracking-wider text-center block shadow-[0_0_20px_rgba(37,99,235,0.05)]"
      >
        Enviar mensagem →
      </button>
    </form>
  );
}
