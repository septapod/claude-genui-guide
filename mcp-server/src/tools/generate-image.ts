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

import { generateImage, type GenerateImageOptions } from "../utils/gemini-client.js";

export const generateImageTool = {
  name: "generate_image",
  description: `Generate an image using Gemini Imagen 3 for embedding in HTML.

Use this tool for:
- Generic concepts and creative illustrations (e.g., "a happy dog", "futuristic city")
- Famous, globally recognized landmarks (e.g., "Eiffel Tower", "Statue of Liberty")
- Abstract images and backgrounds
- Characters and scenes for stories (include full character descriptions every time for consistency)

Do NOT use for:
- Specific named people (use web search for photos instead)
- Non-famous specific places (use web search instead)
- Complex schematics or graphs with lots of text

Tips from Google Research:
- Be specific about style, colors, background, and visual elements
- For stories/comics: create repeating character descriptions and include them in EVERY prompt
- The image generator doesn't know context, so describe everything needed in the prompt`,

  inputSchema: {
    type: "object" as const,
    properties: {
      prompt: {
        type: "string",
        description: "Detailed description of the image to generate. Include style, colors, mood, and all relevant details."
      },
      aspect_ratio: {
        type: "string",
        enum: ["1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"],
        description: "Aspect ratio for the generated image. Default is 1:1.",
        default: "1:1"
      }
    },
    required: ["prompt"]
  },

  async execute(args: { prompt: string; aspect_ratio?: string }) {
    const options: GenerateImageOptions = {
      prompt: args.prompt,
      aspectRatio: (args.aspect_ratio as GenerateImageOptions["aspectRatio"]) || "1:1"
    };

    const result = await generateImage(options);

    if (result.success && result.dataUrl) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Image generated successfully. Use this data URL in your HTML:\n\n${result.dataUrl}\n\nExample usage:\n<img src="${result.dataUrl}" alt="${args.prompt.substring(0, 50)}..." />`
          }
        ]
      };
    } else {
      return {
        content: [
          {
            type: "text" as const,
            text: `Failed to generate image: ${result.error}`
          }
        ],
        isError: true
      };
    }
  }
};
