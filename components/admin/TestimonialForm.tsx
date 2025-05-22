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
import { testimonialSchema } from "@/lib/types/testimonials";

type TestimonialFormData = z.infer<typeof testimonialSchema>;

interface TestimonialFormProps {
  onClose: () => void;
  initialData?: TestimonialFormData & { id: string };
  onSuccess?: () => void; // <-- New prop for notifying parent on success
}

export default function TestimonialForm({
  onClose,
  initialData,
  onSuccess,
}: TestimonialFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFileToUpload(file);
  };

  const onSubmit = async (data: TestimonialFormData) => {
    setIsSubmitting(true);

    try {
      let imageUrl = data.imageUrl;

      if (fileToUpload) {
        setUploading(true);
        const fileExt = fileToUpload.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `testimonials/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("images")
          .upload(filePath, fileToUpload);

        if (uploadError) {
          toast.error("Image upload failed");
          setUploading(false);
          setIsSubmitting(false);
          return;
        }

        const { data: publicUrlData } = supabase.storage
          .from("images")
          .getPublicUrl(filePath);

        if (!publicUrlData?.publicUrl) {
          toast.error("Failed to get public image URL");
          setUploading(false);
          setIsSubmitting(false);
          return;
        }

        imageUrl = publicUrlData.publicUrl;
        setUploading(false);
      }

      const payload = {
        ...data,
        imageUrl,
      };

      if (initialData?.id) {
        await updateTestimonialMutation.mutateAsync({
          id: initialData.id,
          data: payload,
        });
        toast.success("Testimonial updated successfully");
      } else {
        await createTestimonialMutation.mutateAsync(payload);
        toast.success("Testimonial created successfully");
      }

      form.reset();
      setFileToUpload(null);

      if (onSuccess) {
        onSuccess(); // Notify parent to reset page and close form
      } else {
        onClose();
      }
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
          {/* Name */}
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

          {/* Role */}
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
                    placeholder="Enter testimonial content"
                    className="min-h-[100px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Upload */}
          <FormItem>
            <FormLabel>Upload Image</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                disabled={uploading || isSubmitting}
              />
            </FormControl>
            {uploading && <p className="text-sm text-muted">Uploading...</p>}

            {fileToUpload && (
              <img
                src={URL.createObjectURL(fileToUpload)}
                alt="Preview"
                className="h-20 w-20 object-cover rounded-md mt-2"
              />
            )}

            {!fileToUpload && form.watch("imageUrl") && (
              <img
                src={form.watch("imageUrl")}
                alt="Uploaded"
                className="h-20 w-20 object-cover rounded-md mt-2"
              />
            )}
            <FormMessage />
          </FormItem>

          {/* Hidden input for imageUrl */}
          <input type="hidden" {...form.register("imageUrl")} />

          {/* YouTube URL */}
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

          {/* Submit Button */}
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
