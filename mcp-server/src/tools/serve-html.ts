/**
 * Serve HTML Tool
 *
 * Saves generated HTML to a temp file and serves it locally for preview.
 * Useful for testing and viewing Generative UI output.
 */

import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import express from "express";
import type { Server } from "http";

let server: Server | null = null;
let currentPort: number = 3333;

export const serveHtmlTool = {
  name: "serve_html",
  description: `Save HTML content to a file and serve it locally for preview in a browser.

This tool:
1. Saves the HTML to a temp file
2. Starts a local HTTP server (if not already running)
3. Returns a localhost URL you can open in a browser

Useful for previewing generated Generative UI output before saving or sharing.`,

  inputSchema: {
    type: "object" as const,
    properties: {
      html_content: {
        type: "string",
        description: "The complete HTML content to serve (should be a full HTML document starting with <!DOCTYPE html>)"
      },
      filename: {
        type: "string",
        description: "Optional filename (without extension). Default is 'preview'.",
        default: "preview"
      },
      port: {
        type: "number",
        description: "Port to serve on. Default is 3333.",
        default: 3333
      }
    },
    required: ["html_content"]
  },

  async execute(args: { html_content: string; filename?: string; port?: number }) {
    const filename = args.filename || "preview";
    const port = args.port || currentPort;

    try {
      // Create temp directory for serving files
      const tempDir = path.join(os.tmpdir(), "generative-ui-preview");
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      // Save HTML file
      const htmlPath = path.join(tempDir, `${filename}.html`);
      fs.writeFileSync(htmlPath, args.html_content, "utf-8");

      // Start server if not running or port changed
      if (!server || currentPort !== port) {
        if (server) {
          server.close();
        }

        const app = express();
        app.use(express.static(tempDir));

        server = app.listen(port);
        currentPort = port;
      }

      const url = `http://localhost:${port}/${filename}.html`;

      return {
        content: [
          {
            type: "text" as const,
            text: `HTML saved and serving at:\n\n${url}\n\nOpen this URL in your browser to preview the generated UI.\n\nFile saved to: ${htmlPath}`
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Failed to serve HTML: ${error instanceof Error ? error.message : String(error)}`
          }
        ],
        isError: true
      };
    }
  }
};

// Cleanup on exit
process.on("exit", () => {
  if (server) {
    server.close();
  }
});
