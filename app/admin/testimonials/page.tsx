"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import TestimonialGrid from "@/components/admin/TestimonialGrid";
import TestimonialForm from "@/components/admin/TestimonialForm";

export default function TestimonialsPage() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Testimonials Management</h1>
        {/* <Button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add New Testimonial
        </Button> */}
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search testimonials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <TestimonialGrid searchTerm={searchTerm} />

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-background rounded-lg w-full max-w-xl mx-auto shadow-lg p-6">
            <TestimonialForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
