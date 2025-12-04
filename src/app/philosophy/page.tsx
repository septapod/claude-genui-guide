export default function PhilosophyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">
        Core Philosophy
      </h1>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        These principles come directly from Google Research&apos;s Generative UI
        paper (Leviathan et al., 2024). Following them is key to generating
        high-quality interactive experiences.
      </p>

      <div className="space-y-12">
        {/* Principle 1 */}
        <section className="border-l-4 border-blue-500 pl-6">
          <h2 className="text-xl font-bold mb-3">
            1. Build Interactive Apps First
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Even for simple queries that <em>could</em> be answered with static
            text, your primary goal is to create an interactive application.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-red-500 font-medium mb-2">
                  Don&apos;t: Static Text
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  &ldquo;What&apos;s the time?&rdquo; → Output text: &ldquo;The
                  current time is 3:45 PM&rdquo;
                </div>
              </div>
              <div>
                <div className="text-green-500 font-medium mb-2">
                  Do: Interactive App
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  &ldquo;What&apos;s the time?&rdquo; → Generate a functional,
                  visually appealing clock application with world time zones
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principle 2 */}
        <section className="border-l-4 border-purple-500 pl-6">
          <h2 className="text-xl font-bold mb-3">2. No Walls of Text</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Avoid long segments with lots of text. Instead, use interactive
            features and visual elements as much as possible.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Replace text blocks with:
            </p>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-purple-500">→</span> Interactive timelines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">→</span> Visual cards and
                grids
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">→</span> Tabbed interfaces
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">→</span> Expandable sections
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">→</span> Image galleries
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">→</span> Interactive maps
              </li>
            </ul>
          </div>
        </section>

        {/* Principle 3 */}
        <section className="border-l-4 border-green-500 pl-6">
          <h2 className="text-xl font-bold mb-3">
            3. Mandatory Fact Verification
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            When your prompt concerns specific entities (people, places,
            organizations) or requires factual data, using web search to gather
            and verify information is <strong>absolutely mandatory</strong>.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <span className="text-green-500 font-medium">✓</span> Do NOT
                rely on internal knowledge alone for entities
              </li>
              <li>
                <span className="text-green-500 font-medium">✓</span> All
                factual claims must be supported by search results
              </li>
              <li>
                <span className="text-green-500 font-medium">✓</span> Perform
                multiple searches if needed for confirmation
              </li>
              <li>
                <span className="text-green-500 font-medium">✓</span> Verify
                freshness for data that may have changed
              </li>
            </ul>
          </div>
        </section>

        {/* Principle 4 */}
        <section className="border-l-4 border-red-500 pl-6">
          <h2 className="text-xl font-bold mb-3">4. No Placeholders Ever</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            No placeholder controls, mock functionality, or dummy text data.
            Placeholders are <strong>absolutely forbidden</strong>.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <span className="text-red-500 font-medium">✗</span>{" "}
                &ldquo;Lorem ipsum&rdquo; or placeholder text
              </li>
              <li>
                <span className="text-red-500 font-medium">✗</span> Mock buttons
                that don&apos;t work
              </li>
              <li>
                <span className="text-red-500 font-medium">✗</span>{" "}
                &ldquo;[Image placeholder]&rdquo; divs
              </li>
              <li>
                <span className="text-red-500 font-medium">✗</span> Example or
                demo functionality
              </li>
            </ul>
            <p className="mt-3 text-sm">
              If an element lacks backend integration, remove it completely.
            </p>
          </div>
        </section>

        {/* Principle 5 */}
        <section className="border-l-4 border-orange-500 pl-6">
          <h2 className="text-xl font-bold mb-3">
            5. Implement Fully & Thoughtfully
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Implement complex functionality fully using JavaScript. Take your
            time to think carefully through the logic.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              For simulations, games, or interactive visualizations: write real,
              working code that handles all edge cases. Use{" "}
              <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">
                try...catch
              </code>{" "}
              blocks for error handling.
            </p>
          </div>
        </section>

        {/* Principle 6 */}
        <section className="border-l-4 border-teal-500 pl-6">
          <h2 className="text-xl font-bold mb-3">
            6. Handle Data Needs Creatively
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Start by fetching all the data you might need from search. Then
            design the UI around what you actually have.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 text-sm text-zinc-600 dark:text-zinc-400">
            <p className="font-medium mb-2">The Process:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Search for data first</li>
              <li>Design around the fetched data</li>
              <li>Never simulate or illustrate data</li>
              <li>If data isn&apos;t available, adjust the design</li>
            </ol>
          </div>
        </section>

        {/* Principle 7 */}
        <section className="border-l-4 border-pink-500 pl-6">
          <h2 className="text-xl font-bold mb-3">7. Quality & Depth</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Prioritize high-quality design, robust implementation, and feature
            richness. Create a real, fully functional app serving real data.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              Use Tailwind CSS effectively for modern, polished interfaces.
              Consider layout, typography, color schemes, spacing, and subtle
              animations. Aim for professional quality.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900">
        <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
          Source
        </h3>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          These principles are adapted from the system instructions in Appendix
          A.5 of &ldquo;Generative UI: LLMs are Effective UI Generators&rdquo;
          (Leviathan et al., 2024). See the{" "}
          <a
            href="https://generativeui.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            original research
          </a>{" "}
          for more details.
        </p>
      </div>
    </div>
  );
}
