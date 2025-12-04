export default function TroubleshootingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Troubleshooting</h1>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        Common issues and post-processing patterns for Generative UI. Based on
        the post-processors described in the Google Research paper.
      </p>

      {/* Common Issues */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Common Issues</h2>

        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">
              JavaScript Errors
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Even capable models occasionally produce JS errors. Common fixes:
            </p>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">→</span>
                <span>
                  <strong>Missing DOMContentLoaded</strong>: Ensure scripts wait
                  for DOM to be ready before manipulating elements.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">→</span>
                <span>
                  <strong>Undefined variables</strong>: Check that all variables
                  are declared before use.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">→</span>
                <span>
                  <strong>Event listener issues</strong>: Verify elements exist
                  before attaching listeners.
                </span>
              </li>
            </ul>
            <div className="mt-4 bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-zinc-100">{`// Fix: Wrap in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('myElement');
  if (element) {
    element.addEventListener('click', handleClick);
  }
});`}</pre>
            </div>
          </div>

          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-3 text-orange-600 dark:text-orange-400">
              CSS Issues
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Tailwind CSS problems and fixes:
            </p>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">→</span>
                <span>
                  <strong>Missing Tailwind CDN</strong>: Ensure the script tag is
                  in the head.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">→</span>
                <span>
                  <strong>Circular dependencies</strong>: Avoid conflicting utility
                  classes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">→</span>
                <span>
                  <strong>Custom CSS conflicts</strong>: Check specificity when
                  mixing custom CSS with Tailwind.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">
              Image Issues
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Problems with generated or fetched images:
            </p>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">→</span>
                <span>
                  <strong>Hallucinated asset URLs</strong>: Always use generate_image
                  or verified search results, never invented URLs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">→</span>
                <span>
                  <strong>Character inconsistency</strong>: Include full character
                  descriptions in every image prompt.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">→</span>
                <span>
                  <strong>Wrong aspect ratio</strong>: Specify aspect ratio in
                  generate_image calls.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Post-Processors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Post-Processing Patterns
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          The Google Research implementation uses lightweight post-processors to
          fix common issues. Here are patterns you can apply:
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold mb-2">
              1. HTML Attribute Escaping
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Ensure text in HTML attributes is properly escaped. Watch for
              quotes and special characters in alt text, titles, etc.
            </p>
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border-l-4 border-green-500">
            <h3 className="font-semibold mb-2">
              2. API Key Injection
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              If using maps or other APIs, replace placeholder API keys with real
              ones in a post-processing step rather than hardcoding.
            </p>
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-semibold mb-2">
              3. Error Reporting Injection
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Inject JavaScript to detect and report client-side errors for
              debugging.
            </p>
            <div className="mt-2 bg-zinc-900 rounded-lg p-3 overflow-x-auto">
              <pre className="text-xs text-zinc-100">{`window.onerror = (msg, url, line) => {
  console.error(\`Error: \${msg} at \${url}:\${line}\`);
};`}</pre>
            </div>
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border-l-4 border-orange-500">
            <h3 className="font-semibold mb-2">
              4. Citation Cleanup
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Remove incorrectly generated citations within JavaScript code
              that may cause syntax errors.
            </p>
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border-l-4 border-pink-500">
            <h3 className="font-semibold mb-2">
              5. Icon Fallbacks
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Replace hallucinated icon URLs with working alternatives or emoji
              fallbacks.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quality Checklist</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Before considering a Generative UI output complete, verify:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-900">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">
              Functionality
            </h3>
            <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                All buttons and controls work
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                No console errors
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                Animations are smooth
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                Data is accurate (fact-checked)
              </li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
              Visuals
            </h3>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                All images load correctly
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                Responsive on mobile/tablet
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                Consistent styling throughout
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                No placeholder content
              </li>
            </ul>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-900">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
              Content
            </h3>
            <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                No &ldquo;lorem ipsum&rdquo; text
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                Facts verified via search
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                External links open in new tab
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                No mock functionality
              </li>
            </ul>
          </div>

          <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-900">
            <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">
              Interactivity
            </h3>
            <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                App responds to user input
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                State changes work correctly
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                Error states handled
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" readOnly />
                Loading states if applicable
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Help */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Getting Help</h2>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            If you&apos;re encountering issues not covered here:
          </p>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>
              • Check the{" "}
              <a
                href="https://github.com/septapod/claude-genui-guide/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub Issues
              </a>{" "}
              for known problems
            </li>
            <li>
              • Review the{" "}
              <a
                href="https://generativeui.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                original research
              </a>{" "}
              for additional context
            </li>
            <li>
              • Open a new issue with reproduction steps and generated HTML
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
