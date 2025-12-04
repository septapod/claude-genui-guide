/**
 * Generate Image Tool
 *
 * Generates images using Gemini's Imagen 3 model for use in Generative UI.
 *
 * Based on Google Research's Generative UI paper (Leviathan et al., 2024):
 * - Use for generic concepts, creative illustrations, famous landmarks
 * - Include detailed prompts with style, colors, and context
 * - For character consistency, include full description in every prompt
 */
export declare const generateImageTool: {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            prompt: {
                type: string;
                description: string;
            };
            aspect_ratio: {
                type: string;
                enum: string[];
                description: string;
                default: string;
            };
        };
        required: string[];
    };
    execute(args: {
        prompt: string;
        aspect_ratio?: string;
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
//# sourceMappingURL=generate-image.d.ts.map