import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  publishDate: text("publish_date").notNull(),
  image: text("image").notNull(),
  url: text("url"),
});

export const insertArticleSchema = createInsertSchema(articles).omit({ id: true });
export type Article = typeof articles.$inferSelect;
export type InsertArticle = z.infer<typeof insertArticleSchema>;

export const showcasedCards = pgTable("showcased_cards", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  url: text("url").notNull(),
  image: text("image").notNull(),
  type: text("type").notNull(),
});

export const insertCardSchema = createInsertSchema(showcasedCards).omit({ id: true });
export type Card = typeof showcasedCards.$inferSelect;
export type InsertCard = z.infer<typeof insertCardSchema>;
