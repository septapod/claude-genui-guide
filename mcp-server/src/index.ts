#!/usr/bin/env node

/**
 * Generative UI MCP Server
 *
 * An MCP server providing tools for Claude to generate interactive UI experiences.
 *
 * Tools:
 * - generate_image: Generate images using Gemini Imagen 3
 * - serve_html: Preview generated HTML locally
 * - validate_html: Validate and fix common HTML issues
 *
 * Prompts:
 * - generative-ui: Complete system prompt for Generative UI methodology
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
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { generateImageTool } from "./tools/generate-image.js";
import { serveHtmlTool } from "./tools/serve-html.js";
import { validateHtmlTool } from "./tools/validate-html.js";
import { GENERATIVE_UI_SYSTEM_PROMPT } from "./prompts/generative-ui-prompt.js";

// Create server instance
const server = new Server(
  {
    name: "generative-ui-mcp-server",
    version: "1.1.0",
  },
  {
    capabilities: {
      tools: {},
      prompts: {},
    },
  }
);

// Register tools
const tools = [generateImageTool, serveHtmlTool, validateHtmlTool];

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

// Define available prompts
const prompts = [
  {
    name: "generative-ui",
    description:
      "Complete system prompt for Generative UI methodology. This prompt teaches Claude to generate rich, interactive HTML experiences instead of static markdown. Based on Google Research's methodology.",
    arguments: [],
  },
];

// Handle list prompts request
server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return { prompts };
});

// Handle get prompt request
server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  const promptName = request.params.name;

  if (promptName === "generative-ui") {
    return {
      description:
        "Complete Generative UI system prompt based on Google Research methodology",
      messages: [
        {
          role: "user" as const,
          content: {
            type: "text" as const,
            text: GENERATIVE_UI_SYSTEM_PROMPT,
          },
        },
      ],
    };
  }

  throw new Error(`Unknown prompt: ${promptName}`);
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
