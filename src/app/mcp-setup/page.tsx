export default function McpSetupPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">MCP Server Setup</h1>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        The Generative UI MCP server provides Claude with image generation and
        HTML preview capabilities. Follow these steps to set it up.
      </p>

      {/* Prerequisites */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
          <li className="flex items-center gap-2">
            <span className="text-green-500">&#10003;</span>
            Node.js 18 or higher
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">&#10003;</span>
            Claude Code CLI installed
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">&#10003;</span>
            Gemini API key from{" "}
            <a
              href="https://aistudio.google.com/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Google AI Studio
            </a>
          </li>
        </ul>
      </section>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Installation</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm text-blue-600 dark:text-blue-400">
                1
              </span>
              Clone the repository
            </h3>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-zinc-100">
                {`git clone https://github.com/septapod/claude-genui-guide.git
cd claude-genui-guide/mcp-server`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm text-blue-600 dark:text-blue-400">
                2
              </span>
              Install dependencies
            </h3>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-zinc-100">{`npm install`}</pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm text-blue-600 dark:text-blue-400">
                3
              </span>
              Build the server
            </h3>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-zinc-100">{`npm run build`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Configuration</h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Add the MCP server to your Claude Code configuration. Edit your{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">
            ~/.claude/settings.json
          </code>
          :
        </p>

        <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-zinc-100">{`{
  "mcpServers": {
    "generative-ui": {
      "command": "node",
      "args": ["/path/to/claude-genui-guide/mcp-server/dist/index.js"],
      "env": {
        "GEMINI_API_KEY": "your_gemini_api_key_here"
      }
    }
  }
}`}</pre>
        </div>

        <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-900">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
            Important
          </h4>
          <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
            <li>• Replace the path with the actual location of the MCP server</li>
            <li>• Never commit your API key to version control</li>
            <li>
              • Alternatively, set <code>GEMINI_API_KEY</code> as an environment
              variable
            </li>
          </ul>
        </div>
      </section>

      {/* Available Tools */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Available Tools</h2>

        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              generate_image
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Generate images using Gemini Imagen 3 for embedding in HTML.
            </p>
            <div className="space-y-2">
              <div>
                <span className="text-sm font-medium">Parameters:</span>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>
                    • <code>prompt</code> (required): Image description
                  </li>
                  <li>
                    • <code>aspect_ratio</code> (optional): 1:1, 16:9, 9:16, etc.
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-sm font-medium">Returns:</span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 ml-2">
                  Base64 data URL for direct embedding
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">
              serve_html
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Save HTML to a temp file and serve it locally for preview.
            </p>
            <div className="space-y-2">
              <div>
                <span className="text-sm font-medium">Parameters:</span>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>
                    • <code>html_content</code> (required): Complete HTML document
                  </li>
                  <li>
                    • <code>filename</code> (optional): File name without extension
                  </li>
                  <li>
                    • <code>port</code> (optional): Server port (default: 3333)
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-sm font-medium">Returns:</span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 ml-2">
                  localhost URL to open in browser
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Usage Example</h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Once configured, Claude can use these tools automatically when
          generating UI:
        </p>

        <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-zinc-100">{`// Claude will automatically call generate_image when it needs an image
User: "Create an interactive page about space exploration"

// Claude internally calls:
generate_image({
  prompt: "futuristic space station orbiting Earth, digital art style,
           blue and white color scheme",
  aspect_ratio: "16:9"
})

// And embeds the result in the HTML:
<img src="data:image/png;base64,..." alt="Space station" />`}</pre>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>

        <div className="space-y-4">
          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
            <h3 className="font-semibold mb-2">Server not connecting</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>• Verify the path in your settings.json is correct</li>
              <li>• Make sure you ran `npm run build` successfully</li>
              <li>• Check that Node.js 18+ is installed</li>
            </ul>
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
            <h3 className="font-semibold mb-2">Image generation failing</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>• Verify your GEMINI_API_KEY is set correctly</li>
              <li>• Check your API quota at Google AI Studio</li>
              <li>• Ensure prompts don&apos;t violate content policies</li>
            </ul>
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
            <h3 className="font-semibold mb-2">HTML preview not loading</h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>• Check if port 3333 is available</li>
              <li>• Try specifying a different port</li>
              <li>• Verify firewall settings</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
