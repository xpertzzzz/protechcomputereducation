import logoAsset from "@/assets/protech-logo.png.asset.json";

export const LOGO_URL: string = logoAsset.url;

export const SITE_URL = "https://protech-computer-education.lovable.app";

export const FALLBACK_SETTINGS = {
  institute_name: "PROTECH COMPUTER EDUCATION",
  tagline: "Bringing programming and web technologies for you",
  phone_primary: "7008414704",
  phone_secondary: "7787840997",
  whatsapp_number: "917008414704",
  email: null as string | null,
  address_line: "Bolgarh Bus Stand",
  city: "Khordha",
  state: "Odisha",
  pincode: "752065",
  facebook_url: null as string | null,
  instagram_url: null as string | null,
  youtube_url: null as string | null,
  linkedin_url: null as string | null,
  logo_url: null as string | null,
  favicon_url: null as string | null,
};

export type SiteSettings = typeof FALLBACK_SETTINGS & { id?: number };

export const COURSE_CATEGORIES = [
  "Website Designing",
  "Website Development",
  "Programming Excellence",
  "AI & Emerging Technology",
] as const;

export const COURSE_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

export const COURSE_HIGHLIGHTS = [
  "Computer Fundamentals",
  "Software Engineering",
  "Cyber Security",
  "Computer Organization & Architecture",
  "Data Structure — Basic",
  "Discrete Mathematical Structure",
  "Database Concept & SQL",
  "Computer Networking",
  "Cloud Computing",
  "Problem Solving",
  "Algorithm",
  "Computer Graphics",
  "Practical Programming Projects",
  "Mini Projects",
  "Internship",
];

export const AI_TRACK = [
  { name: "AI Concepts", note: "Foundations, scope and responsible use" },
  { name: "Machine Learning — Basic", note: "Data, models, evaluation" },
  { name: "Data Science", note: "Analysis pipeline end to end" },
  { name: "NLP", note: "Language as structured data" },
  { name: "AI Projects & Tools", note: "Applied, portfolio-ready work" },
];

export const ENQUIRY_STATUSES = ["New", "Contacted", "Follow-up", "Converted", "Closed"] as const;
export const STUDENT_STATUSES = ["Active", "Completed", "Inactive"] as const;
export const PAYMENT_STATUSES = ["Paid", "Partial", "Pending", "Refunded"] as const;
export const PAYMENT_METHODS = ["Cash", "UPI", "Bank Transfer", "Card", "Cheque", "Other"] as const;

export function normalizeWhatsApp(number: string | null | undefined): string {
  const digits = (number ?? "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

export function whatsappLink(number: string | null | undefined, message: string): string {
  const to = normalizeWhatsApp(number);
  return `https://wa.me/${to}?text=${encodeURIComponent(message)}`;
}

export function enquiryWhatsAppMessage(input: {
  name: string;
  mobile: string;
  email?: string | null;
  course?: string | null;
  message?: string | null;
}) {
  return [
    "Hello Protech Computer Education,",
    "",
    `I would like to enquire about ${input.course?.trim() || "your courses"}.`,
    "",
    `Name: ${input.name}`,
    `Mobile: ${input.mobile}`,
    `Email: ${input.email?.trim() || "—"}`,
    "",
    "Message:",
    input.message?.trim() || "—",
  ].join("\n");
}

export function adminEnquiryFollowUp(input: {
  name: string;
  course?: string | null;
  institute: string;
}) {
  return [
    `Hello ${input.name},`,
    "",
    `This is ${input.institute}, replying to your enquiry${
      input.course ? ` about ${input.course}` : ""
    }.`,
    "",
    "Please let us know a convenient time to talk about the course schedule and admission details.",
  ].join("\n");
}

export function studentFollowUp(input: { name: string; institute: string }) {
  return [
    `Hello ${input.name},`,
    "",
    `This is ${input.institute}. We are getting in touch regarding your course at the institute.`,
    "",
    "Please let us know if you need any assistance.",
  ].join("\n");
}

export function formatINR(value: number | string | null | undefined) {
  const n = Number(value ?? 0);
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(n) ? n : 0);
}

export function formatDate(value: string | null | undefined) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function telHref(number: string | null | undefined): string {
  const digits = (number ?? "").replace(/[^\d]/g, "");
  if (!digits) return "tel:";
  return `tel:+${digits.length === 10 ? `91${digits}` : digits}`;
}
