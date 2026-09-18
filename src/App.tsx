import AIModelCard from "./components/AIModelCard";

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
            AI Model Card
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/45">
            Independent, reusable animated component template. This playground
            exists only to test the current component.
          </p>
        </header>

        <section className="flex flex-wrap justify-center gap-8">
          {models.map((model) => (
            <AIModelCard key={model.name} {...model} />
          ))}
        </section>
      </div>
    </main>
  );
}