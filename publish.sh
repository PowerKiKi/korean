#!/usr/bin/env bash

set -xe

# Clean
git rm -rf --ignore-unmatch docs/

# Build
ng build --prod --base-href /korean/
cp docs/index.html docs/404.html

# Publish
git add docs/
git commit docs/ -m 'Publish on GitHub Pages'
git push
