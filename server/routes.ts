import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // API Documentation endpoint
  app.get("/api", (_req, res) => {
    const baseUrl = process.env.REPLIT_DEV_DOMAIN 
      ? `https://${process.env.REPLIT_DEV_DOMAIN}`
      : process.env.REPLIT_DOMAINS
        ? `https://${process.env.REPLIT_DOMAINS.split(',')[0]}`
        : 'http://localhost:5000';
    
    res.json({
      name: "DigiUCard API",
      version: "1.0.0",
      description: "Public API for DigiUCard digital identity platform",
      baseUrl,
      endpoints: {
        articles: {
          list: {
            method: "GET",
            path: "/api/articles",
            description: "Get all articles/splash pages",
            example: `${baseUrl}/api/articles`
          },
          getBySlug: {
            method: "GET", 
            path: "/api/articles/:slug",
            description: "Get a specific article by slug",
            example: `${baseUrl}/api/articles/rod-page`
          },
          getById: {
            method: "GET",
            path: "/api/articles/id/:id",
            description: "Get a specific article by ID",
            example: `${baseUrl}/api/articles/id/1`
          }
        },
        cards: {
          list: {
            method: "GET",
            path: "/api/cards",
            description: "Get all showcased digital cards",
            example: `${baseUrl}/api/cards`
          },
          getById: {
            method: "GET",
            path: "/api/cards/:id",
            description: "Get a specific card by ID",
            example: `${baseUrl}/api/cards/1`
          },
          getByType: {
            method: "GET",
            path: "/api/cards/type/:type",
            description: "Get cards filtered by type",
            example: `${baseUrl}/api/cards/type/Connect`
          }
        }
      },
      dataModels: {
        article: {
          id: "number",
          slug: "string",
          title: "string",
          publishDate: "string",
          image: "string (URL)",
          url: "string | null (URL)"
        },
        card: {
          id: "number",
          title: "string",
          description: "string",
          url: "string (URL)",
          image: "string (URL)",
          type: "string"
        }
      }
    });
  });

  // Articles endpoints
  app.get("/api/articles", async (_req, res) => {
    const articles = await storage.getArticles();
    res.json(articles);
  });

  app.get("/api/articles/id/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID format" });
    const article = await storage.getArticleById(id);
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
  });

  app.get("/api/articles/:slug", async (req, res) => {
    const article = await storage.getArticleBySlug(req.params.slug);
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
  });

  // Cards endpoints
  app.get("/api/cards", async (_req, res) => {
    const cards = await storage.getShowcasedCards();
    res.json(cards);
  });

  app.get("/api/cards/type/:type", async (req, res) => {
    const cards = await storage.getCardsByType(req.params.type);
    res.json(cards);
  });

  app.get("/api/cards/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID format" });
    const card = await storage.getCardById(id);
    if (!card) return res.status(404).json({ message: "Card not found" });
    res.json(card);
  });

  return httpServer;
}
