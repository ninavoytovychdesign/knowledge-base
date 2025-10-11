#!/usr/bin/env bash
set -e

MSG="${1:-docs: update knowledge base}"
git add -A
git commit -m "$MSG" || echo "No changes to commit"
git push origin main
echo "✅ Pushed with message: $MSG"
