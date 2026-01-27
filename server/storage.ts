import { db } from "./db";
import { articles, showcasedCards, type Article, type InsertArticle, type Card, type InsertCard } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getArticles(): Promise<Article[]>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  getShowcasedCards(): Promise<Card[]>;
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

  async getShowcasedCards(): Promise<Card[]> {
    try {
      return await db.select().from(showcasedCards);
    } catch (error) {
      console.error("Database error in getShowcasedCards:", error);
      return [];
    }
  }
}

export const storage = new DatabaseStorage();
