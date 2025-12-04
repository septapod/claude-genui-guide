/**
 * Gemini Image Generation Client
 *
 * Uses Gemini's Imagen 3 (Nano Banana Pro) model for high-quality image generation.
 *
 * Reference: https://ai.google.dev/gemini-api/docs/image-generation
 */

export interface GenerateImageOptions {
  prompt: string;
  aspectRatio?: "1:1" | "2:3" | "3:2" | "3:4" | "4:3" | "4:5" | "5:4" | "9:16" | "16:9" | "21:9";
}

export interface GenerateImageResult {
  success: boolean;
  dataUrl?: string;
  error?: string;
}

const GEMINI_API_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models";
const MODEL = "gemini-2.0-flash-exp"; // Using flash-exp which supports image generation

export async function generateImage(options: GenerateImageOptions): Promise<GenerateImageResult> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      error: "GEMINI_API_KEY environment variable is not set"
    };
  }

  try {
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
                  text: options.prompt
                }
              ]
            }
          ],
          generationConfig: {
            responseModalities: ["TEXT", "IMAGE"],
            ...(options.aspectRatio && {
              // Note: aspect ratio support depends on the model
            })
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
        return {
          success: true,
          dataUrl: `data:${mimeType};base64,${base64Data}`
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
