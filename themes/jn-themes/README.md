# jn Themes

One VS Code extension containing personal comparison themes. The Color Theme menu is numbered to force this order: **Deep Teal**, **Deep Raspberry**, **Soft Cobalt**, then **jn Mango Paper Markdown**. The Milkshake variants are derived from Bearded Theme's Milkshake Mango, whose source is licensed under GPL-3.0.

It deliberately changes only these Markdown treatments:

- fenced-code foreground/background: `#3f3632` on a per-theme tint (Accent Tint · Subtle — each theme's own accent color mixed 6% into the paper background), including Markdown Inline Editor's `textCodeBlock.background`. Deep Raspberry `#eededb`, Deep Teal `#e5e3dc`, Soft Cobalt `#e7e1df`. See `../palette-comparison.html` for the other candidates that were reviewed.
- bold text: `#b93136` (Bright Garnet) — chosen after the shared `#ae6a58` bold rule read as too muted/obscured; see `../palette-comparison.html` for the archived alternatives

All other color and UI tokens are retained from Milkshake Mango.

Mango Paper uses a terracotta selection color distinct from the quiet beige active-line highlight, so drag selections remain visible in inline code and ordinary text.

## Markdown Inline Editor companion settings

Markdown Inline Editor controls inline-code decorations independently of VS Code themes. These user settings keep inline code readable while matching the editor paper instead of applying its default gray overlay:

```json
{
  "markdownInlineEditor.colors.inlineCodeBackground": "#f3eae3"
}
```

## Install

```bash
npx --yes @vscode/vsce package
code --install-extension jn-themes-0.3.4.vsix
```

Versioned VSIX releases live under `releases/`.
