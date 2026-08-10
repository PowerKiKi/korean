#!/usr/bin/env bash

set -xe

# Build
pnpm run build

# Move build
git rm -rf --ignore-unmatch docs/
cp -rv dist/korean/browser/ docs

# Publish
git add docs/
git commit docs/ -m 'Publish on GitHub Pages'
git push
