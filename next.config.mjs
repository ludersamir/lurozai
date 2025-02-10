import { createCivicAuthPlugin } from "@civic/auth/nextjs";
import { config } from 'dotenv';

// Load environment variables based on NODE_ENV
const envFiles = [
  `.env.${process.env.NODE_ENV}.local`,
  `.env.${process.env.NODE_ENV}`,
  '.env.local',
  '.env'
];

envFiles.forEach(file => {
  config({
    path: file
  });
});

const clientId = process.env.CIVIC_CLIENT_ID;
console.log('CIVIC_CLIENT_ID:', clientId); // Debug log

const nextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
};

if (!clientId) {
  throw new Error('CIVIC_CLIENT_ID environment variable is not set');
}

const withCivicAuth = createCivicAuthPlugin({
  clientId,
  loginUrl: '/login',
  redirectUrl: '/',
  include: ['/', '/chat', '/chat/*', '/api/*'], // Add include patterns for all protected routes
});

export default withCivicAuth(nextConfig);
