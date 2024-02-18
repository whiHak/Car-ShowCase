/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{hostname:"cdn.imagin.studio"}]
    },
    typescript:{
        ignoreBuildErrors: true
    }
};

export default nextConfig;
