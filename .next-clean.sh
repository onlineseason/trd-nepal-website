#!/bin/bash

# Clear Next.js and build cache
rm -rf .next
rm -rf node_modules/.cache
rm -rf node_modules/.vite

# Remove pnpm cache
pnpm store prune

# Reinstall dependencies
pnpm install

# Run development server
pnpm dev
