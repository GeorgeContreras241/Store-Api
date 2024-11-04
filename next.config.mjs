/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.cache = false; // Desactiva el caché de Webpack para evitar problemas de recarga
        return config;
      },
};

export default nextConfig;

