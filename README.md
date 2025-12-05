# Generative UI Guide for Claude

A comprehensive guide enabling Claude coding agents to generate rich, interactive HTML experiences instead of markdown "walls of text".

Based on research from Google: **"Generative UI: LLMs are Effective UI Generators"** (Leviathan et al., 2024)

## What's New in Version 1.1.0

- **Zero Configuration**: System prompt is now embedded in the MCP server - no manual copying required
- **Validation Tool**: New `validate_html` tool implements all 9 Google Research post-processors
- **Aspect Ratio Support**: Full support for 10 aspect ratios in image generation
- **Enhanced Tool Descriptions**: Better guidance for when to generate vs search for images

## Overview

Generative UI is a paradigm where AI models generate not just content, but the entire user interface. This guide provides:

1. **MCP Server** - Provides Claude with:
   - Embedded system prompt (automatically loaded)
   - Image generation via Gemini Imagen 3
   - HTML preview server
   - Post-processing validation (9 processors)
2. **Documentation** - Philosophy, technical specs, examples, and troubleshooting

## Quick Start

### 1. Install the MCP Server

```bash
git clone https://github.com/septapod/claude-genui-guide.git
cd claude-genui-guide/mcp-server
npm install
npm run build
```

### 2. Configure Claude Code

Add to your Claude Code settings (`~/.claude/settings.json`):

```json
{
  "mcpServers": {
    "generative-ui": {
      "command": "node",
      "args": ["/path/to/claude-genui-guide/mcp-server/dist/index.js"],
      "env": {
        "GEMINI_API_KEY": "your_api_key"
      }
    }
  }
}
```

### 3. Start Generating

That's it! The system prompt is automatically embedded. Ask Claude to create interactive experiences:

```
"Create an interactive clock application"
"Build a fractal explorer with Mandelbrot visualization"
"Make a travel planner for Singapore with maps"
```

## Key Results from Research

- **82.8%** user preference over markdown output
- **44%** comparable to human expert results
- **ELO 1710.7** (vs human expert 1756.0)

## MCP Server Tools

### `generate_image`
Generate images using Gemini Imagen 3 for embedding in HTML.

```
Parameters:
- prompt (required): Detailed image description
- aspect_ratio (optional): 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3, 5:4, 4:5, 21:9
```

**When to use**: Creative illustrations, abstract concepts, famous landmarks, story characters

**When to use WebSearch instead**: Specific named people, non-famous places, product photos

### `serve_html`
Save and serve HTML locally for preview.

```
Parameters:
- html_content (required): Complete HTML document
- filename (optional): Output filename
- port (optional): Server port (default: 3333)
```

### `validate_html`
Validate and fix common issues using Google's 9 post-processors.

```
Parameters:
- html_content (required): HTML to validate
- fix_errors (optional): Auto-fix issues (default: true)
```

**Post-processors included**:
1. API key placeholder detection
2. Error detection injection
3. JavaScript parsing fixes
4. CSS/Tailwind directive fixes
5. Circular dependency fixes
6. HTML attribute escaping
7. Citation removal from JS
8. API issue fixes
9. Asset hallucination fixes

## Documentation

Visit the [documentation site](https://claude-genui-guide.vercel.app) for:

- **Philosophy** - Core principles (interactive-first, no placeholders, fact verification)
- **System Prompt** - Reference prompt (automatically embedded in MCP server)
- **Technical Spec** - HTML/CSS/JS patterns, image handling, aspect ratios
- **Examples** - Sample prompts and outputs
- **MCP Setup** - Installation and configuration
- **Troubleshooting** - Common issues and the 9 post-processors

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
