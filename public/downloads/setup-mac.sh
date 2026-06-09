#!/bin/bash
#
# Script de pós-formatação do Mac
# Instala Homebrew, aplicativos e configura o Git automaticamente.
#
# Uso: bash setup-mac.sh
#

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPT_PATH="$SCRIPT_DIR/$(basename "${BASH_SOURCE[0]}")"

GIT_EMAIL="caiorissasilveiraa@gmail.com"
GIT_NAME="caiorissa"

log() {
  echo ""
  echo "==> $*"
}

setup_brew_path() {
  if [[ -x /opt/homebrew/bin/brew ]]; then
    eval "$(/opt/homebrew/bin/brew shellenv)"
  elif [[ -x /usr/local/bin/brew ]]; then
    eval "$(/usr/local/bin/brew shellenv)"
  fi
}

install_homebrew() {
  log "Instalando Homebrew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
}

open_new_terminal_for_phase2() {
  log "Abrindo um novo terminal para continuar a instalação..."
  osascript <<EOF
tell application "Terminal"
  activate
  do script "bash \"$SCRIPT_PATH\" --phase2"
end tell
EOF
}

install_brew_packages() {
  log "Atualizando Homebrew..."
  brew update

  log "Instalando aplicativos e ferramentas..."
  brew install --cask \
    brave-browser \
    discord \
    cursor \
    whatsapp \
    rectangle \
    middleclick

  brew install git python
}

install_equilotl() {
  log "Instalando Equilotl (Equicord)..."

  local arch url version tmpdir app_path
  if [[ "$(uname -m)" == "arm64" ]]; then
    arch="arm64"
  else
    arch="x64"
  fi

  version="$(curl -fsSL https://api.github.com/repos/Equicord/Equilotl/releases/latest | grep '"tag_name"' | head -1 | cut -d '"' -f 4)"
  url="https://github.com/Equicord/Equilotl/releases/download/${version}/Equilotl-darwin-${arch}.zip"

  tmpdir="$(mktemp -d)"
  trap 'rm -rf "$tmpdir"' RETURN

  curl -fsSL -o "$tmpdir/equilotl.zip" "$url"
  unzip -q "$tmpdir/equilotl.zip" -d "$tmpdir"

  app_path="$(find "$tmpdir" -maxdepth 2 -name '*.app' -print -quit)"
  if [[ -z "$app_path" ]]; then
    echo "Erro: não encontrei Equilotl.app no pacote baixado." >&2
    exit 1
  fi

  cp -R "$app_path" /Applications/
  log "Equilotl instalado em /Applications/$(basename "$app_path")"
}

configure_git() {
  log "Configurando Git..."
  git config --global user.email "$GIT_EMAIL"
  git config --global user.name "$GIT_NAME"

  echo ""
  echo "Git configurado:"
  git config --global --list | grep -E '^user\.(name|email)='
}

run_phase2() {
  setup_brew_path

  if ! command -v brew &>/dev/null; then
    echo "Erro: Homebrew não encontrado. Rode o script sem --phase2 primeiro." >&2
    exit 1
  fi

  install_brew_packages
  install_equilotl
  configure_git

  log "Tudo pronto!"
  echo ""
  echo "Aplicativos instalados:"
  echo "  - Brave Browser"
  echo "  - Discord"
  echo "  - Cursor"
  echo "  - Git"
  echo "  - WhatsApp"
  echo "  - Rectangle"
  echo "  - MiddleClick"
  echo "  - Python"
  echo "  - Equilotl (Equicord)"
  echo ""
  echo "Abra o Equilotl para configurar o Equicord no Discord."
}

main() {
  if [[ "${1:-}" == "--phase2" ]]; then
    run_phase2
    exit 0
  fi

  if command -v brew &>/dev/null || [[ -x /opt/homebrew/bin/brew ]] || [[ -x /usr/local/bin/brew ]]; then
    log "Homebrew já instalado. Continuando com a instalação dos apps..."
    run_phase2
    exit 0
  fi

  install_homebrew
  open_new_terminal_for_phase2

  log "Homebrew instalado!"
  echo "A instalação dos aplicativos vai continuar no novo terminal que acabou de abrir."
}

main "$@"
