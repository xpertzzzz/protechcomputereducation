import { useQuery } from "@tanstack/react-query";
import { FALLBACK_SETTINGS, type SiteSettings } from "@/lib/brand";
import {
  getSettingsFn,
  getPublicCoursesFn,
  getCourseBySlugFn,
  getPublicGalleryFn,
  getPublicTestimonialsFn,
  submitEnquiryFn
} from "@/server/functions";

export { submitEnquiryFn, getSettingsFn };

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

// React Query hooks wrappers
export function useSettings() {
  const query = useQuery({
    queryKey: ["settings"],
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      const data = await getSettingsFn();
      return (data ?? FALLBACK_SETTINGS) as SiteSettings;
    },
  });
  return { settings: (query.data ?? FALLBACK_SETTINGS) as SiteSettings, ...query };
}

export function usePublicCourses() {
  return useQuery({
    queryKey: ["courses", "public"],
    queryFn: async () => {
      return await getPublicCoursesFn();
    },
  });
}

export function useCourseBySlug(slug: string) {
  return useQuery({
    queryKey: ["course", slug],
    queryFn: async () => {
      return await getCourseBySlugFn({ data: slug });
    },
  });
}

export function usePublicGallery() {
  return useQuery({
    queryKey: ["gallery", "public"],
    queryFn: async () => {
      return await getPublicGalleryFn();
    },
  });
}

export function usePublicTestimonials() {
  return useQuery({
    queryKey: ["testimonials", "public"],
    queryFn: async () => {
      return await getPublicTestimonialsFn();
    },
  });
}
