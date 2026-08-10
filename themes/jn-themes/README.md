# jn Themes

One VS Code extension containing personal comparison themes. The Color Theme menu lists the Milkshake variants in this order: **Deep Raspberry**, **Deep Teal**, **Soft Cobalt**, then **jn Mango Paper Markdown**. The Milkshake variants are derived from Bearded Theme's Milkshake Mango, whose source is licensed under GPL-3.0.

It deliberately changes only these Markdown treatments:

- fenced-code foreground: `#514b62` (Mineral Garden blue-slate)
- fenced-code background: `#eaded6`, including Markdown Inline Editor's `textCodeBlock.background`
- bold text: `#ae6a58` (Mineral Garden terracotta)

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
code --install-extension jn-themes-0.3.2.vsix
```
