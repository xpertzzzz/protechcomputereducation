
DROP POLICY "public reads active courses" ON public.courses;
CREATE POLICY "anon reads active courses" ON public.courses FOR SELECT TO anon USING (is_active);
CREATE POLICY "auth reads courses" ON public.courses FOR SELECT TO authenticated USING (is_active OR public.is_admin());

DROP POLICY "public reads published gallery" ON public.gallery_items;
CREATE POLICY "anon reads published gallery" ON public.gallery_items FOR SELECT TO anon USING (is_published);
CREATE POLICY "auth reads gallery" ON public.gallery_items FOR SELECT TO authenticated USING (is_published OR public.is_admin());

DROP POLICY "public reads published testimonials" ON public.testimonials;
CREATE POLICY "anon reads published testimonials" ON public.testimonials FOR SELECT TO anon USING (is_published);
CREATE POLICY "auth reads testimonials" ON public.testimonials FOR SELECT TO authenticated USING (is_published OR public.is_admin());

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.is_admin() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.claim_admin() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.claim_admin() TO authenticated;
