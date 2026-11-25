import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "入境事務助理員面試練習",
    short_name: "面試練習",
    description: "動機題、情景題與部門知識題練習",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1ea",
    theme_color: "#1f4b63",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
