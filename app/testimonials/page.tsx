"use client";
import React, { useState } from "react";
import {
  useTestimonials,
  useCreateTestimonial,
  useUpdateTestimonial,
  useDeleteTestimonial,
  Testimonial,
} from "@/lib/queries/testimonials";

// Props: Pass userRole from the parent component
export default function TestimonialsUI({ userRole }: { userRole: string }) {
  const { data, isLoading, error } = useTestimonials();
  const createMutation = useCreateTestimonial();
  const updateMutation = useUpdateTestimonial();
  const deleteMutation = useDeleteTestimonial();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<Testimonial, "id">>({
    name: "",
    role: "",
    content: "",
    imageUrl: "",
    youtubeUrl: "",
  });

  const resetForm = () => {
    setEditingId(null);
    setForm({
      name: "",
      role: "",
      content: "",
      imageUrl: "",
      youtubeUrl: "",
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateMutation.mutate({ id: editingId, data: form });
    } else {
      createMutation.mutate(form);
    }
    resetForm();
  };

  if (isLoading) return <p>Loading testimonials...</p>;
  if (error) return <p>Error loading testimonials.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>

      {/* List */}
      <div className="space-y-4 mb-8">
        {data?.testimonials.length === 0 && <p>No testimonials found.</p>}
        {data?.testimonials.map((t) => (
          <div
            key={t.id}
            className="border rounded p-4 flex justify-between items-start"
          >
            <div>
              <h3 className="font-semibold">
                {t.name} ({t.role})
              </h3>
              <p className="mt-1">{t.content}</p>
              {t.imageUrl && (
                <img
                  src={t.imageUrl}
                  alt={t.name}
                  className="w-24 h-24 object-cover rounded mt-2"
                />
              )}
              {t.youtubeUrl && (
                <a
                  href={t.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-1 block"
                >
                  Watch Video
                </a>
              )}
            </div>

            {/* Admin Controls */}
            {userRole === "Admin" && (
              <div className="flex flex-col gap-2">
                <button
                  className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                  onClick={() => {
                    setEditingId(t.id);
                    setForm({
                      name: t.name,
                      role: t.role,
                      content: t.content,
                      imageUrl: t.imageUrl || "",
                      youtubeUrl: t.youtubeUrl || "",
                    });
                  }}
                >
                  Edit
                </button>

                <button
                  className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
                  onClick={() => deleteMutation.mutate(t.id)}
                  disabled={deleteMutation.isPending}
                >
                  {deleteMutation.isPending ? "Deleting..." : "Delete"}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      {userRole === "Admin" && (
        <form onSubmit={onSubmit} className="border p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Testimonial" : "Add Testimonial"}
          </h3>

          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            required
            className="w-full mb-3 p-2 border rounded"
          />
          <textarea
            placeholder="Content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
            className="w-full mb-3 p-2 border rounded"
            rows={4}
          />
          <input
            type="url"
            placeholder="Image URL (optional)"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="url"
            placeholder="YouTube URL (optional)"
            value={form.youtubeUrl}
            onChange={(e) => setForm({ ...form, youtubeUrl: e.target.value })}
            className="w-full mb-3 p-2 border rounded"
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              {editingId
                ? updateMutation.isPending
                  ? "Updating..."
                  : "Update"
                : createMutation.isPending
                ? "Creating..."
                : "Create"}
            </button>
            {editingId && (
              <button
                type="button"
                className="px-4 py-2 border rounded"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
