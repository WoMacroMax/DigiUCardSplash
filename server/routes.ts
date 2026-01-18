import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/articles", async (_req, res) => {
    const articles = await storage.getArticles();
    res.json(articles);
  });

  app.get("/api/articles/:slug", async (req, res) => {
    const article = await storage.getArticleBySlug(req.params.slug);
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
  });

  app.get("/api/cards", async (_req, res) => {
    const cards = await storage.getShowcasedCards();
    res.json(cards);
  });

  return httpServer;
}
