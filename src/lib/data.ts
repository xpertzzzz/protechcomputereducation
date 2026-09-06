import { useQuery } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { FALLBACK_SETTINGS, type SiteSettings } from "@/lib/brand";
import { db } from "@/db/index";
import { settings, courses, galleryItems, testimonials } from "@/db/schema";
import { eq, desc, asc } from "drizzle-orm";

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

function mapCourse(c: typeof courses.$inferSelect): Course {
  return {
    id: String(c.id),
    name: c.name,
    slug: c.slug,
    category: c.category,
    level: c.level || 'Beginner',
    duration: c.duration,
    short_description: c.shortDescription,
    full_description: c.description,
    syllabus: c.syllabus ? JSON.parse(c.syllabus) : [],
    technologies: c.technologies ? JSON.parse(c.technologies) : [],
    projects: c.projects ? JSON.parse(c.projects) : [],
    prerequisites: c.prerequisites ? JSON.parse(c.prerequisites) : [],
    audience: null,
    image_url: c.image,
    featured: c.featured,
    is_active: c.active,
    display_order: c.displayOrder,
    created_at: c.createdAt.toISOString(),
  };
}

export const getSettingsFn = createServerFn({ method: "GET" }).handler(async () => {
  const result = await db.select().from(settings).where(eq(settings.id, 1)).limit(1);
  if (result.length === 0) return null;
  const s = result[0]!;
  return {
    institute_name: s.instituteName ?? FALLBACK_SETTINGS.institute_name,
    tagline: s.tagline ?? FALLBACK_SETTINGS.tagline,
    phone_primary: s.phoneNumbers ?? FALLBACK_SETTINGS.phone_primary,
    phone_secondary: FALLBACK_SETTINGS.phone_secondary,
    whatsapp_number: s.whatsappNumber ?? FALLBACK_SETTINGS.whatsapp_number,
    email: s.email ?? FALLBACK_SETTINGS.email,
    address_line: s.address ?? FALLBACK_SETTINGS.address_line,
    city: FALLBACK_SETTINGS.city,
    state: FALLBACK_SETTINGS.state,
    pincode: FALLBACK_SETTINGS.pincode,
    facebook_url: null,
    instagram_url: null,
    youtube_url: null,
    linkedin_url: null,
    logo_url: s.logoUrl,
    favicon_url: s.faviconUrl
  } as SiteSettings;
});

export const getPublicCoursesFn = createServerFn({ method: "GET" }).handler(async () => {
  const data = await db.select()
    .from(courses)
    .where(eq(courses.active, true))
    .orderBy(asc(courses.displayOrder), asc(courses.name));
  return data.map(mapCourse);
});

export const getCourseBySlugFn = createServerFn({ method: "GET" }).validator((slug: string) => slug).handler(async ({ data: slug }) => {
  const result = await db.select()
    .from(courses)
    .where(eq(courses.slug, slug))
    .limit(1);
  return result.length > 0 && result[0]!.active ? mapCourse(result[0]!) : null;
});

export const getPublicGalleryFn = createServerFn({ method: "GET" }).handler(async () => {
  const data = await db.select()
    .from(galleryItems)
    .where(eq(galleryItems.active, true))
    .orderBy(asc(galleryItems.displayOrder), desc(galleryItems.createdAt));
  return data.map((g): GalleryItem => ({
    id: String(g.id),
    title: g.title,
    description: g.description,
    category: g.category,
    image_url: g.imageUrl,
    storage_path: null,
    taken_on: g.createdAt.toISOString(),
    display_order: g.displayOrder,
    featured: g.featured,
    is_published: g.active,
  }));
});

export const getPublicTestimonialsFn = createServerFn({ method: "GET" }).handler(async () => {
  const data = await db.select()
    .from(testimonials)
    .where(eq(testimonials.active, true))
    .orderBy(asc(testimonials.displayOrder), desc(testimonials.createdAt));
  
  return data.map((t): Testimonial => ({
    id: String(t.id),
    student_name: t.studentName,
    course_name: t.course,
    photo_url: t.photoUrl,
    rating: t.rating,
    content: t.testimonial,
    given_on: t.createdAt.toISOString(),
    display_order: t.displayOrder,
    is_published: t.active,
  }));
});

import { enquiries } from "@/db/schema";

export const submitEnquiryFn = createServerFn({ method: "POST" })
  .validator((data: {
    name: string;
    mobile: string;
    email?: string | null;
    date_of_birth?: string | null;
    course_id?: string | null;
    course_name?: string | null;
    message?: string | null;
  }) => data)
  .handler(async ({ data }) => {
    await db.insert(enquiries).values({
      name: data.name,
      mobileNumber: data.mobile,
      email: data.email || null,
      courseInterestedIn: data.course_name || null,
      message: data.message || null,
    });
    return { success: true };
  });

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
