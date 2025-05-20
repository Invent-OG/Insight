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

import {
  useCreateTestimonial,
  useUpdateTestimonial,
} from "@/lib/queries/testimonials";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase/client";

const testimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  youtubeUrl: z
    .string()
    .url("Please enter a valid YouTube URL")
    .optional()
    .or(z.literal("")),
  imageUrl: z.string().url("Profile image is required"),
});

type TestimonialFormData = z.infer<typeof testimonialSchema>;

interface TestimonialFormProps {
  onClose: () => void;
  initialData?: TestimonialFormData & { id: string };
}

export default function TestimonialForm({
  onClose,
  initialData,
}: TestimonialFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);

  const createTestimonialMutation = useCreateTestimonial();
  const updateTestimonialMutation = useUpdateTestimonial();

  const form = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: initialData || {
      name: "",
      role: "",
      content: "",
      youtubeUrl: "",
      imageUrl: "",
    },
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `testimonials/${fileName}`;

    const { error } = await supabase.storage
      .from("testimonials")
      .upload(filePath, file);

    if (error) {
      toast.error("Image upload failed");
      setUploading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("testimonials")
      .getPublicUrl(filePath);

    const imageUrl = publicUrlData?.publicUrl;
    if (imageUrl) {
      form.setValue("imageUrl", imageUrl);
      toast.success("Image uploaded successfully");
    }

    setUploading(false);
  };

  const onSubmit = async (data: TestimonialFormData) => {
    setIsSubmitting(true);
    try {
      if (initialData?.id) {
        await updateTestimonialMutation.mutateAsync({
          id: initialData.id,
          data,
        });
        toast.success("Testimonial updated successfully");
      } else {
        await createTestimonialMutation.mutateAsync(data);
        toast.success("Testimonial created successfully");
      }

      form.reset();
      onClose();
    } catch (error) {
      toast.error(
        initialData
          ? "Failed to update testimonial"
          : "Failed to create testimonial"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {initialData ? "Edit Testimonial" : "Add New Testimonial"}
        </h2>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter role" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter testimonial content"
                    className="min-h-[100px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel>Profile Image</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                disabled={uploading}
              />
            </FormControl>
            {uploading && <p className="text-sm text-muted">Uploading...</p>}
            <FormMessage />
          </FormItem>

          {/* Hidden input to store uploaded image URL */}
          <input type="hidden" {...form.register("imageUrl")} />

          <FormField
            control={form.control}
            name="youtubeUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>YouTube URL (Optional)</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter YouTube video URL" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4">
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                uploading ||
                createTestimonialMutation.isPending ||
                updateTestimonialMutation.isPending
              }
            >
              {isSubmitting
                ? "Saving..."
                : initialData
                ? "Update Testimonial"
                : "Add Testimonial"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
