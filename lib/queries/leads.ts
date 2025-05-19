import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// ✅ Correct Lead type
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  createdAt: string;
}

// ✅ Fetch all leads
const fetchLeads = async (): Promise<{ leads: Lead[] }> => {
  const response = await fetch("/api/leads");
  if (!response.ok) throw new Error("Failed to fetch leads");
  return response.json();
};

// ✅ Create a new lead
const createLead = async (
  data: Omit<Lead, "id" | "createdAt">
): Promise<Lead> => {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create lead");
  const result = await response.json();
  return result.lead;
};

// ✅ Delete lead by ID
const deleteLead = async (id: string): Promise<void> => {
  const response = await fetch(`/api/leads?id=${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete lead");
};

// ✅ React Query hooks
export function useLeads() {
  return useQuery({
    queryKey: ["leads"],
    queryFn: fetchLeads,
  });
}

export function useCreateLead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}

export function useDeleteLead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}
