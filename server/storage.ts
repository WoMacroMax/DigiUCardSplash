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
    return await db.select().from(articles);
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    const [article] = await db.select().from(articles).where(eq(articles.slug, slug));
    return article;
  }

  async getShowcasedCards(): Promise<Card[]> {
    return await db.select().from(showcasedCards);
  }
}

export const storage = new DatabaseStorage();
