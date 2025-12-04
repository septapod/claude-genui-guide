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
export declare function generateImage(options: GenerateImageOptions): Promise<GenerateImageResult>;
//# sourceMappingURL=gemini-client.d.ts.map