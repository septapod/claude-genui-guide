export default function TechnicalSpecPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">
        Technical Specification
      </h1>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        Technical requirements and patterns for generating high-quality
        interactive HTML experiences.
      </p>

      {/* HTML Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">HTML Structure</h2>
        <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-zinc-100">{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your App Title</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Custom CSS here */
  </style>
</head>
<body class="bg-white dark:bg-zinc-950">
  <!-- Your content here -->

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Your JavaScript here
    });
  </script>
</body>
</html>`}</pre>
        </div>
      </section>

      {/* Tailwind CSS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Tailwind CSS</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Use Tailwind CSS via the Play CDN for styling. Include this in the{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">
            &lt;head&gt;
          </code>
          :
        </p>
        <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-zinc-100">{`<script src="https://cdn.tailwindcss.com"></script>`}</pre>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
            <h3 className="font-semibold mb-2">Common Patterns</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>
                • Flexbox:{" "}
                <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">
                  flex items-center justify-center
                </code>
              </li>
              <li>
                • Grid:{" "}
                <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">
                  grid grid-cols-3 gap-4
                </code>
              </li>
              <li>
                • Responsive:{" "}
                <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">
                  md:flex-row flex-col
                </code>
              </li>
              <li>
                • Dark mode:{" "}
                <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">
                  dark:bg-zinc-900
                </code>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
            <h3 className="font-semibold mb-2">Color Schemes</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>
                • Gradients:{" "}
                <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">
                  bg-gradient-to-r from-blue-500 to-purple-500
                </code>
              </li>
              <li>
                • Hover states:{" "}
                <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">
                  hover:bg-blue-600 transition-colors
                </code>
              </li>
              <li>
                • Shadows:{" "}
                <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">
                  shadow-lg shadow-blue-500/20
                </code>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Image Handling */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Image Handling</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-900">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
              Use generate_image for:
            </h3>
            <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>• Creative illustrations</li>
              <li>• Abstract concepts</li>
              <li>• Famous landmarks (Eiffel Tower, etc.)</li>
              <li>• Story characters (with full descriptions)</li>
              <li>• Background images</li>
              <li>• Icons and decorative elements</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Use web search for:
            </h3>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Specific named people</li>
              <li>• Non-famous places</li>
              <li>• Product photos</li>
              <li>• Real photographs needed</li>
              <li>• Current events imagery</li>
              <li>• Brand/logo images</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Character Consistency in Stories</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
            When generating multiple images of the same character, include the
            full character description in every prompt:
          </p>
          <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-zinc-100">{`// Define character once
const alienDescription = "a green alien with three eyes and an antennae, 3 feet tall, wearing silver short cloths";

// Include in EVERY image prompt
generate_image({
  prompt: \`\${alienDescription}, standing on the moon looking at stars, cartoon style\`
});

generate_image({
  prompt: \`\${alienDescription}, waving hello to a red-headed boy, cartoon style\`
});`}</pre>
          </div>
        </div>
      </section>

      {/* JavaScript Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">JavaScript Patterns</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">DOM Ready Pattern</h3>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-zinc-100">{`document.addEventListener('DOMContentLoaded', () => {
  // Initialize your app here
  initializeApp();
});`}</pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Error Handling</h3>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-zinc-100">{`try {
  // Complex logic here
  performCalculation();
} catch (error) {
  console.error('Calculation failed:', error);
  showErrorMessage('Something went wrong');
}`}</pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Dynamic Clock Example</h3>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-zinc-100">{`function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call`}</pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Canvas Animation Example</h3>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-zinc-100">{`const canvas = document.getElementById('simulation');
const ctx = canvas.getContext('2d');

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw your simulation
  particles.forEach(particle => {
    particle.update();
    particle.draw(ctx);
  });

  requestAnimationFrame(animate);
}

animate();`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Audio */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Audio Integration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Text-to-Speech</h3>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-zinc-100">{`function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}`}</pre>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Background Music (Tone.js)</h3>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-zinc-100">{`<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"></script>
<script>
const synth = new Tone.Synth().toDestination();

function playNote(note) {
  synth.triggerAttackRelease(note, "8n");
}
</script>`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Forbidden Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
          Forbidden Patterns
        </h2>
        <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-6 border border-red-200 dark:border-red-900">
          <ul className="space-y-3 text-red-800 dark:text-red-200">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>
                <strong>localStorage/sessionStorage</strong> - Do not use storage
                mechanisms
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>
                <strong>window.parent/window.top</strong> - JavaScript must be
                self-contained
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>
                <strong>Placeholder divs for images</strong> - Use actual img tags
                with real sources
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>
                <strong>Lorem ipsum</strong> - All text must be real, relevant
                content
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>
                <strong>Mock functionality</strong> - All buttons and controls must
                work
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Responsive Design */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Responsive Design</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Generated UIs may be viewed on any device. Use Tailwind&apos;s responsive
          prefixes:
        </p>
        <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-zinc-100">{`<!-- Mobile-first approach -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="w-full md:w-1/2">Sidebar</div>
  <div class="w-full md:w-1/2">Content</div>
</div>

<!-- Breakpoints -->
<!-- sm: 640px -->
<!-- md: 768px -->
<!-- lg: 1024px -->
<!-- xl: 1280px -->
<!-- 2xl: 1536px -->`}</pre>
        </div>
      </section>
    </div>
  );
}
