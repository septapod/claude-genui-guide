# Generative UI MCP Server

An MCP (Model Context Protocol) server that provides Claude with tools for generating interactive UI experiences.

## Tools

### `generate_image`

Generate images using Gemini Imagen 3 (Nano Banana) for embedding in HTML.

**Parameters:**
- `prompt` (required): Detailed description of the image to generate
- `aspect_ratio` (optional): One of "1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"

**Usage Tips (from Google Research):**
- Use for generic concepts, creative illustrations, famous landmarks
- Be specific about style, colors, background, and visual elements
- For character consistency in stories, include full character description in EVERY prompt
- Don't use for specific named people or non-famous places (use web search instead)

### `serve_html`

Save generated HTML to a temp file and serve it locally for browser preview.

**Parameters:**
- `html_content` (required): Complete HTML document to serve
- `filename` (optional): Filename without extension (default: "preview")
- `port` (optional): Port number (default: 3333)

## Installation

### Prerequisites

- Node.js 18+
- A Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey)

### Setup

1. Install dependencies:

```bash
cd mcp-server
npm install
```

2. Build the server:

```bash
npm run build
```

3. Set your Gemini API key:

```bash
export GEMINI_API_KEY=your_api_key_here
```

### Claude Code Configuration

Add to your Claude Code MCP settings (`.claude/settings.json`):

```json
{
  "mcpServers": {
    "generative-ui": {
      "command": "node",
      "args": ["/path/to/mcp-server/dist/index.js"],
      "env": {
        "GEMINI_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## Development

Run in development mode:

```bash
npm run dev
```

Watch for changes:

```bash
npm run watch
```

## Citation

This MCP server is based on research from Google:

```
@article{leviathan2024generativeui,
  title={Generative UI: LLMs are Effective UI Generators},
  author={Leviathan, Yaniv and Valevski, Dani and Kalman, Matan and others},
  journal={Preprint},
  year={2024},
  institution={Google Research}
}
```

See [generativeui.github.io](https://generativeui.github.io) for the original research.
