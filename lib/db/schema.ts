import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"), // 👈 this is imageUrl in Drizzle, even though it's snake_case in DB
  youtubeUrl: text("youtube_url"), // 👈 this is youtubeUrl in Drizzle
});

export const leads = pgTable("leads", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  interest: text("interest").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
