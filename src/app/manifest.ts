import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "XiqueXique Viagens",
    short_name: "XiqueXique",
    description:
      "Viagens parceladas no carnê, sem juros e sem consulta ao SPC. Turismo socioambiental.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#FFF8F0",
    theme_color: "#f97316",
    lang: "pt-BR",
    categories: ["travel", "lifestyle"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
