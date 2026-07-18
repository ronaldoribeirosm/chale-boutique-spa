import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/o-chale", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/como-chegar", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/arredores", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/politica-cancelamento", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
