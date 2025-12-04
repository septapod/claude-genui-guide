export default function ExamplesPage() {
  const examples = [
    {
      title: "Interactive Clock",
      prompt: '"What\'s the time?"',
      description:
        "A dynamic clock application showing local time with world time zones, styled with gradients and animations.",
      features: [
        "Real-time updates using setInterval",
        "Multiple time zones",
        "Analog and digital display options",
        "Dark/light mode support",
      ],
      category: "Utility",
    },
    {
      title: "Fractal Explorer",
      prompt: '"Explain fractals - go really in depth"',
      description:
        "An interactive educational app with Mandelbrot set visualization, dimension calculator, and Koch snowflake builder.",
      features: [
        "Canvas-based fractal rendering",
        "Interactive zoom and pan",
        "Parameter sliders for iterations",
        "Educational timeline",
      ],
      category: "Education",
    },
    {
      title: "Memory Matching Game",
      prompt:
        '"Create a memory game with funny faces"',
      description:
        "A flip-card memory game with generated character portraits and score tracking.",
      features: [
        "CSS 3D card flip animations",
        "AI-generated character images",
        "Move counter and timer",
        "Victory celebration effects",
      ],
      category: "Game",
    },
    {
      title: "Travel Planner",
      prompt:
        '"I\'m visiting Singapore for 3 days - help me plan sightseeing"',
      description:
        "An interactive itinerary with embedded map, day-by-day breakdown, and local tips.",
      features: [
        "Embedded interactive map",
        "Searchable points of interest",
        "Weather integration",
        "Restaurant recommendations",
      ],
      category: "Travel",
    },
    {
      title: "Biography Explorer",
      prompt: '"Tell me about Marie Curie"',
      description:
        "A rich profile with interactive timeline, family tree visualization, and achievement showcase.",
      features: [
        "Interactive timeline",
        "Image search integration",
        "Tabbed content sections",
        "Related figures network",
      ],
      category: "Biography",
    },
    {
      title: "Kitchen Chemistry Lab",
      prompt: '"Fun home chemistry experiments for kids"',
      description:
        "An educational app with step-by-step experiments, safety warnings, and scientific explanations.",
      features: [
        "Ingredient checklists",
        "Step-by-step instructions",
        "Safety warnings",
        "Science explanations",
      ],
      category: "Education",
    },
    {
      title: "Ant Colony Simulation",
      prompt: '"Ant colony"',
      description:
        "A 2D simulation showing ant foraging behavior with adjustable parameters.",
      features: [
        "Canvas-based animation",
        "Adjustable ant count",
        "Food source placement",
        "Pheromone trail visualization",
      ],
      category: "Simulation",
    },
    {
      title: "Product Comparison",
      prompt: '"Which phone is the best?"',
      description:
        "A comparison tool with feature matrices, ratings, and pros/cons analysis.",
      features: [
        "Side-by-side comparison",
        "Rating visualizations",
        "Price tracking",
        "User review summaries",
      ],
      category: "Comparison",
    },
  ];

  const categories = [...new Set(examples.map((e) => e.category))];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Examples</h1>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        Examples of Generative UI outputs based on various prompts. These
        demonstrate the types of interactive experiences Claude can create.
      </p>

      <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Note:</strong> These examples are based on the PAGEN dataset
          from Google Research. See the original interactive demos at{" "}
          <a
            href="https://generativeui.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            generativeui.github.io
          </a>
        </p>
      </div>

      {/* Category filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Examples grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {examples.map((example, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold">{example.title}</h3>
              <span className="px-2 py-1 rounded text-xs font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {example.category}
              </span>
            </div>

            <div className="mb-4 p-2 bg-zinc-200 dark:bg-zinc-800 rounded text-sm font-mono">
              {example.prompt}
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
              {example.description}
            </p>

            <div>
              <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                {example.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-12 text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl border border-blue-200 dark:border-blue-900">
        <h2 className="text-2xl font-bold mb-4">Try It Yourself</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
          With the MCP server installed and the system prompt configured, ask
          Claude to create any interactive experience you can imagine.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/mcp-setup"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Setup MCP Server
          </a>
          <a
            href="/system-prompt"
            className="inline-flex items-center px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            Get System Prompt
          </a>
        </div>
      </div>
    </div>
  );
}
