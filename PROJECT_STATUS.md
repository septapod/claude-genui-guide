# Generative UI Guide - Project Status

> **Last Updated**: 2025-12-03
> **Status**: Complete - Deployed to GitHub
> **Current Phase**: Phase 5 - Deployment (GitHub Complete)

---

## Quick Context for New Claude Instances

This project creates a comprehensive guide + MCP server for Claude coding agents to implement "Generative UI" - generating rich interactive HTML experiences instead of markdown "walls of text".

### Source Research
- **Paper**: "Generative UI: LLMs are Effective UI Generators" by Google Research (Leviathan et al.)
- **Paper Location**: `/Users/brentdixon/Library/CloudStorage/Dropbox/Manual Library/Documents/Projects/2025/Generative UI/generative-ui.pdf`
- **Demo Site**: https://generativeui.github.io
- **Key Finding**: 82.8% user preference over markdown; emergent capability of modern LLMs

### Citations
```
@article{leviathan2024generativeui,
  title={Generative UI: LLMs are Effective UI Generators},
  author={Leviathan, Yaniv and Valevski, Dani and Kalman, Matan and Lumen, Danny and Segalis, Eyal and Molad, Eyal and Pasternak, Shlomi and Natchu, Vishnu and Nygaard, Valerie and Venkatachary, Srinivasan and Manyika, James and Matias, Yossi},
  journal={Preprint},
  year={2024},
  institution={Google Research}
}
```

---

## Project Structure

```
claude-genui-guide/
├── PROJECT_STATUS.md          # This file - continuity doc
├── README.md                  # Main readme
├── src/
│   ├── app/                   # Next.js app router pages
│   │   ├── layout.tsx         # Root layout with nav
│   │   ├── page.tsx           # Home page
│   │   ├── philosophy/        # Core principles
│   │   ├── system-prompt/     # Claude system prompt
│   │   ├── technical-spec/    # Technical details
│   │   ├── examples/          # Example gallery
│   │   ├── mcp-setup/         # MCP installation
│   │   └── troubleshooting/   # Common issues
│   └── components/
│       └── Navigation.tsx     # Site navigation
├── mcp-server/               # MCP server implementation
│   ├── package.json
│   ├── tsconfig.json
│   ├── README.md
│   └── src/
│       ├── index.ts          # Server entry
│       ├── tools/
│       │   ├── generate-image.ts
│       │   └── serve-html.ts
│       └── utils/
│           └── gemini-client.ts
└── public/                   # Static assets
```

---

## Deliverables

1. **MCP Server** (`mcp-server/`) - COMPLETE
   - `generate_image` - Gemini Imagen 3
   - `serve_html` - Local HTML preview

2. **Documentation Website** (Next.js + Vercel) - COMPLETE
   - `/` - Home/overview
   - `/philosophy` - Core principles
   - `/system-prompt` - Reference prompt with copy button
   - `/technical-spec` - Technical details
   - `/examples` - Example gallery
   - `/mcp-setup` - Installation guide
   - `/troubleshooting` - Common issues

3. **GitHub**: https://github.com/septapod/claude-genui-guide - COMPLETE

---

## Progress Tracker

### Phase 1: Project Setup - COMPLETE
- [x] Initialize Next.js project
- [x] Configure for Vercel
- [x] Set up project structure
- [x] Create PROJECT_STATUS.md

### Phase 2: MCP Server - COMPLETE
- [x] Create mcp-server/package.json
- [x] Implement generate_image tool
- [x] Implement serve_html tool
- [x] Create MCP README

### Phase 3: Website - COMPLETE
- [x] Create layout.tsx with navigation
- [x] Build home page
- [x] Build philosophy page
- [x] Build system-prompt page (with copy button)
- [x] Build technical-spec page
- [x] Build examples page
- [x] Build mcp-setup page
- [x] Build troubleshooting page

### Phase 4: Content - COMPLETE
- [x] Write system prompt (adapted from Google research)
- [x] Create example descriptions
- [x] Add proper citations

### Phase 5: Deployment - COMPLETE
- [x] Create GitHub repo: https://github.com/septapod/claude-genui-guide
- [x] Push to GitHub
- [ ] Connect to Vercel (user will do manually)
- [ ] Test deployment

---

## Key Technical Details

### Gemini Image Generation API
- **Endpoint**: `https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent`
- **Model**: `gemini-2.0-flash-exp` (with image generation)
- **Aspect Ratios**: 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9
- **Auth**: `x-goog-api-key` header
- **Docs**: https://ai.google.dev/gemini-api/docs/image-generation

### Web Search
Using Claude's built-in WebSearch tool (no additional implementation needed)

### Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- MCP SDK for server

---

## Environment Variables Needed

```bash
# For MCP server
GEMINI_API_KEY=your_gemini_api_key_here
```

---

## How to Continue

1. Read this file for context
2. Check the Progress Tracker above
3. For deployment: Create GitHub repo and push, then connect to Vercel
4. Review the source paper if needed for content updates
5. Test the MCP server with a Gemini API key

---

## Next Steps

1. ~~**Create GitHub repo**~~: DONE - https://github.com/septapod/claude-genui-guide
2. ~~**Push code**~~: DONE
3. **Connect Vercel**: Link the repo in Vercel dashboard (user action)
4. **Test MCP server**: Install in Claude Code and test image generation
5. **Install MCP dependencies**: `cd mcp-server && npm install && npm run build`

---

## Notes & Decisions

- **Web search**: Using Claude's built-in WebSearch instead of implementing custom search in MCP server
- **Image gen**: Gemini Imagen 3 chosen for quality
- **Target output**: Standalone HTML files that open directly in browser
- **Styling**: Tailwind CSS (matches Generative UI output patterns)
