import { motion } from 'framer-motion';

const iconTransition = { type: "spring", stiffness: 300, damping: 15 };

export const ShieldIcon = () => (
  <motion.svg aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
    className="w-6 h-6 text-blue-500"
    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
    transition={iconTransition}
  >
    <motion.path 
      strokeLinecap="round" strokeLinejoin="round" 
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" 
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }}
    />
  </motion.svg>
);

export const NetworkIcon = () => (
  <motion.svg aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
    className="w-6 h-6 text-blue-500"
    whileHover={{ scale: 1.12 }}
    transition={iconTransition}
  >
    <motion.path 
      strokeLinecap="round" strokeLinejoin="round" 
      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-5.25v9" 
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.1 }}
    />
  </motion.svg>
);

export const CpuIcon = () => (
  <motion.svg aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
    className="w-6 h-6 text-blue-500"
    whileHover={{ scale: 1.1, rotate: 90 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  >
    <motion.path 
      strokeLinecap="round" strokeLinejoin="round" 
      d="M8.25 3v1.5M4.5 8.25H3m1.5 7.5H3m3.75 3.75V21m3.75-18v1.5m4.5 4.5H21m-1.5 7.5H21m-3.75 3.75V21m-10.5-3h7.5A2.25 2.25 0 0018 15.75v-7.5A2.25 2.25 0 0015.75 6h-7.5A2.25 2.25 0 006 8.25v7.5A2.25 2.25 0 008.25 18zM12 11.25a.75.75 0 100 1.5.75.75 0 000-1.5z" 
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }}
    />
  </motion.svg>
);

export const AutomationIcon = () => (
  <motion.svg aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
    className="w-6 h-6 text-blue-500"
    whileHover={{ scale: 1.15 }}
    transition={iconTransition}
  >
    <motion.path 
      strokeLinecap="round" strokeLinejoin="round" 
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" 
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }}
    />
  </motion.svg>
);

export const WhatsAppLineIcon = ({ className = "w-5 h-5 text-blue-500" }) => (
  <svg aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M16 12c-.5-.2-1.2-.6-1.3-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.7-.1a4.72 4.72 0 0 1-1.7-1c-.5-.5-.8-1-1-1.2-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3-.1-.2-.4-1-.6-1.4-.1-.4-.3-.3-.4-.3h-.4c-.2 0-.5.1-.6.3a2.3 2.3 0 0 0-.7 1.7c0 .8.4 1.6.5 1.8.1.1 1.6 2.5 4 3.4.6.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.8-.4z" />
  </svg>
);

export const InstagramLineIcon = () => (
  <motion.svg aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300"
    whileHover={{ scale: 1.12 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </motion.svg>
);

export const TargetIcon = ({ className = "w-5 h-5 text-blue-500" }) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
  </svg>
);
