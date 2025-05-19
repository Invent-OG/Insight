import { db } from "./db";

async function testConnection() {
  try {
    const result = await db.query.blogs.findMany(); // or any table
    console.log("✅ DB Connected. Blogs:", result);
  } catch (error) {
    console.error("❌ DB Connection failed:", error);
  }
}

testConnection();
