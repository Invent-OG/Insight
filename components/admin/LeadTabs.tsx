// "use client";

// import { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Search, Download } from "lucide-react";
// import { Pagination } from "@/components/ui/pagination";
// import { DeleteConfirmation } from "./DeleteConfirmation";
// import { useLeads, useDeleteLead } from "@/lib/queries/leads";
// import { toast } from "sonner";

// const ITEMS_PER_PAGE = 10;

// export default function LeadTabs() {
//   const { data, isLoading, error } = useLeads();
//   const deleteMutation = useDeleteLead();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   // Delete lead handler
//   const handleDelete = async (id: string) => {
//     try {
//       await deleteMutation.mutateAsync(id);
//       toast.success("Lead deleted", {
//         description: "The lead has been successfully deleted.",
//       });
//     } catch {
//       toast.error("Failed to delete lead", {
//         description: "Please try again.",
//       });
//     }
//   };

//   if (isLoading) {
//     return <div className="p-8 text-center">Loading leads...</div>;
//   }

//   if (error) {
//     return (
//       <div className="p-8 text-center text-red-500">
//         Error loading leads: {(error as Error).message}
//       </div>
//     );
//   }

//   const leads = data?.leads ?? [];

//   // Since you don't have 'type' on your leads, just return all filtered by search
//   const filteredLeads = leads.filter((lead) => {
//     if (searchTerm === "") return true;
//     const term = searchTerm.toLowerCase();
//     return (
//       lead.name.toLowerCase().includes(term) ||
//       lead.email.toLowerCase().includes(term) ||
//       lead.phone.includes(term) ||
//       lead.interest.toLowerCase().includes(term)
//     );
//   });

//   const totalPages = Math.ceil(filteredLeads.length / ITEMS_PER_PAGE);
//   const paginatedLeads = filteredLeads.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   // Export CSV for all filtered leads (since no type)
//   const handleExport = () => {
//     const csv = [
//       ["Name", "Email", "Phone", "Interest", "Created At"],
//       ...filteredLeads.map((lead) => [
//         lead.name,
//         lead.email,
//         lead.phone,
//         lead.interest,
//         new Date(lead.createdAt).toLocaleDateString(),
//       ]),
//     ]
//       .map((row) => row.join(","))
//       .join("\n");

//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `leads.csv`;
//     a.click();
//     window.URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <div className="relative w-64">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
//           <Input
//             placeholder="Search leads..."
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="pl-10"
//           />
//         </div>
//         <Button variant="outline" onClick={handleExport}>
//           <Download className="h-4 w-4 mr-2" />
//           Export CSV
//         </Button>
//       </div>

//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Name</TableHead>
//               <TableHead>Email</TableHead>
//               <TableHead>Phone</TableHead>
//               <TableHead>Interest</TableHead>
//               <TableHead>Created At</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {paginatedLeads.map((lead) => (
//               <TableRow key={lead.id}>
//                 <TableCell>{lead.name}</TableCell>
//                 <TableCell>{lead.email}</TableCell>
//                 <TableCell>{lead.phone}</TableCell>
//                 <TableCell>{lead.interest}</TableCell>
//                 <TableCell>
//                   {new Date(lead.createdAt).toLocaleDateString()}
//                 </TableCell>
//                 <TableCell className="text-right">
//                   <DeleteConfirmation
//                     onDelete={() => handleDelete(lead.id)}
//                     title="Delete Lead"
//                     description="Are you sure you want to delete this lead? This action cannot be undone."
//                   />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       {totalPages > 1 && (
//         <div className="mt-4">
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, Trash2 } from "lucide-react";
import { Pagination } from "@/components/ui/pagination";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { useLeads, useDeleteLead } from "@/lib/queries/leads";
import { toast } from "sonner";

const ITEMS_PER_PAGE = 10;

export default function LeadTabs() {
  const { data, isLoading, error } = useLeads();
  const deleteMutation = useDeleteLead();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [confirmingDeleteAll, setConfirmingDeleteAll] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
      toast.success("Lead deleted", {
        description: "The lead has been successfully deleted.",
      });
    } catch {
      toast.error("Failed to delete lead", {
        description: "Please try again.",
      });
    }
  };

  const handleDeleteSelected = async () => {
    try {
      await Promise.all(
        selectedLeads.map((id) => deleteMutation.mutateAsync(id))
      );
      toast.success("Selected leads deleted successfully");
      setSelectedLeads([]);
    } catch {
      toast.error("Failed to delete selected leads");
    } finally {
      setConfirmingDeleteAll(false);
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedLeads((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAllVisible = () => {
    const allVisibleIds = paginatedLeads.map((lead) => lead.id);
    const allSelected = allVisibleIds.every((id) => selectedLeads.includes(id));
    setSelectedLeads((prev) =>
      allSelected
        ? prev.filter((id) => !allVisibleIds.includes(id))
        : [...prev, ...allVisibleIds.filter((id) => !prev.includes(id))]
    );
  };

  if (isLoading) {
    return <div className="p-8 text-center">Loading leads...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Error loading leads: {(error as Error).message}
      </div>
    );
  }

  const leads = data?.leads ?? [];

  const filteredLeads = leads.filter((lead) => {
    if (searchTerm === "") return true;
    const term = searchTerm.toLowerCase();
    return (
      lead.name.toLowerCase().includes(term) ||
      lead.email.toLowerCase().includes(term) ||
      lead.phone.includes(term) ||
      lead.interest.toLowerCase().includes(term)
    );
  });

  const totalPages = Math.ceil(filteredLeads.length / ITEMS_PER_PAGE);
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleExport = () => {
    const csv = [
      ["Name", "Email", "Phone", "Interest", "Created At"],
      ...filteredLeads.map((lead) => [
        lead.name,
        lead.email,
        lead.phone,
        lead.interest,
        new Date(lead.createdAt).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4 gap-4 flex-wrap">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {selectedLeads.length > 0 && (
            <Button
              variant="destructive"
              onClick={() => setConfirmingDeleteAll(true)}
              className="flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete Selected ({selectedLeads.length})
            </Button>
          )}
          <Button variant="outline" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <input
                  type="checkbox"
                  checked={
                    paginatedLeads.length > 0 &&
                    paginatedLeads.every((lead) =>
                      selectedLeads.includes(lead.id)
                    )
                  }
                  onChange={toggleSelectAllVisible}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Interest</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    checked={selectedLeads.includes(lead.id)}
                    onChange={() => toggleSelect(lead.id)}
                  />
                </TableCell>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.email}</TableCell>
                <TableCell>{lead.phone}</TableCell>
                <TableCell>{lead.interest}</TableCell>
                <TableCell>
                  {new Date(lead.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <DeleteConfirmation
                    onDelete={() => handleDelete(lead.id)}
                    title="Delete Lead"
                    description="Are you sure you want to delete this lead? This action cannot be undone."
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      {confirmingDeleteAll && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full space-y-4">
            <h2 className="text-lg font-semibold">Delete Selected Leads</h2>
            <p>
              Are you sure you want to delete the selected leads? This action
              cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setConfirmingDeleteAll(false)}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteSelected}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
