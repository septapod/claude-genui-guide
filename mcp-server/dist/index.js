#!/usr/bin/env node
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@modelcontextprotocol/sdk/server/index.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const types_js_1 = require("@modelcontextprotocol/sdk/types.js");
const generate_image_js_1 = require("./tools/generate-image.js");
const serve_html_js_1 = require("./tools/serve-html.js");
// Create server instance
const server = new index_js_1.Server({
    name: "generative-ui-mcp-server",
    version: "1.0.0",
}, {
    capabilities: {
        tools: {},
    },
});
// Register tools
const tools = [generate_image_js_1.generateImageTool, serve_html_js_1.serveHtmlTool];
// Handle list tools request
server.setRequestHandler(types_js_1.ListToolsRequestSchema, async () => {
    return {
        tools: tools.map((tool) => ({
            name: tool.name,
            description: tool.description,
            inputSchema: tool.inputSchema,
        })),
    };
});
// Handle tool calls
server.setRequestHandler(types_js_1.CallToolRequestSchema, async (request) => {
    const toolName = request.params.name;
    const tool = tools.find((t) => t.name === toolName);
    if (!tool) {
        return {
            content: [
                {
                    type: "text",
                    text: `Unknown tool: ${toolName}`,
                },
            ],
            isError: true,
        };
    }
    try {
        const args = request.params.arguments;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return await tool.execute(args);
    }
    catch (error) {
        return {
            content: [
                {
                    type: "text",
                    text: `Tool execution failed: ${error instanceof Error ? error.message : String(error)}`,
                },
            ],
            isError: true,
        };
    }
});
// Start server
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
    console.error("Generative UI MCP server started");
}
main().catch((error) => {
    console.error("Server error:", error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map