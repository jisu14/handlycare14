import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy media to public/media
const srcDir = path.join(__dirname, 'media');
const destDir = path.join(__dirname, 'public', 'media');

try {
  if (fs.existsSync(srcDir)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    const files = fs.readdirSync(srcDir);
    for (const file of files) {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      try {
        const srcStat = fs.statSync(srcFile);
        if (fs.existsSync(destFile)) {
          const destStat = fs.statSync(destFile);
          if (srcStat.size === destStat.size && srcStat.mtimeMs === destStat.mtimeMs) {
            continue;
          }
        }
        fs.copyFileSync(srcFile, destFile);
      } catch (err) {
        // Silently ignore copy conflicts between parallel build workers on Windows
      }
    }
    console.log('✅ Copied media folder to public/media');
  }
} catch(e) {
  console.error('Failed to copy media:', e);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
};

export default nextConfig;
