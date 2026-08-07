# jn VS Code Add-ons

Personal VS Code add-ons for comfortable Markdown writing:

- **jn Themes** — Milkshake Mango variants plus Mango Paper Markdown.
- **jn Markdown Inline Editor** — a personal build of Markdown Inline Editor with smaller, configurable rendered heading sizes.

## Delivery workflow

Each patch is a reviewable delivery. Before considering a change done, the maintainer must:

1. Run the relevant validation.
2. For any extension change, create a new versioned VSIX release. A source-only commit is not installable by users.
3. Commit the patch, its version/changelog update, and the versioned VSIX in `releases/` with descriptive Conventional Commit messages.
4. Update `scripts/install-local.sh` to install that new VSIX.
5. Push the commit and release tag to `origin/main`.
6. Report the commit ID, version, tag, and installable VSIX artifact.

Do not treat an ignored `dist/extension.vsix` as a release artifact: it is local-only and is not obtained by `git pull`. Verify that the VSIX manifest has the new version before pushing. This lets a VS Code client pull the repository and install/test every completed change without relying on uncommitted local work.

## Install or update on a VS Code client

Run this on the machine where the VS Code window is displayed. Do not run it only inside an SSH host or development container: themes and editor UI extensions run on the VS Code client.

```bash
git clone https://github.com/jn-wy/vs-code-addon.git
cd vs-code-addon
./scripts/install-local.sh
```

If you cloned it before, update instead:

```bash
cd vs-code-addon
git pull
./scripts/install-local.sh
```

Restart VS Code, or run **Developer: Reload Window**.

## Select a theme

Open the Command Palette and choose **Preferences: Color Theme**. The available themes are ordered as:

1. `jn Milkshake Mango + Deep Raspberry`
2. `jn Milkshake Mango + Deep Teal`
3. `jn Milkshake Mango + Soft Cobalt`
4. `jn Mango Paper Markdown`

## Adjust Markdown heading sizes

Open **Preferences: Open User Settings (JSON)** and add or change:

```json
{
  "markdownInlineEditor.headings.h1Scale": 150,
  "markdownInlineEditor.headings.h2Scale": 125,
  "markdownInlineEditor.headings.h3Scale": 120,
  "markdownInlineEditor.headings.h4Scale": 110
}
```

The values are percentages of the normal editor font size. Changes take effect immediately.

## Inline-code background

To keep inline code from gaining a gray overlay, use:

```json
{
  "markdownInlineEditor.colors.inlineCodeBackground": "#f3eae3"
}
```

## Notes

- The original `Markdown Inline Editor` extension should be uninstalled, so only one extension decorates Markdown at a time.
- VS Code Settings Sync will synchronize selected theme and settings, but it cannot obtain private/local VSIX files. Run the update commands above once on each client machine.
- The custom renderer is based on [SeardnaSchmid/markdown-inline-editor-vscode](https://github.com/SeardnaSchmid/markdown-inline-editor-vscode) and retains its MIT license.
