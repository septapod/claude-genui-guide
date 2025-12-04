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

      {/* The Problem / The Vision */}
      <section className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          What is Generative UI?
        </h2>

        <div className="mb-8">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            When you ask an AI agent a question today, you typically get <strong>markdown</strong> &mdash;
            headers, bullet points, code blocks. Google Research calls this &ldquo;walls of text.&rdquo;
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            <strong>Generative UI</strong> is different. Instead of text, the AI generates a
            <strong> complete interactive web application</strong> tailored to your question.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <th className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100">You Ask</th>
                <th className="py-3 px-4 font-semibold text-zinc-500">Traditional Output</th>
                <th className="py-3 px-4 font-semibold text-blue-600 dark:text-blue-400">Generative UI Output</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-4 px-4 font-medium">&ldquo;What time is it?&rdquo;</td>
                <td className="py-4 px-4 text-zinc-500">&ldquo;The current time is 3:45 PM EST&rdquo;</td>
                <td className="py-4 px-4 text-zinc-600 dark:text-zinc-400">A live animated clock with world time zones, analog/digital toggle, dark mode</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-4 px-4 font-medium">&ldquo;Tell me about Marie Curie&rdquo;</td>
                <td className="py-4 px-4 text-zinc-500">Paragraphs of text with headers</td>
                <td className="py-4 px-4 text-zinc-600 dark:text-zinc-400">Interactive biography with timeline, family tree visualization, achievement gallery</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="py-4 px-4 font-medium">&ldquo;Plan my Singapore trip&rdquo;</td>
                <td className="py-4 px-4 text-zinc-500">Bullet points of recommendations</td>
                <td className="py-4 px-4 text-zinc-600 dark:text-zinc-400">Interactive map app with day-by-day tabs, generated landmark images, weather widget</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium">&ldquo;Explain fractals&rdquo;</td>
                <td className="py-4 px-4 text-zinc-500">Text explanation with maybe a linked image</td>
                <td className="py-4 px-4 text-zinc-600 dark:text-zinc-400">Interactive Mandelbrot explorer with zoom controls, parameter sliders, educational timeline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How It All Connects */}
      <section className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          How It Works
        </h2>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Three components work together to enable Generative UI. Whether you&apos;re a developer
          setting this up or someone using an AI agent like Claude Code, here&apos;s what happens:
        </p>

        {/* Flow Diagram */}
        <div className="space-y-4 mb-12">
          {/* Step 1: User Prompt */}
          <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</span>
              <h3 className="text-lg font-semibold">Your Request</h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 ml-11">
              You ask Claude something: <span className="font-mono bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded text-sm">&ldquo;Create a memory matching game with funny faces&rdquo;</span>
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Step 2: System Prompt */}
          <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">2</span>
              <h3 className="text-lg font-semibold">System Prompt (The &ldquo;Philosophy&rdquo;)</h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 ml-11 mb-3">
              Special instructions teach Claude to think differently:
            </p>
            <ul className="ml-11 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">&#8226;</span>
                <span>&ldquo;What interactive experience would serve this request best?&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">&#8226;</span>
                <span>&ldquo;Never output markdown walls of text&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">&#8226;</span>
                <span>&ldquo;Generate complete, working HTML with real content&rdquo;</span>
              </li>
            </ul>
            <p className="ml-11 mt-3 text-sm">
              <Link href="/system-prompt" className="text-purple-600 dark:text-purple-400 hover:underline">
                Get the system prompt &rarr;
              </Link>
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Step 3: MCP Tools */}
          <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">3</span>
              <h3 className="text-lg font-semibold">MCP Server (The &ldquo;Tools&rdquo;)</h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 ml-11 mb-3">
              While building your experience, Claude uses special tools:
            </p>
            <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-green-100 dark:border-green-900">
                <div className="font-mono text-sm text-green-600 dark:text-green-400">generate_image</div>
                <div className="text-xs text-zinc-500 mt-1">Creates custom images via Gemini AI for your game&apos;s funny face cards</div>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-green-100 dark:border-green-900">
                <div className="font-mono text-sm text-green-600 dark:text-green-400">serve_html</div>
                <div className="text-xs text-zinc-500 mt-1">Opens a preview in your browser so you can see and interact with the result</div>
              </div>
            </div>
            <p className="ml-11 mt-3 text-sm">
              <Link href="/mcp-setup" className="text-green-600 dark:text-green-400 hover:underline">
                Setup the MCP server &rarr;
              </Link>
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Step 4: Output */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 border border-blue-200 dark:border-blue-900">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-sm">4</span>
              <h3 className="text-lg font-semibold">The Result: A Complete Interactive Experience</h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 ml-11 mb-3">
              Instead of text describing a game, you get an actual playable memory game:
            </p>
            <ul className="ml-11 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-green-500">&#10003;</span>
                CSS 3D card flip animations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">&#10003;</span>
                AI-generated character images on each card
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">&#10003;</span>
                Move counter and timer
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">&#10003;</span>
                Victory celebration effects
              </li>
            </ul>
            <p className="ml-11 mt-3 text-sm">
              <Link href="/examples" className="text-blue-600 dark:text-blue-400 hover:underline">
                See more examples &rarr;
              </Link>
            </p>
          </div>
        </div>

        {/* Key Insight Box */}
        <div className="p-6 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900">
          <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
            The Key Insight
          </h3>
          <p className="text-amber-700 dark:text-amber-300">
            The <strong>MCP server provides tools</strong>, but Claude also needs the <strong>system prompt</strong> to
            know it should generate interactive HTML instead of markdown. Both pieces work together &mdash;
            the tools give Claude the <em>ability</em>, the prompt gives it the <em>intent</em>.
          </p>
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
                Add our reference prompt to your Claude configuration or paste it at the start of a conversation.
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
                Ask Claude to create interactive experiences. The output will be complete HTML you can open in any browser.
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
