import { z } from "zod";

export const contactSchema = z.object({
  full_name: z.string().trim().min(1, "Enter your full name.").max(120, "Use 120 characters or fewer."),
  business_email: z.string().trim().email("Enter a valid business email.").max(255, "Use 255 characters or fewer."),
  phone_number: z.string().trim().max(40, "Use 40 characters or fewer."),
  company_name: z.string().trim().max(160, "Use 160 characters or fewer."),
  service_interested_in: z.string().trim().min(1, "Choose a service.").max(120, "Choose a service from the list."),
  estimated_budget: z.string().trim().max(80, "Use 80 characters or fewer."),
  project_description: z.string().trim().min(10, "Share at least 10 characters about your project.").max(4000, "Use 4,000 characters or fewer."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email address.").max(255, "Use 255 characters or fewer."),
});