import { createServerFn } from "@tanstack/react-start";
import { db } from "@/db/index";
import { settings, courses, galleryItems, testimonials, enquiries } from "@/db/schema";
import { eq, desc, asc } from "drizzle-orm";
import { FALLBACK_SETTINGS, type SiteSettings } from "@/lib/brand";
import { type Course, type GalleryItem, type Testimonial } from "@/lib/data";

function safeParseArray(val: string | null | undefined, separator = ','): string[] {
  if (!val) return [];
  try {
    const parsed = JSON.parse(val);
    if (Array.isArray(parsed)) return parsed;
  } catch (e) {
    // Not JSON, split by separator
  }
  return val.split(separator).map(s => s.trim()).filter(Boolean);
}

function mapCourse(c: any): Course {
  return {
    id: String(c.id),
    name: c.name,
    slug: c.slug,
    category: c.category,
    level: c.level || 'Beginner',
    duration: c.duration,
    short_description: c.shortDescription,
    full_description: c.description,
    syllabus: safeParseArray(c.syllabus, '\n'),
    technologies: safeParseArray(c.technologies, ','),
    projects: safeParseArray(c.projects, ','),
    prerequisites: safeParseArray(c.prerequisites, ','),
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
    featured: t.featured,
    is_published: t.active,
  }));
});

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
