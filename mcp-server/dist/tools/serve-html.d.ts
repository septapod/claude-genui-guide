/**
 * Serve HTML Tool
 *
 * Saves generated HTML to a temp file and serves it locally for preview.
 * Useful for testing and viewing Generative UI output.
 */
export declare const serveHtmlTool: {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            html_content: {
                type: string;
                description: string;
            };
            filename: {
                type: string;
                description: string;
                default: string;
            };
            port: {
                type: string;
                description: string;
                default: number;
            };
        };
        required: string[];
    };
    execute(args: {
        html_content: string;
        filename?: string;
        port?: number;
    }): Promise<{
        content: {
            type: "text";
            text: string;
        }[];
        isError?: undefined;
    } | {
        content: {
            type: "text";
            text: string;
        }[];
        isError: boolean;
    }>;
};
//# sourceMappingURL=serve-html.d.ts.map