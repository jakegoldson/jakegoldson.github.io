#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# deploy
git subtree push --prefix dist origin gh-pages
