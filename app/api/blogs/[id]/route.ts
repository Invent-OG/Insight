import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(2),
  excerpt: z.string().min(10),
  content: z.string().min(50),
  imageUrl: z.string().url(),
  category: z.string().min(2),
});

// GET /api/blogs/[id]
export async function GET(
  _req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const [blog] = await db.select().from(blogs).where(eq(blogs.id, id));

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[id]
export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const body = await req.json();
    const data = blogSchema.parse(body);

    const [existing] = await db.select().from(blogs).where(eq(blogs.id, id));
    if (!existing) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    const [updatedBlog] = await db
      .update(blogs)
      .set(data)
      .where(eq(blogs.id, id))
      .returning();

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[id]
export async function DELETE(
  _req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const [blog] = await db.select().from(blogs).where(eq(blogs.id, id));

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    await db.delete(blogs).where(eq(blogs.id, id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
