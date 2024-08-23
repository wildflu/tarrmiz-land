/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.tarmeeztech.com',
                port: '',
                pathname: '/front/images/**',
            },
        ],
        domains: ['nhtagent.com'],
    },
};

export default nextConfig;
