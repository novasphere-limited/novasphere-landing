/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: {
      PAYYME_BASE_URL: process.env.API_URL,
    },
  },
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
    "@mui/styles": {
      transform: "@mui/styles/{{member}}",
    },
    "@mui/lab": {
      transform: "@mui/lab/{{member}}",
    },
  },
  images: {
    remotePatterns: [{ hostname: "res.cloudinary.com" }],
  },
};

module.exports = nextConfig;
