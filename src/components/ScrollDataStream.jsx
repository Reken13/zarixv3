import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollDataStream() {
  const { scrollYProgress } = useScroll();
  
  const yLeftColumn = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yRightColumn = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.15, 0.25, 0.02]);

  return (
    <motion.div 
      style={{ opacity: opacityFade }}
      className="absolute inset-0 pointer-events-none hidden lg:flex justify-between px-12 z-0 mix-blend-screen"
    >
      <motion.div style={{ y: yLeftColumn }} className="font-mono text-[10px] text-blue-900/60 space-y-1 pt-96">
        <div>[SYS_INIT] NETWORK_STREAM_ACTIVE</div>
        <div>[IP_RESOLVE] AVEIRO_NODE_SECURE</div>
        <div>[PORT_80] LISTENING_STATUS_OK</div>
        <div>[FIREWALL] INT_TRAFFIC_SHIELDED</div>
        <div>[VLAN_10] PACKETS_ROUTED_SUCCESS</div>
        <div>[EDR_AGENT] ZERO_THREATS_FOUND</div>
        <div>[BACKUP_SYS] SYNC_INCREMENTAL_DONE</div>
        <div>[MONITOR] LATENCY_04MS_STEADY</div>
      </motion.div>

      <motion.div style={{ y: yRightColumn }} className="font-mono text-[10px] text-slate-800/80 space-y-1 pt-48 text-right">
        <div>SHA256 // 4ba2c1f90e823b1a...</div>
        <div>TLS_1.3 // CIPHER_SUITE_READY</div>
        <div>COMPLIANCE // RGPD_VALID_2026</div>
        <div>STATUS // INJECTING_ISLANDS_NATIVE</div>
        <div>TUNNEL // IPSEC_VPN_ESTABLISHED</div>
        <div>PROCESS // AUTO_REPAIR_DAEMON</div>
        <div>DB_STREAM // QUERY_EXEC_001MS</div>
      </motion.div>
    </motion.div>
  );
}
