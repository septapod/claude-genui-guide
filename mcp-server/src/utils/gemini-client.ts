/**
 * Gemini Image Generation Client
 *
 * Uses Gemini's Imagen 3 model for high-quality image generation.
 *
 * Reference: https://ai.google.dev/gemini-api/docs/image-generation
 *
 * Supported aspect ratios:
 * - 1:1 (square, default)
 * - 2:3, 3:2 (portrait/landscape)
 * - 3:4, 4:3 (photo portrait/landscape)
 * - 4:5, 5:4 (social media)
 * - 9:16, 16:9 (video portrait/landscape)
 * - 21:9 (ultrawide)
 */

export interface GenerateImageOptions {
  prompt: string;
  aspectRatio?: "1:1" | "2:3" | "3:2" | "3:4" | "4:3" | "4:5" | "5:4" | "9:16" | "16:9" | "21:9";
}

export interface GenerateImageResult {
  success: boolean;
  dataUrl?: string;
  error?: string;
  aspectRatio?: string;
}

const GEMINI_API_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models";
const MODEL = "gemini-2.0-flash-exp"; // Using flash-exp which supports image generation

// Aspect ratio to dimension mapping for clearer prompts
const ASPECT_RATIO_DESCRIPTIONS: Record<string, string> = {
  "1:1": "square format",
  "2:3": "portrait format (2:3 aspect ratio)",
  "3:2": "landscape format (3:2 aspect ratio)",
  "3:4": "portrait format (3:4 aspect ratio)",
  "4:3": "landscape format (4:3 aspect ratio)",
  "4:5": "portrait format (4:5 aspect ratio, like Instagram)",
  "5:4": "landscape format (5:4 aspect ratio)",
  "9:16": "vertical format (9:16 aspect ratio, like phone screen)",
  "16:9": "widescreen format (16:9 aspect ratio)",
  "21:9": "ultrawide format (21:9 aspect ratio)"
};

export async function generateImage(options: GenerateImageOptions): Promise<GenerateImageResult> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      error: "GEMINI_API_KEY environment variable is not set. Set it in your environment or Claude Code settings."
    };
  }

  const aspectRatio = options.aspectRatio || "1:1";

  // Enhance prompt with aspect ratio instruction for better composition
  const aspectDescription = ASPECT_RATIO_DESCRIPTIONS[aspectRatio] || "square format";
  const enhancedPrompt = `Generate an image in ${aspectDescription}. ${options.prompt}`;

  try {
    console.error(`[generate_image] Generating image with aspect ratio ${aspectRatio}...`);

    const response = await fetch(
      `${GEMINI_API_ENDPOINT}/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: enhancedPrompt
                }
              ]
            }
          ],
          generationConfig: {
            responseModalities: ["TEXT", "IMAGE"]
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return {
        success: false,
        error: `Gemini API error: ${response.status} - ${errorText}`
      };
    }

    const data = await response.json() as {
      candidates?: Array<{
        content?: {
          parts?: Array<{
            text?: string;
            inlineData?: {
              mimeType?: string;
              data?: string;
            };
          }>;
        };
      }>;
    };

    // Extract image from response
    const candidates = data.candidates;
    if (!candidates || candidates.length === 0) {
      return {
        success: false,
        error: "No candidates returned from Gemini"
      };
    }

    const parts = candidates[0].content?.parts;
    if (!parts) {
      return {
        success: false,
        error: "No parts in response"
      };
    }

    // Find the image part
    for (const part of parts) {
      if (part.inlineData) {
        const mimeType = part.inlineData.mimeType || "image/png";
        const base64Data = part.inlineData.data;
        console.error(`[generate_image] Image generated successfully (${aspectRatio})`);
        return {
          success: true,
          dataUrl: `data:${mimeType};base64,${base64Data}`,
          aspectRatio: aspectRatio
        };
      }
    }

    // If no image, return text response info
    const textPart = parts.find((p) => p.text);
    return {
      success: false,
      error: textPart?.text || "No image generated"
    };

  } catch (error) {
    return {
      success: false,
      error: `Request failed: ${error instanceof Error ? error.message : String(error)}`
    };
  }
}
