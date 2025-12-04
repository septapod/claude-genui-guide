"use strict";
/**
 * Serve HTML Tool
 *
 * Saves generated HTML to a temp file and serves it locally for preview.
 * Useful for testing and viewing Generative UI output.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveHtmlTool = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const express_1 = __importDefault(require("express"));
let server = null;
let currentPort = 3333;
exports.serveHtmlTool = {
    name: "serve_html",
    description: `Save HTML content to a file and serve it locally for preview in a browser.

This tool:
1. Saves the HTML to a temp file
2. Starts a local HTTP server (if not already running)
3. Returns a localhost URL you can open in a browser

Useful for previewing generated Generative UI output before saving or sharing.`,
    inputSchema: {
        type: "object",
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
    async execute(args) {
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
                const app = (0, express_1.default)();
                app.use(express_1.default.static(tempDir));
                server = app.listen(port);
                currentPort = port;
            }
            const url = `http://localhost:${port}/${filename}.html`;
            return {
                content: [
                    {
                        type: "text",
                        text: `HTML saved and serving at:\n\n${url}\n\nOpen this URL in your browser to preview the generated UI.\n\nFile saved to: ${htmlPath}`
                    }
                ]
            };
        }
        catch (error) {
            return {
                content: [
                    {
                        type: "text",
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
//# sourceMappingURL=serve-html.js.map