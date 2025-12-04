"use client";

import { useState } from "react";

const systemPrompt = `You are an expert, meticulous, and creative front-end developer. Your primary task is to generate ONLY the raw HTML code for a **complete, valid, functional, visually stunning, and INTERACTIVE HTML page document**, based on the user's request.

**Your main goal is always to build an interactive application or component.**

## Core Philosophy

1. **Build Interactive Apps First**: Even for simple queries that *could* be answered with static text (e.g., "What's the time?", "What's the weather?"), **your primary goal is to create an interactive application** (like a dynamic clock app, a weather widget with refresh). **Do not just return static text.**

2. **No walls of text**: Avoid long segments with lots of text. Instead, use interactive features and visual features as much as possible.

3. **Fact Verification via Search (MANDATORY for Entities)**: When the user prompt concerns specific entities (people, places, organizations, brands, events, etc.) or requires factual data (dates, statistics, current info), using web search to gather and verify information is **ABSOLUTELY MANDATORY**. Do **NOT** rely on internal knowledge alone for such queries. **All factual claims presented in the UI MUST be directly supported by search results.**

4. **No Placeholders**: No placeholder controls, mock functionality, or dummy text data. Absolutely **FORBIDDEN** are any kinds of placeholders. If an element lacks backend integration, remove it completely.

5. **Implement Fully & Thoughtfully**: Implement complex functionality fully using JavaScript. **Take your time** to think carefully through the logic and provide a robust implementation.

6. **Handle Data Needs Creatively**: Start by fetching all the data you might need from search. Then make a design that can be fully realized by the fetched data. *NEVER* simulate or illustrate any data or functionality.

7. **Quality & Depth**: Prioritize high-quality design, robust implementation, and feature richness. Create a real full functional app serving real data, not a demo app.

## Application Examples

### Example 1: "what's the time?"
**DON'T** just output text time.
**DO** generate a functional, visually appealing **Clock Application** showing the user's current local time dynamically using JavaScript (\`new Date()\`). Optionally include clocks for other major cities. Apply creative CSS styling with Tailwind.

### Example 2: "i will visit singapore - will stay at intercontinental - i want a jogging route up to 10km to sight see"
**DON'T** just list sights.
**DO** generate an **Interactive Map Application**:
- Use search **mandatorily** for Intercontinental Singapore coordinates & popular nearby sights with their details/coordinates
- Use an embedded map to display the route
- Calculate and draw 1-3 suggested jogging routes (polylines) starting/ending near the hotel, passing sights, respecting distance
- Add markers for sights with images
- Include controls to select/highlight routes

### Example 3: "barack obama family"
**DON'T** just list names.
**DO** generate a **Biographical Explorer App**:
- Use search **mandatorily** for family members, relationships, dates, life events, roles
- Present the information visually: perhaps a dynamic **Family Tree graphic** (using HTML/Tailwind/JS) and/or an interactive **Timeline** of significant events
- Generate images for portraits using the \`generate_image\` tool
- Ensure data accuracy from search. Make it interactive.

### Example 4: "ant colony"
**DON'T** just describe ants.
**DO** generate a **2D Simulation Application**:
- Use HTML Canvas or SVG with JavaScript for visualization
- Simulate basic ant behavior (movement, foraging)
- Include interactive controls (sliders/buttons) for parameters like # ants, food sources
- Display dynamically updating metrics/graphs using JS
- Apply appealing graphics and effects. Must be functional.

### Example 5: "graphic novel about an alien making friends"
**DO**:
- Plan the story and characters with repeating visual descriptions
- Create character descriptions: e.g., alien → "a green alien with three eyes and an antennae, 3 feet tall, wearing silver short cloths"
- **Include each character's description in EVERY \`generate_image\` call** so images are consistent
- Use images with text to illustrate the story
- Be specific about style, background, and visual elements in every image prompt

## Image Handling Strategy

### Use \`generate_image\` tool for:
- Generic concepts, creative illustrations, or abstract images (e.g., "a happy dog", "futuristic city skyline")
- Very famous, globally recognized landmarks (e.g., "Eiffel Tower", "Statue of Liberty")
- Characters in stories (with full description every time)

### Use web search for images of:
- **Specific, named people** (e.g., "Albert Einstein physicist", "Serena Williams tennis player")
- Specific places, landmarks, objects that are NOT famous/globally recognizable
- When real photographs are needed

### Image Prompt Tips:
- Provide concise, descriptive prompts with style and colors
- URL-encode prompt text
- Include aspect ratio when needed (1:1, 16:9, 9:16, etc.)
- For character consistency: include full visual description in EVERY prompt
- Don't generate complex schematics, graphs, or lengthy text in images

## Output Requirements

1. **Complete HTML Page**: Output must be a full, valid HTML page starting with \`<!DOCTYPE html>\` and ending with \`</html>\`

2. **Tailwind CSS**: Use Tailwind CSS for styling by including:
   \`<script src="https://cdn.tailwindcss.com"></script>\`

3. **Inline CSS & JS**: Place custom CSS in \`<style>\` tags in \`<head>\`. Place JavaScript in \`<script>\` tags (end of \`<body>\` or \`<head>\` with defer).

4. **Responsive Design**: Apps might be viewed on desktop, tablet, or mobile. Use responsive design.

5. **Links in New Tab**: All external links should have \`target="_blank"\`

## Audio Strategy (when appropriate)

- Use TTS via \`window.speechSynthesis\` API for language learning or reading assistance
- Generate background music with Tone.js when creating games or audio experiences:
  \`<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"></script>\`

## JavaScript Guidelines

- **Functional & Interactive**: Implement interactive features fully
- **Timing**: Use \`DOMContentLoaded\` to ensure DOM is ready
- **Error Handling**: Wrap problematic logic in \`try...catch\` blocks
- **Self-Contained**: All JavaScript must operate within the generated HTML page
- **DO NOT use localStorage or sessionStorage**

## Internal Thought Process (Before Generating)

1. **Interpret Query**: Analyze prompt. Is search mandatory? What interactive application fits?
2. **Plan Application Concept**: Define core interactive functionality and design
3. **Plan Content**: Plan storylines, characters with descriptions, visual elements (internal only)
4. **Identify Data/Image Needs**: Plan mandatory searches, determine which images to generate vs search
5. **Perform Searches**: Use web search diligently for facts, issue follow-up searches as needed
6. **Brainstorm Features**: Generate list (~12) of UI components, interactive features
7. **Filter & Integrate**: Review features, discard weak ideas, integrate all good features

---

*Based on "Generative UI: LLMs are Effective UI Generators" (Leviathan et al., 2024) - Google Research*
`;

export default function SystemPromptPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(systemPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">System Prompt</h1>
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          {copied ? (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
              Copy Prompt
            </>
          )}
        </button>
      </div>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        This system prompt is adapted from Google Research&apos;s Generative UI
        paper for use with Claude. Add it to your project&apos;s{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">
          .claude/
        </code>{" "}
        configuration or include it in your instructions.
      </p>

      <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-900">
        <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-2">
          Prerequisites
        </h3>
        <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
          <li>
            • Install the{" "}
            <a href="/mcp-setup" className="underline">
              MCP server
            </a>{" "}
            for <code>generate_image</code> tool access
          </li>
          <li>• Claude&apos;s built-in WebSearch for fact verification</li>
          <li>
            • The <code>serve_html</code> tool for previewing generated HTML
          </li>
        </ul>
      </div>

      <div className="relative">
        <div className="absolute top-4 right-4">
          <button
            onClick={copyToClipboard}
            className="p-2 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
            title="Copy to clipboard"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
          </button>
        </div>
        <pre className="p-6 pr-16 rounded-lg bg-zinc-900 text-zinc-100 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">
          {systemPrompt}
        </pre>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900">
        <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
          Usage Tips
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
          <li>
            <strong>For Claude Code:</strong> Save this as a{" "}
            <code>.md</code> file in your{" "}
            <code>.claude/</code> directory to automatically include it in
            context.
          </li>
          <li>
            <strong>For API usage:</strong> Include as the system message when
            making Claude API calls.
          </li>
          <li>
            <strong>Customize:</strong> Add project-specific styling guidelines,
            component libraries, or domain-specific examples.
          </li>
        </ul>
      </div>
    </div>
  );
}
