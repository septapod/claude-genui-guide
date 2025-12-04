import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Generative UI
          </span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          A guide for Claude coding agents to generate rich, interactive HTML
          experiences instead of markdown &ldquo;walls of text&rdquo;
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/system-prompt"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Get the System Prompt
          </Link>
          <Link
            href="/mcp-setup"
            className="inline-flex items-center px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            Setup MCP Server
          </Link>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-100 dark:border-blue-900">
          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            82.8%
          </div>
          <div className="mt-2 text-zinc-600 dark:text-zinc-400">
            User preference over markdown output
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-100 dark:border-purple-900">
          <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
            44%
          </div>
          <div className="mt-2 text-zinc-600 dark:text-zinc-400">
            Comparable to human expert results
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/30 dark:to-orange-950/30 border border-pink-100 dark:border-pink-900">
          <div className="text-4xl font-bold text-pink-600 dark:text-pink-400">
            1710.7
          </div>
          <div className="mt-2 text-zinc-600 dark:text-zinc-400">
            ELO score (vs human expert 1756.0)
          </div>
        </div>
      </div>

      {/* What is Generative UI */}
      <section className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          What is Generative UI?
        </h2>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            <strong>Generative UI</strong> is a paradigm where AI models
            generate not just content, but the entire user interface. Instead of
            outputting markdown &ldquo;walls of text,&rdquo; the model creates
            custom interactive experiences including:
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-600 dark:text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="text-green-500">&#10003;</span> Rich formatting
              and layouts
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">&#10003;</span> Interactive
              widgets and controls
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">&#10003;</span> Dynamic images
              and visualizations
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">&#10003;</span> Maps and
              geospatial data
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">&#10003;</span> Games and
              simulations
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">&#10003;</span> Audio and
              multimedia
            </li>
          </ul>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          How It Works (3 Components)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="text-3xl mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Tools (MCP Server)</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Server endpoints providing image generation and web search
              capabilities that Claude can invoke during generation.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="text-3xl mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">System Instructions</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              ~3K words of carefully crafted prompts covering philosophy,
              examples, planning guidelines, and technical specifications.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="text-3xl mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Post-Processors</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Lightweight fixes for common JS/CSS/HTML errors that even the best
              models occasionally produce.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Quick Start</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold">Install the MCP Server</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Provides Claude with image generation (Gemini Imagen 3) and HTML
                preview tools.
              </p>
              <Link
                href="/mcp-setup"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Setup instructions &rarr;
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold">Copy the System Prompt</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Add our reference prompt to your Claude configuration or
                project.
              </p>
              <Link
                href="/system-prompt"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Get the prompt &rarr;
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold">Start Generating</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Ask Claude to create interactive experiences instead of static
                text.
              </p>
              <Link
                href="/examples"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                See examples &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Citation</h2>
        <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 font-mono text-sm overflow-x-auto">
          <pre className="text-zinc-700 dark:text-zinc-300">{`@article{leviathan2024generativeui,
  title={Generative UI: LLMs are Effective UI Generators},
  author={Leviathan, Yaniv and Valevski, Dani and Kalman, Matan
          and Lumen, Danny and Segalis, Eyal and Molad, Eyal
          and Pasternak, Shlomi and Natchu, Vishnu and Nygaard, Valerie
          and Venkatachary, Srinivasan and Manyika, James and Matias, Yossi},
  journal={Preprint},
  year={2024},
  institution={Google Research}
}`}</pre>
        </div>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
          This guide is based on the research paper above. Interactive examples
          and original results available at{" "}
          <a
            href="https://generativeui.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            generativeui.github.io
          </a>
          .
        </p>
      </section>
    </div>
  );
}
