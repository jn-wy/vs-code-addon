#!/usr/bin/env sh
set -eu

repo_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
code_bin=${CODE_BIN:-code}

"$code_bin" --install-extension "$repo_dir/releases/jn-markdown-inline-editor-1.26.2.vsix" --force
"$code_bin" --install-extension "$repo_dir/themes/jn-themes/releases/jn-themes-0.3.2.vsix" --force

printf '%s\n' 'Installed jn Markdown Inline Editor and jn Themes.'
printf '%s\n' 'If the upstream Markdown Inline Editor is installed, uninstall it before reloading VS Code.'
