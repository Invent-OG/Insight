import {
  pgTable,
  uuid,
  text,
  timestamp,
  integer,
  varchar,
} from "drizzle-orm/pg-core";

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
  imageUrl: text("image_url").notNull(), // 👈 this is imageUrl in Drizzle, even though it's snake_case in DB
  youtubeUrl: text("youtube_url"), // 👈 this is youtubeUrl in Drizzle
});

export const leads = pgTable("leads", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  whatsappNumber: varchar("whatsapp_number", { length: 15 }).notNull(),
  electricityBill: integer("electricity_bill").notNull(),
  city: text("city").notNull(),
  companyName: text("company_name"),
  type: text("type", {
    enum: ["residential", "housing_society", "commercial"],
  }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
