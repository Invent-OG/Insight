"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBlog, useUpdateBlog } from "@/lib/queries/blogs";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase/client"; // ✅ Your initialized client

const blogSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  imageUrl: z.string().url("Image upload is required"),
  category: z.string().min(2, "Category must be at least 2 characters"),
});

type BlogFormData = z.infer<typeof blogSchema>;

interface BlogFormProps {
  onClose: () => void;
  initialData?: BlogFormData & { id: string };
}

export default function BlogForm({ onClose, initialData }: BlogFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createBlogMutation = useCreateBlog();
  const updateBlogMutation = useUpdateBlog();

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: initialData || {
      title: "",
      excerpt: "",
      content: "",
      imageUrl: "",
      category: "",
    },
  });

  const handleImageUpload = async (file: File) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `blogs/${fileName}`;

    const { error } = await supabase.storage
      .from("images")
      .upload(filePath, file);
    if (error) {
      throw new Error("Image upload failed");
    }

    const { data } = supabase.storage.from("blogs").getPublicUrl(filePath);
    return data.publicUrl;
  };

  const onSubmit = async (data: BlogFormData) => {
    setIsSubmitting(true);
    try {
      if (initialData?.id) {
        await updateBlogMutation.mutateAsync({ id: initialData.id, data });
      } else {
        await createBlogMutation.mutateAsync(data);
      }
      toast.success(initialData ? "Blog updated" : "Blog created");
      onClose();
    } catch {
      toast.error("Failed to submit blog");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {initialData ? "Edit Blog Post" : "Create New Blog Post"}
        </h2>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter blog title" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter blog category" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Excerpt */}
          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Excerpt</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter blog excerpt"
                    className="h-20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Content */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter blog content"
                    className="h-40"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* File Upload */}
          <FormItem>
            <FormLabel>Upload Image</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  try {
                    const url = await handleImageUpload(file);
                    form.setValue("imageUrl", url);
                    toast.success("Image uploaded successfully");
                  } catch (error) {
                    toast.error("Image upload failed");
                  }
                }}
              />
            </FormControl>
            {form.watch("imageUrl") && (
              <img
                src={form.watch("imageUrl")}
                alt="Preview"
                className="mt-4 w-full max-h-48 object-cover rounded-md"
              />
            )}
            <FormMessage />
          </FormItem>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                createBlogMutation.isPending ||
                updateBlogMutation.isPending
              }
            >
              {isSubmitting
                ? "Saving..."
                : initialData
                ? "Update Blog"
                : "Create Blog"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
