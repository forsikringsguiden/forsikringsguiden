import type { MetadataRoute } from "next";
import { articles } from "../lib/articles";

const BASE_URL = "https://forsikringsguiden.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const insurancePages = [
    "/",
    "/bilforsikring",
    "/husforsikring",
    "/innboforsikring",
    "/reiseforsikring",
    "/blogg",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPosts = articles.map((article) => ({
    url: `${BASE_URL}/blogg/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...insurancePages, ...blogPosts];
}
