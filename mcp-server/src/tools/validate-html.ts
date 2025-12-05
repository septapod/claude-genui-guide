/**
 * HTML Validation and Post-Processing Tool
 *
 * Implements all 9 post-processors from Google Research's Generative UI methodology:
 * 1. API Key Injection - Detect and handle API key placeholders
 * 2. Error Detection - Inject error reporting JavaScript
 * 3. JavaScript Parsing Fixes - Detect and suggest fixes for JS errors
 * 4. CSS Directive Fixes - Fix missing Tailwind directives
 * 5. Circular Dependency Fixes - Fix Tailwind circular dependencies
 * 6. HTML Escaping - Escape special characters in HTML attributes
 * 7. Citation Removal - Remove citations within JS code blocks
 * 8. API Issue Fixes - Fix common API issues (maps, etc.)
 * 9. Asset Hallucination Fixes - Fix hallucinated icon/asset URLs
 *
 * Based on Appendix A.6 of:
 * "Generative UI: LLMs are Effective UI Generators" (Leviathan et al., 2024)
 */

interface ValidationResult {
  html: string;
  issues: Issue[];
  warnings: string[];
}

interface Issue {
  type: string;
  description: string;
  fixed: boolean;
  location?: string;
}

/**
 * Main validation function that runs all post-processors
 */
function validateAndFixHtml(
  htmlContent: string,
  fixErrors: boolean = true
): ValidationResult {
  const issues: Issue[] = [];
  const warnings: string[] = [];
  let html = htmlContent;

  // 1. API Key Injection Detection
  const apiKeyResult = checkApiKeyPlaceholders(html, fixErrors);
  html = apiKeyResult.html;
  issues.push(...apiKeyResult.issues);
  warnings.push(...apiKeyResult.warnings);

  // 2. Inject Error Detection Script
  if (fixErrors) {
    const errorDetectionResult = injectErrorDetection(html);
    html = errorDetectionResult.html;
    issues.push(...errorDetectionResult.issues);
  }

  // 3. JavaScript Parsing Fixes
  const jsResult = fixJavaScriptErrors(html, fixErrors);
  html = jsResult.html;
  issues.push(...jsResult.issues);

  // 4. CSS/Tailwind Directive Fixes
  const cssResult = fixCssDirectives(html, fixErrors);
  html = cssResult.html;
  issues.push(...cssResult.issues);

  // 5. Circular Dependency Fixes
  const circularResult = fixCircularDependencies(html, fixErrors);
  html = circularResult.html;
  issues.push(...circularResult.issues);

  // 6. HTML Attribute Escaping
  const escapeResult = fixHtmlEscaping(html, fixErrors);
  html = escapeResult.html;
  issues.push(...escapeResult.issues);

  // 7. Citation Removal from JS
  const citationResult = removeCitationsFromJs(html, fixErrors);
  html = citationResult.html;
  issues.push(...citationResult.issues);

  // 8. API Issue Fixes
  const apiResult = fixApiIssues(html, fixErrors);
  html = apiResult.html;
  issues.push(...apiResult.issues);
  warnings.push(...apiResult.warnings);

  // 9. Asset Hallucination Fixes
  const assetResult = fixHallucinatedAssets(html, fixErrors);
  html = assetResult.html;
  issues.push(...assetResult.issues);

  return { html, issues, warnings };
}

/**
 * 1. Check for API key placeholders
 */
function checkApiKeyPlaceholders(
  html: string,
  fix: boolean
): { html: string; issues: Issue[]; warnings: string[] } {
  const issues: Issue[] = [];
  const warnings: string[] = [];

  // Common API key placeholder patterns
  const placeholders = [
    /YOUR[-_]?API[-_]?KEY/gi,
    /API[-_]?KEY[-_]?HERE/gi,
    /REPLACE[-_]?WITH[-_]?YOUR[-_]?KEY/gi,
    /INSERT[-_]?API[-_]?KEY/gi,
    /\[API[-_]?KEY\]/gi,
    /<API[-_]?KEY>/gi,
    /AIza[A-Za-z0-9_-]{35}/g, // Google API key format placeholder
  ];

  for (const pattern of placeholders) {
    const matches = html.match(pattern);
    if (matches) {
      for (const match of matches) {
        issues.push({
          type: "api_key_placeholder",
          description: `Found API key placeholder: "${match}"`,
          fixed: false,
          location: "Script or attribute",
        });
        warnings.push(
          `API key placeholder detected: "${match}". You may need to provide a real API key.`
        );
      }
    }
  }

  return { html, issues, warnings };
}

/**
 * 2. Inject error detection script
 */
function injectErrorDetection(html: string): { html: string; issues: Issue[] } {
  const issues: Issue[] = [];

  // Check if error handler already exists
  if (html.includes("window.onerror") || html.includes("addEventListener('error'")) {
    return { html, issues };
  }

  const errorScript = `
<script>
  // Error detection injected by validate_html
  window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Page Error:', { msg, url, lineNo, columnNo, error });
    return false;
  };
  window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled Promise Rejection:', event.reason);
  });
</script>
`;

  // Insert before closing </head> or at start of <body>
  if (html.includes("</head>")) {
    html = html.replace("</head>", errorScript + "</head>");
    issues.push({
      type: "error_detection",
      description: "Injected error detection script",
      fixed: true,
      location: "<head>",
    });
  } else if (html.includes("<body")) {
    html = html.replace(/<body([^>]*)>/i, `<body$1>${errorScript}`);
    issues.push({
      type: "error_detection",
      description: "Injected error detection script",
      fixed: true,
      location: "<body>",
    });
  }

  return { html, issues };
}

/**
 * 3. Fix common JavaScript errors
 */
function fixJavaScriptErrors(
  html: string,
  fix: boolean
): { html: string; issues: Issue[] } {
  const issues: Issue[] = [];

  // Fix unclosed template literals
  const templateLiteralRegex = /`[^`]*$/gm;
  if (templateLiteralRegex.test(html)) {
    issues.push({
      type: "js_parsing",
      description: "Possible unclosed template literal detected",
      fixed: false,
    });
  }

  // Fix missing semicolons before IIFE
  if (fix) {
    const iifePattern = /([^\s;{}])\s*\n\s*\(function/g;
    if (iifePattern.test(html)) {
      html = html.replace(iifePattern, "$1;\n(function");
      issues.push({
        type: "js_parsing",
        description: "Added missing semicolon before IIFE",
        fixed: true,
      });
    }
  }

  // Fix async/await outside async function (common error)
  const awaitOutsideAsync = /(?<!async\s+function[^{]*{[^}]*)\bawait\s+/;
  if (awaitOutsideAsync.test(html)) {
    issues.push({
      type: "js_parsing",
      description: "Possible 'await' used outside async function",
      fixed: false,
    });
  }

  // Fix JSON.parse on non-string (common pattern)
  if (fix) {
    const badJsonParse = /JSON\.parse\s*\(\s*(\w+)\s*\)/g;
    // Note: We can't safely auto-fix this without more context
  }

  return { html, issues };
}

/**
 * 4. Fix CSS/Tailwind directive issues
 */
function fixCssDirectives(
  html: string,
  fix: boolean
): { html: string; issues: Issue[] } {
  const issues: Issue[] = [];

  // Check if Tailwind CDN is included
  if (!html.includes("tailwindcss.com") && !html.includes("tailwind.min.css")) {
    if (
      html.includes('class="') &&
      (html.includes("flex") ||
        html.includes("grid") ||
        html.includes("bg-") ||
        html.includes("text-"))
    ) {
      if (fix) {
        // Add Tailwind CDN to head
        const tailwindScript =
          '<script src="https://cdn.tailwindcss.com"></script>\n';
        if (html.includes("<head>")) {
          html = html.replace("<head>", "<head>\n" + tailwindScript);
          issues.push({
            type: "css_directive",
            description: "Added missing Tailwind CSS CDN",
            fixed: true,
            location: "<head>",
          });
        }
      } else {
        issues.push({
          type: "css_directive",
          description:
            "Tailwind classes used but CDN not included",
          fixed: false,
        });
      }
    }
  }

  // Check for @apply directives without proper setup
  if (html.includes("@apply") && !html.includes("tailwind.config")) {
    issues.push({
      type: "css_directive",
      description:
        "@apply directive used - may not work with CDN-only Tailwind",
      fixed: false,
    });
  }

  return { html, issues };
}

/**
 * 5. Fix circular Tailwind dependencies
 */
function fixCircularDependencies(
  html: string,
  fix: boolean
): { html: string; issues: Issue[] } {
  const issues: Issue[] = [];

  // Detect circular class dependencies like "w-full h-full" on nested elements
  // that could cause layout issues
  const circularPatterns = [
    /class="[^"]*w-full[^"]*"[^>]*>[^<]*<[^>]*class="[^"]*w-full[^"]*"/,
    /class="[^"]*h-screen[^"]*"[^>]*>[^<]*<[^>]*class="[^"]*h-screen[^"]*"/,
  ];

  for (const pattern of circularPatterns) {
    if (pattern.test(html)) {
      issues.push({
        type: "circular_dependency",
        description:
          "Possible circular sizing dependency detected (nested w-full/h-screen)",
        fixed: false,
      });
    }
  }

  return { html, issues };
}

/**
 * 6. Fix HTML attribute escaping
 */
function fixHtmlEscaping(
  html: string,
  fix: boolean
): { html: string; issues: Issue[] } {
  const issues: Issue[] = [];

  if (fix) {
    // Fix unescaped quotes in attributes (common with dynamic content)
    // This is a simplified approach - real implementation would need HTML parsing

    // Fix unescaped ampersands in URLs
    const urlAttrRegex = /(href|src|action)="([^"]*[^&]&[^&][^"]*)"/g;
    let match;
    while ((match = urlAttrRegex.exec(html)) !== null) {
      const [full, attr, value] = match;
      if (value.includes("&") && !value.includes("&amp;")) {
        // Check if it's not already escaped
        const needsEscape = /&(?!amp;|lt;|gt;|quot;|#\d+;)/g;
        if (needsEscape.test(value)) {
          const fixed = value.replace(needsEscape, "&amp;");
          html = html.replace(full, `${attr}="${fixed}"`);
          issues.push({
            type: "html_escaping",
            description: `Fixed unescaped ampersand in ${attr} attribute`,
            fixed: true,
          });
        }
      }
    }

    // Fix potentially problematic characters in onclick/onchange handlers
    const eventHandlerRegex =
      /(onclick|onchange|onsubmit|oninput)="([^"]*[<>][^"]*)"/gi;
    if (eventHandlerRegex.test(html)) {
      issues.push({
        type: "html_escaping",
        description:
          "Event handler contains < or > characters that may cause issues",
        fixed: false,
      });
    }
  }

  return { html, issues };
}

/**
 * 7. Remove citations from JavaScript code
 */
function removeCitationsFromJs(
  html: string,
  fix: boolean
): { html: string; issues: Issue[] } {
  const issues: Issue[] = [];

  // Pattern for citations like [1], [2], etc. within script tags
  const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  let modified = false;

  if (fix) {
    html = html.replace(scriptRegex, (match, scriptContent) => {
      // Remove citation patterns like [1], [2], [citation needed], etc.
      const citationPattern = /\[\d+\]|\[citation[^\]]*\]|\[ref[^\]]*\]/gi;
      if (citationPattern.test(scriptContent)) {
        modified = true;
        const cleaned = scriptContent.replace(citationPattern, "");
        return match.replace(scriptContent, cleaned);
      }
      return match;
    });

    if (modified) {
      issues.push({
        type: "citation_removal",
        description: "Removed citation markers from JavaScript code",
        fixed: true,
      });
    }
  }

  return { html, issues };
}

/**
 * 8. Fix common API issues
 */
function fixApiIssues(
  html: string,
  fix: boolean
): { html: string; issues: Issue[]; warnings: string[] } {
  const issues: Issue[] = [];
  const warnings: string[] = [];

  // Check for Google Maps without API key
  if (
    html.includes("maps.googleapis.com") &&
    !html.includes("key=") &&
    !html.includes("GOOGLE_MAPS_API_KEY")
  ) {
    issues.push({
      type: "api_issue",
      description: "Google Maps API used without API key",
      fixed: false,
    });
    warnings.push(
      "Google Maps API requires an API key. Add ?key=YOUR_API_KEY to the script URL."
    );
  }

  // Suggest using Leaflet/OpenStreetMap as alternative (no API key needed)
  if (
    html.includes("google.maps") &&
    !html.includes("leaflet") &&
    !html.includes("openlayers")
  ) {
    warnings.push(
      "Consider using Leaflet with OpenStreetMap for maps that don't require an API key."
    );
  }

  // Check for fetch to relative URLs that won't work in standalone HTML
  if (fix) {
    const relativeFetchRegex = /fetch\s*\(\s*['"]\.\.?\//g;
    if (relativeFetchRegex.test(html)) {
      issues.push({
        type: "api_issue",
        description:
          "Fetch to relative URL detected - may not work in standalone HTML",
        fixed: false,
      });
    }
  }

  // Check for WebSocket connections to localhost
  if (html.includes("ws://localhost") || html.includes("wss://localhost")) {
    issues.push({
      type: "api_issue",
      description:
        "WebSocket connection to localhost - will only work during development",
      fixed: false,
    });
  }

  return { html, issues, warnings };
}

/**
 * 9. Fix hallucinated asset URLs
 */
function fixHallucinatedAssets(
  html: string,
  fix: boolean
): { html: string; issues: Issue[] } {
  const issues: Issue[] = [];

  // Common hallucinated icon URLs
  const hallucinatedPatterns = [
    // Fake icon library paths
    /src="\/icons\/[^"]+"/gi,
    /src="\.\/icons\/[^"]+"/gi,
    /src="images\/[^"]+"/gi,
    /src="\.\/images\/[^"]+"/gi,
    // Fake CDN URLs that don't exist
    /src="https?:\/\/cdn\.example\.com[^"]+"/gi,
    /src="https?:\/\/assets\.example\.com[^"]+"/gi,
  ];

  for (const pattern of hallucinatedPatterns) {
    const matches = html.match(pattern);
    if (matches) {
      for (const match of matches) {
        issues.push({
          type: "hallucinated_asset",
          description: `Possibly hallucinated asset URL: ${match}`,
          fixed: false,
        });
      }
    }
  }

  // Suggest using real icon libraries
  if (
    html.includes("/icons/") &&
    !html.includes("heroicons") &&
    !html.includes("fontawesome") &&
    !html.includes("lucide")
  ) {
    if (fix) {
      // Replace common icon patterns with Heroicons CDN or inline SVG suggestions
      issues.push({
        type: "hallucinated_asset",
        description:
          "Consider using Heroicons or Font Awesome for icons instead of custom paths",
        fixed: false,
      });
    }
  }

  // Fix broken Font Awesome references
  if (
    html.includes("fa-") &&
    !html.includes("fontawesome") &&
    !html.includes("font-awesome")
  ) {
    if (fix) {
      const faScript =
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">\n';
      if (html.includes("<head>") && !html.includes("font-awesome")) {
        html = html.replace("<head>", "<head>\n" + faScript);
        issues.push({
          type: "hallucinated_asset",
          description: "Added Font Awesome CDN for fa- icon classes",
          fixed: true,
          location: "<head>",
        });
      }
    }
  }

  return { html, issues };
}

// Tool definition
export const validateHtmlTool = {
  name: "validate_html",
  description: `Validate and fix common issues in generated HTML. Implements 9 post-processors from Google Research's Generative UI methodology:

1. API Key Detection - Warns about placeholder API keys
2. Error Detection - Injects error reporting JavaScript
3. JavaScript Fixes - Fixes common JS parsing issues
4. CSS/Tailwind Fixes - Ensures Tailwind CDN is included
5. Circular Dependencies - Detects problematic sizing patterns
6. HTML Escaping - Fixes unescaped characters in attributes
7. Citation Removal - Removes citation markers from JS code
8. API Issue Fixes - Warns about API configuration issues
9. Asset Fixes - Detects hallucinated asset URLs, adds icon CDNs

Use this tool BEFORE serve_html to catch and fix common problems in generated HTML.`,

  inputSchema: {
    type: "object" as const,
    properties: {
      html_content: {
        type: "string",
        description: "The HTML content to validate and optionally fix",
      },
      fix_errors: {
        type: "boolean",
        description:
          "Whether to auto-fix issues where possible (default: true)",
        default: true,
      },
    },
    required: ["html_content"],
  },

  execute: async (args: { html_content: string; fix_errors?: boolean }) => {
    const { html_content, fix_errors = true } = args;

    try {
      const result = validateAndFixHtml(html_content, fix_errors);

      // Build summary
      const fixedCount = result.issues.filter((i) => i.fixed).length;
      const unfixedCount = result.issues.filter((i) => !i.fixed).length;

      let summary = `## Validation Complete\n\n`;
      summary += `- **Issues found:** ${result.issues.length}\n`;
      summary += `- **Auto-fixed:** ${fixedCount}\n`;
      summary += `- **Needs attention:** ${unfixedCount}\n`;

      if (result.warnings.length > 0) {
        summary += `\n### Warnings\n`;
        for (const warning of result.warnings) {
          summary += `- ${warning}\n`;
        }
      }

      if (result.issues.length > 0) {
        summary += `\n### Issues\n`;
        for (const issue of result.issues) {
          const status = issue.fixed ? "FIXED" : "NEEDS ATTENTION";
          summary += `- [${status}] ${issue.type}: ${issue.description}`;
          if (issue.location) {
            summary += ` (${issue.location})`;
          }
          summary += `\n`;
        }
      }

      return {
        content: [
          {
            type: "text" as const,
            text: summary,
          },
          {
            type: "text" as const,
            text: `\n---\n\n### Validated HTML\n\n\`\`\`html\n${result.html}\n\`\`\``,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Validation failed: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  },
};
