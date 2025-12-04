# Generative UI Guide for Claude

A comprehensive guide enabling Claude coding agents to generate rich, interactive HTML experiences instead of markdown "walls of text".

Based on research from Google: **"Generative UI: LLMs are Effective UI Generators"** (Leviathan et al., 2024)

## Overview

Generative UI is a paradigm where AI models generate not just content, but the entire user interface. This guide provides:

1. **MCP Server** - Provides Claude with image generation (Gemini Imagen 3) and HTML preview tools
2. **System Prompt** - Carefully crafted instructions adapted from Google Research
3. **Documentation** - Philosophy, technical specs, examples, and troubleshooting

## Quick Start

### 1. Install the MCP Server

```bash
cd mcp-server
npm install
npm run build
```

Add to your Claude Code settings (`~/.claude/settings.json`):

```json
{
  "mcpServers": {
    "generative-ui": {
      "command": "node",
      "args": ["/path/to/mcp-server/dist/index.js"],
      "env": {
        "GEMINI_API_KEY": "your_api_key"
      }
    }
  }
}
```

### 2. Get the System Prompt

Copy the system prompt from the documentation site and add it to your Claude configuration.

### 3. Start Generating

Ask Claude to create interactive experiences:

```
"Create an interactive clock application"
"Build a fractal explorer with Mandelbrot visualization"
"Make a travel planner for Singapore with maps"
```

## Key Results from Research

- **82.8%** user preference over markdown output
- **44%** comparable to human expert results
- **ELO 1710.7** (vs human expert 1756.0)

## Documentation

The documentation site covers:

- **Philosophy** - Core principles (interactive-first, no placeholders, fact verification)
- **System Prompt** - Ready-to-use prompt for Claude
- **Technical Spec** - HTML/CSS/JS patterns, image handling
- **Examples** - Sample prompts and outputs
- **MCP Setup** - Installation and configuration
- **Troubleshooting** - Common issues and fixes

## MCP Server Tools

### `generate_image`
Generate images using Gemini Imagen 3 for embedding in HTML.

```
Parameters:
- prompt (required): Detailed image description
- aspect_ratio (optional): 1:1, 16:9, 9:16, etc.
```

### `serve_html`
Save and serve HTML locally for preview.

```
Parameters:
- html_content (required): Complete HTML document
- filename (optional): Output filename
- port (optional): Server port (default: 3333)
```

## Development

### Website

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation.

### MCP Server

```bash
cd mcp-server
npm install
npm run dev
```

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Citation

```bibtex
@article{leviathan2024generativeui,
  title={Generative UI: LLMs are Effective UI Generators},
  author={Leviathan, Yaniv and Valevski, Dani and Kalman, Matan and Lumen, Danny
          and Segalis, Eyal and Molad, Eyal and Pasternak, Shlomi and Natchu, Vishnu
          and Nygaard, Valerie and Venkatachary, Srinivasan and Manyika, James
          and Matias, Yossi},
  journal={Preprint},
  year={2024},
  institution={Google Research}
}
```

See the original research at [generativeui.github.io](https://generativeui.github.io)

## License

MIT
