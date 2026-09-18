import type { ReactNode } from "react";
import { motion } from "motion/react";

export interface AIModelCardProps {
  name?: string;
  description?: string;
  icon?: ReactNode;
  badge?: string;
  capabilities?: string[];
  buttonText?: string;
  onClick?: () => void;
}

export default function AIModelCard({
  name = "CodeCNT AI",
  description = "A modern AI model for coding, reasoning and creative work.",
  icon = "✦",
  badge = "ONLINE",
  capabilities = ["Coding", "Reasoning", "Creative"],
  buttonText = "Try Model",
  onClick,
}: AIModelCardProps) {
  return (
    <motion.article initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -8, scale: 1.012 }} transition={{ duration: 0.45, ease: "easeOut" }} className="group relative w-full max-w-[390px]">
      <motion.div animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.97, 1.02, 0.97] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-violet-600/30 via-cyan-400/20 to-fuchsia-600/30 blur-xl" />
      <div className="relative overflow-hidden rounded-[27px] p-px">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,#8b5cf6_48%,#22d3ee_52%,transparent_60%,transparent_100%)]" />
        <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#09090d]/95 p-6 shadow-2xl backdrop-blur-xl">
          <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative flex items-center justify-between">
            <motion.div animate={{ y: [0, -4, 0, 4, 0], rotate: [0, 3, -3, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.08, rotate: 7 }} className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
              <motion.div animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-1 rounded-2xl bg-violet-500/30 blur-xl" />
              <span className="relative z-10 text-3xl text-white">{icon}</span>
            </motion.div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-medium tracking-wide text-emerald-300">
              <motion.span animate={{ opacity: [0.35, 1, 0.35], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="h-1.5 w-1.5 rounded-full bg-current" />
              {badge}
            </div>
          </div>

          <div className="relative mt-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">AI MODEL</p>
            <div className="relative mt-2 overflow-hidden">
              <h2 className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-2xl font-bold tracking-tight text-transparent">{name}</h2>
              <motion.div animate={{ x: ["-120%", "220%"] }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }} className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm" />
            </div>
            <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/45">{description}</p>
          </div>

          <div className="relative mt-6 flex flex-wrap gap-2">
            {capabilities.map((capability, index) => (
              <motion.span key={capability} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.08, duration: 0.3 }} whileHover={{ y: -2, scale: 1.04 }} className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-3 py-1.5 text-xs text-white/55">
                {capability}
              </motion.span>
            ))}
          </div>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-white/30">Response</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-white/70"><span>⚡</span> Ultra fast</p>
            </div>

            <motion.button type="button" onClick={onClick} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} className="relative overflow-hidden rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              <motion.span animate={{ x: ["-150%", "200%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }} className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              <span className="relative z-10">{buttonText}</span>
            </motion.button>
          </div>

          <motion.div animate={{ opacity: [0.2, 0.7, 0.2], scaleX: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
        </div>
      </div>
    </motion.article>
  );
}