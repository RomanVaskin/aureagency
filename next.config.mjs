/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deploy builds into a separate dir and swaps it in only after success,
  // so a running server never serves HTML whose assets were overwritten.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
