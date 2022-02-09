/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    WEB_URI:process.env.WEB_URI,
    IPIFY_API_key:process.env.IPIFY_API_key,
    MAPBOX_API_key:process.env.MAPBOX_API_key
  },
  images: {
    domains: ['localhost:3000'],
  }
}
