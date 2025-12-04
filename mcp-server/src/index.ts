#!/usr/bin/env node

/**
 * Generative UI MCP Server
 *
 * An MCP server providing tools for Claude to generate interactive UI experiences.
 *
 * Tools:
 * - generate_image: Generate images using Gemini Imagen 3
 * - serve_html: Preview generated HTML locally
 *
 * Based on research from:
 * "Generative UI: LLMs are Effective UI Generators" (Leviathan et al., 2024)
 * Google Research - https://generativeui.github.io
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { generateImageTool } from "./tools/generate-image.js";
import { serveHtmlTool } from "./tools/serve-html.js";

// Create server instance
const server = new Server(
  {
    name: "generative-ui-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Register tools
const tools = [generateImageTool, serveHtmlTool];

// Handle list tools request
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: tools.map((tool) => ({
      name: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema,
    })),
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const toolName = request.params.name;
  const tool = tools.find((t) => t.name === toolName);

  if (!tool) {
    return {
      content: [
        {
          type: "text" as const,
          text: `Unknown tool: ${toolName}`,
        },
      ],
      isError: true,
    };
  }

  try {
    const args = request.params.arguments as Record<string, unknown>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return await tool.execute(args as any);
  } catch (error) {
    return {
      content: [
        {
          type: "text" as const,
          text: `Tool execution failed: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
      isError: true,
    };
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Generative UI MCP server started");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
