/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  externals: [
    "child_process",
    "dns",
    "fs",
    "net",
    "tls",
  ]
}

module.exports = nextConfig
