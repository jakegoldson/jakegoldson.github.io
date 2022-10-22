#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# deploy
git checkout master
git add dist && git commit -m "update dist" && git push
git subtree push --prefix dist origin gh-pages
