import { db } from "./db";
import { articles, showcasedCards, type Article, type InsertArticle, type Card, type InsertCard } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getArticles(): Promise<Article[]>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  getArticleById(id: number): Promise<Article | undefined>;
  getShowcasedCards(): Promise<Card[]>;
  getCardById(id: number): Promise<Card | undefined>;
  getCardsByType(type: string): Promise<Card[]>;
}

export class DatabaseStorage implements IStorage {
  async getArticles(): Promise<Article[]> {
    try {
      return await db.select().from(articles);
    } catch (error) {
      console.error("Database error in getArticles:", error);
      return [];
    }
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    try {
      const [article] = await db.select().from(articles).where(eq(articles.slug, slug));
      return article;
    } catch (error) {
      console.error("Database error in getArticleBySlug:", error);
      return undefined;
    }
  }

  async getArticleById(id: number): Promise<Article | undefined> {
    const [article] = await db.select().from(articles).where(eq(articles.id, id));
    return article;
  }

  async getShowcasedCards(): Promise<Card[]> {
    try {
      return await db.select().from(showcasedCards);
    } catch (error) {
      console.error("Database error in getShowcasedCards:", error);
      return [];
    }
  }

  async getCardById(id: number): Promise<Card | undefined> {
    const [card] = await db.select().from(showcasedCards).where(eq(showcasedCards.id, id));
    return card;
  }

  async getCardsByType(type: string): Promise<Card[]> {
    return await db.select().from(showcasedCards).where(eq(showcasedCards.type, type));
  }
}

export const storage = new DatabaseStorage();
