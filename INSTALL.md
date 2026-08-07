# Personal VS Code add-ons

This repository distributes two local VSIX extensions:

- `releases/jn-markdown-inline-editor-1.24.4.vsix` — Markdown Inline Editor fork with configurable H1/H2 scales.
- `themes/jn-themes/releases/jn-themes-0.3.1.vsix` — the jn light-theme collection.

Run the installer from a clone on the machine running the VS Code UI:

```bash
./scripts/install-local.sh
```

Themes and UI-facing editor extensions must be installed on each VS Code client, not only in an SSH host or development container. Settings Sync can then synchronize your selected theme and settings such as `markdownInlineEditor.headings.h1Scale`.

The custom renderer uses the same command and configuration namespace as the upstream Markdown Inline Editor. Uninstall the upstream `codesmith.markdown-inline-editor-vscode` extension before enabling this fork, so two extensions do not decorate the same Markdown editor.
