import AIModelCard from "./components/AIModelCard";
import AIModelLogo from "./components/AIModelLogo";

const models = [
  {
    name: "CodeCNT Pro",
    description: "Advanced AI model for coding and complex reasoning.",
    icon: "✦",
    badge: "ONLINE",
    capabilities: ["Coding", "Reasoning", "Fast"],
  },
  {
    name: "CodeCNT Vision",
    description: "AI model for images, screenshots and visual analysis.",
    icon: "◈",
    badge: "NEW",
    capabilities: ["Vision", "Images", "Analysis"],
  },
  {
    name: "CodeCNT Creative",
    description: "Creative AI for writing, ideas and content generation.",
    icon: "✧",
    badge: "BETA",
    capabilities: ["Writing", "Creative", "Ideas"],
  },
];

export default function App() {
  return (
    <main className="min-h-screen px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300/70">
            CodeCNT UI Templates
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            AI Model Components
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/45">
            Reusable components are tested independently here before being
            moved into production projects.
          </p>
        </header>

        <section className="mb-20 rounded-[32px] border border-white/10 bg-white/[0.025] p-10">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/60">
              Component #2
            </p>
            <h2 className="mt-2 text-2xl font-semibold">AI Model Logo</h2>
            <p className="mt-2 text-sm text-white/40">
              Animated standalone logo with glow, rotating border and online pulse.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-12">
            <AIModelLogo size="sm" icon="✦" label="CodeCNT Pro" />
            <AIModelLogo size="md" icon="◈" label="CodeCNT Vision" />
            <AIModelLogo size="lg" icon="✧" label="CodeCNT Creative" />
            <AIModelLogo size="md" icon="AI" animated={false} label="Static Mode" />
          </div>
        </section>

        <section>
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/60">
              Component #1
            </p>
            <h2 className="mt-2 text-2xl font-semibold">AI Model Card</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {models.map((model) => (
              <AIModelCard key={model.name} {...model} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
