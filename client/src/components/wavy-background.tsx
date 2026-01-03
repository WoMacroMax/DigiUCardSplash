import { motion } from "framer-motion";

export function WavyBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-[0.06] z-0">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(27, 100%, 55%)"></stop>
            <stop offset="50%" stopColor="hsl(14, 100%, 57%)"></stop>
            <stop offset="100%" stopColor="hsl(217, 100%, 65%)"></stop>
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(27, 100%, 55%)"></stop>
            <stop offset="50%" stopColor="hsl(290, 90%, 60%)"></stop>
            <stop offset="100%" stopColor="hsl(217, 100%, 65%)"></stop>
          </linearGradient>
        </defs>
        <motion.path 
          d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 L2000,300 L0,300 Z" 
          fill="url(#wave-gradient-1)" 
          opacity="0.3"
          animate={{ d: ["M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 L2000,300 L0,300 Z", "M0,120 Q250,70 500,120 T1000,120 T1500,120 T2000,120 L2000,300 L0,300 Z", "M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 L2000,300 L0,300 Z"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path 
          d="M0,200 Q300,150 600,200 T1200,200 T1800,200 L1800,400 L0,400 Z" 
          fill="url(#wave-gradient-2)" 
          opacity="0.2"
          animate={{ d: ["M0,200 Q300,150 600,200 T1200,200 T1800,200 L1800,400 L0,400 Z", "M0,220 Q300,170 600,220 T1200,220 T1800,220 L1800,400 L0,400 Z", "M0,200 Q300,150 600,200 T1200,200 T1800,200 L1800,400 L0,400 Z"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <path d="M0,350 Q400,300 800,350 T1600,350 L1600,600 L0,600 Z" fill="url(#wave-gradient-1)" opacity="0.15"></path>
        <path d="M0,500 Q350,450 700,500 T1400,500 T2100,500 L2100,800 L0,800 Z" fill="url(#wave-gradient-2)" opacity="0.25"></path>
        <path d="M0,650 Q450,600 900,650 T1800,650 L1800,1000 L0,1000 Z" fill="url(#wave-gradient-1)" opacity="0.2"></path>
      </svg>
    </div>
  );
}
