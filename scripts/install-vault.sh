#!/usr/bin/env bash
# instala el build actual en un vault de Obsidian (default: clarity-os) y deja un zip en releases/
set -euo pipefail
cd "$(dirname "$0")/.."
VAULT="${1:-$HOME/vm/home/luis.jobs/second-brain/clarity-os}"
DEST="$VAULT/.obsidian/plugins/pinax-bases"

npm run build
mkdir -p "$DEST" releases
cp main.js manifest.json styles.css "$DEST/"
VERSION=$(node -p "require('./manifest.json').version")
rm -f "releases/pinax-bases-$VERSION.zip"
zip -j -q "releases/pinax-bases-$VERSION.zip" main.js manifest.json styles.css
echo "instalado en $DEST"
echo "zip: releases/pinax-bases-$VERSION.zip"
