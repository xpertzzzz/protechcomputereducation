import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
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
  category: string;
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

export function useSettings() {
  const query = useQuery({
    queryKey: ["settings"],
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      const { data, error } = await supabase.from("settings").select("*").eq("id", 1).maybeSingle();
      if (error) throw error;
      return (data ?? FALLBACK_SETTINGS) as SiteSettings;
    },
  });
  return { settings: (query.data ?? FALLBACK_SETTINGS) as SiteSettings, ...query };
}

export function usePublicCourses() {
  return useQuery({
    queryKey: ["courses", "public"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true })
        .order("name", { ascending: true });
      if (error) throw error;
      return (data ?? []) as Course[];
    },
  });
}

export function useCourseBySlug(slug: string) {
  return useQuery({
    queryKey: ["course", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .maybeSingle();
      if (error) throw error;
      return (data ?? null) as Course | null;
    },
  });
}

export function usePublicGallery() {
  return useQuery({
    queryKey: ["gallery", "public"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("gallery_items")
        .select("*")
        .eq("is_published", true)
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as GalleryItem[];
    },
  });
}

export function usePublicTestimonials() {
  return useQuery({
    queryKey: ["testimonials", "public"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_published", true)
        .order("display_order", { ascending: true })
        .order("given_on", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Testimonial[];
    },
  });
}
