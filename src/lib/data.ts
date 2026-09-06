import { useQuery } from "@tanstack/react-query";
import { FALLBACK_SETTINGS, type SiteSettings } from "@/lib/brand";

export type Course = {
  id: string;
  name: string;
  slug: string;
  category: string;
  level: string;
  duration: string | null;
  short_description: string | null;
  full_description: string | null;
  syllabus: string[];
  technologies: string[];
  projects: string[];
  prerequisites: string[];
  audience: string | null;
  image_url: string | null;
  featured: boolean;
  is_active: boolean;
  display_order: number;
  created_at?: string;
};

export type GalleryItem = {
  id: string;
  title: string | null;
  description: string | null;
  category: string | null;
  image_url: string;
  storage_path: string | null;
  taken_on: string | null;
  display_order: number;
  featured: boolean;
  is_published: boolean;
};

export type Testimonial = {
  id: string;
  student_name: string;
  course_name: string | null;
  photo_url: string | null;
  rating: number;
  content: string;
  given_on: string;
  display_order: number;
  is_published: boolean;
};

async function apiFetch<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json() as Promise<T>;
}

export const submitEnquiryFn = async (data: Record<string, unknown>) => {
  const res = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to submit enquiry");
  return res.json();
};

export const getSettingsFn = async () => {
  return apiFetch<SiteSettings>("/api/settings");
};

export function useSettings() {
  const query = useQuery({
    queryKey: ["settings"],
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      try {
        const data = await apiFetch<SiteSettings>("/api/settings");
        return (data ?? FALLBACK_SETTINGS) as SiteSettings;
      } catch {
        return FALLBACK_SETTINGS as SiteSettings;
      }
    },
  });
  return { settings: (query.data ?? FALLBACK_SETTINGS) as SiteSettings, ...query };
}

export function usePublicCourses() {
  return useQuery({
    queryKey: ["courses", "public"],
    queryFn: () => apiFetch<Course[]>("/api/courses"),
  });
}

export function useCourseBySlug(slug: string) {
  return useQuery({
    queryKey: ["course", slug],
    queryFn: () => apiFetch<Course | null>(`/api/courses/${slug}`),
    enabled: !!slug,
  });
}

export function usePublicGallery() {
  return useQuery({
    queryKey: ["gallery", "public"],
    queryFn: () => apiFetch<GalleryItem[]>("/api/gallery"),
  });
}

export function usePublicTestimonials() {
  return useQuery({
    queryKey: ["testimonials", "public"],
    queryFn: () => apiFetch<Testimonial[]>("/api/testimonials"),
  });
}
