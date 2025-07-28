import { Phone } from 'lucide-react';
import z from "zod";

export const Lead = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  interest: z.string().min(2),
});
export type LeadType = z.infer<typeof Lead>;