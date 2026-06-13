import { useState, useEffect, useRef } from 'react';

function useIntersect(threshold = 0.3) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, active };
}

function AnimatedNumber({ target, suffix, prefix = '', decimals = 0, duration = 2000, active }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (now) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return <>{active ? `${prefix}${value.toFixed(decimals)}${suffix}` : `${prefix}0${suffix}`}</>;
}

function Typewriter({ text, delay = 25, active }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    if (!active) return;
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [active, text, delay]);
  return <>{displayed}{active && displayed.length < text.length && <span class="animate-pulse text-blue-400">|</span>}</>;
}

export default function StatsGrid() {
  const a = useIntersect(0.3);

  return (
    <section ref={a.ref} class="border-b border-slate-800 grid grid-cols-2 md:grid-cols-4 bg-[#0B0F19] bg-[image:linear-gradient(to_right,rgba(20,27,45,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,27,45,0.4)_1px,transparent_1px)] bg-[size:4rem_4rem] text-center font-mono">
      <div class="p-6 border-r border-b md:border-b-0 border-slate-800 bg-[#0A0E1A]">
        <div class="text-2xl md:text-3xl font-bold text-white">
          <AnimatedNumber target={99.9} suffix="%" decimals={1} active={a.active} />
        </div>
        <div class="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
          <Typewriter text="SLA Uptime Garantido" active={a.active} />
        </div>
      </div>
      <div class="p-6 border-r md:border-r border-b md:border-b-0 border-slate-800 bg-[#0A0E1A]">
        <div class="text-2xl md:text-3xl font-bold text-blue-500">
          &lt;<AnimatedNumber target={200} suffix="ms" active={a.active} />
        </div>
        <div class="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
          <Typewriter text="Tempo de Resposta Web" active={a.active} />
        </div>
      </div>
      <div class="p-6 border-r border-slate-800 bg-[#0A0E1A]">
        <div class="text-2xl md:text-3xl font-bold text-white">
          +<AnimatedNumber target={50} suffix="K" active={a.active} />
        </div>
        <div class="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
          <Typewriter text="Linhas de Código Auditadas" active={a.active} />
        </div>
      </div>
      <div class="p-6 bg-[#0A0E1A]">
        <div class="text-2xl md:text-3xl font-bold text-slate-400">24/7</div>
        <div class="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
          <Typewriter text="Monitorização Perimetral" active={a.active} />
        </div>
      </div>
    </section>
  );
}
