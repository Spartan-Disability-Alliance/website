// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/VM89f8ww9y",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/sjsu_sda/",
        permanent: true,
      },
      {
        source: "/email",
        destination: "mailto:spartandisabilityalliance50@gmail.com",
        permanent: false,
      },
      {
        source: "/linktree",
        destination: "https://linktr.ee/spartandisabilityalliance",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
