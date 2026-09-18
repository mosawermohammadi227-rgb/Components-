import type { ReactNode } from "react";
import { motion } from "motion/react";

type AIModelLogoProps = {
  icon?: ReactNode;
  label?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
};

const sizes = {
  sm: {
    wrapper: "h-12 w-12 rounded-2xl",
    icon: "text-lg",
    glow: "blur-lg",
  },
  md: {
    wrapper: "h-16 w-16 rounded-[20px]",
    icon: "text-2xl",
    glow: "blur-xl",
  },
  lg: {
    wrapper: "h-24 w-24 rounded-[28px]",
    icon: "text-4xl",
    glow: "blur-2xl",
  },
};

export default function AIModelLogo({
  icon = "✦",
  label,
  size = "md",
  animated = true,
  className = "",
}: AIModelLogoProps) {
  const s = sizes[size];

  return (
    <div className={`relative inline-flex items-center gap-3 ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-[inherit] bg-violet-500/30 blur-2xl"
        animate={
          animated
            ? { opacity: [0.35, 0.7, 0.35], scale: [0.9, 1.08, 0.9] }
            : undefined
        }
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`relative ${s.wrapper} grid place-items-center overflow-hidden border border-white/15 bg-white/[0.07] shadow-2xl backdrop-blur-xl`}
        whileHover={animated ? { scale: 1.08, rotate: 3 } : undefined}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
      >
        <motion.div
          className="absolute inset-[-40%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(167,139,250,.9)_90deg,transparent_180deg)]"
          animate={animated ? { rotate: 360 } : undefined}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-[1px] rounded-[inherit] bg-[#09090b]" />

        <motion.div
          className={`relative z-10 ${s.icon} font-semibold text-white`}
          animate={
            animated
              ? { y: [0, -3, 0], rotate: [0, -4, 0, 4, 0] }
              : undefined
          }
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>

        <motion.span
          className="absolute bottom-1.5 right-1.5 z-20 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#09090b]"
          animate={animated ? { opacity: [0.5, 1, 0.5], scale: [0.85, 1.15, 0.85] } : undefined}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {label && (
        <div className="relative">
          <p className="text-sm font-semibold tracking-tight text-white">{label}</p>
          <p className="text-[11px] text-white/40">AI Model</p>
        </div>
      )}
    </div>
  );
}
