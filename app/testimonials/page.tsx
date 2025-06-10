import TestimonialsUI from "@/components/sections/TestimonialsUI";

export default function Page() {
  // Example logic – in production, get the userRole from session/auth
  const userRole = "Admin";

  return <TestimonialsUI userRole={userRole} />;
}
