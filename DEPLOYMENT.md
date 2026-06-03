# Deployment Guide - Vercel

This project is configured and ready for deployment to Vercel.

## Prerequisites

- Vercel account (free at https://vercel.com)
- GitHub account with this repository pushed

## Deployment Steps

### 1. Connect to Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel will auto-detect this is a Vite + React project

### 2. Configure Project Settings

- **Framework**: Vite
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm install` (default)

### 3. Environment Variables (if needed)

If your application needs environment variables:
1. Add them in the Vercel dashboard under "Settings" → "Environment Variables"
2. They will be injected during the build process

### 4. Deploy

Click "Deploy" and wait for the build to complete. Once successful, your site will be live at a Vercel URL.

## What's Been Configured

✅ **Removed vercel.json from src/** - Moved to project root  
✅ **Added .gitignore** - Proper exclusions for Node.js projects  
✅ **Updated vite.config.js** - Production build optimizations  
✅ **Fixed all ESLint errors** - Code passes linting  
✅ **Verified production build** - `npm run build` succeeds with 810KB JS (gzipped 192KB)

## Vercel Configuration Details

The `vercel.json` file configures URL rewrites to support single-page app routing:
- All requests to non-existent routes are rewritten to `/`
- React Router handles the routing on the client side

## Build Information

- **Build Tool**: Vite 5.4.0
- **Output Directory**: `dist/`
- **Main Bundle**: ~810KB (192KB gzipped)
- **CSS Bundle**: ~401KB (57KB gzipped)
- **Modules**: 164 optimized modules

## Post-Deployment

After deployment, verify:
1. Homepage loads correctly
2. Navigation links work (React Router hash-based routing)
3. Images load from `/assets/` path
4. No console errors in browser DevTools

## Troubleshooting

If deployment fails:
1. Check build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Verify `package.json` dependencies are correct
4. Run `npm run lint` locally to check for errors

## Local Testing Before Deploy

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```
