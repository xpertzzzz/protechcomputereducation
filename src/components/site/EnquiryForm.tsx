import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { enquiryWhatsAppMessage, whatsappLink } from "@/lib/brand";
import { usePublicCourses, useSettings, type Course } from "@/lib/data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  mobile: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid mobile number"),
  email: z.union([z.string().trim().email("Enter a valid email").max(200), z.literal("")]),
  date_of_birth: z.string().optional(),
  course: z.string().optional(),
  message: z.string().trim().max(2000).optional(),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function EnquiryForm({
  presetCourse,
  compact = false,
}: {
  presetCourse?: Course | null;
  compact?: boolean;
}) {
  const { settings } = useSettings();
  const { data: courses = [] } = usePublicCourses();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") ?? ""),
      mobile: String(fd.get("mobile") ?? ""),
      email: String(fd.get("email") ?? ""),
      date_of_birth: String(fd.get("date_of_birth") ?? ""),
      course: presetCourse?.id ?? String(fd.get("course") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    setPending(true);

    const selected = courses.find((c) => c.id === parsed.data.course);
    const courseName = presetCourse?.name ?? selected?.name ?? null;

    // STEP 1 — always persist the enquiry first.
    const { error } = await supabase.from("enquiries").insert({
      name: parsed.data.name,
      mobile: parsed.data.mobile,
      email: parsed.data.email || null,
      date_of_birth: parsed.data.date_of_birth || null,
      course_id: presetCourse?.id ?? selected?.id ?? null,
      course_name: courseName,
      message: parsed.data.message || null,
    });

    setPending(false);

    if (error) {
      toast.error("We couldn't save your enquiry. Please call 7008414704 instead.");
      return;
    }

    setDone(true);
    toast.success("Enquiry received. Opening WhatsApp…");
    form.reset();

    // STEP 2 — only after a successful save, hand off to WhatsApp.
    const link = whatsappLink(
      settings.whatsapp_number,
      enquiryWhatsAppMessage({
        name: parsed.data.name,
        mobile: parsed.data.mobile,
        email: parsed.data.email,
        course: courseName,
        message: parsed.data.message ?? "",
      }),
    );
    window.open(link, "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-teal";

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div className={compact ? "grid gap-6" : "grid gap-6 sm:grid-cols-2"}>
        <Field label="Full name" error={errors.name} htmlFor="name">
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
        </Field>
        <Field label="Mobile number" error={errors.mobile} htmlFor="mobile">
          <input
            id="mobile"
            name="mobile"
            inputMode="tel"
            required
            className={fieldClass}
            placeholder="10-digit number"
          />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="email">
          <input id="email" name="email" type="email" className={fieldClass} placeholder="you@example.com" />
        </Field>
        <Field label="Date of birth (optional)" error={errors.date_of_birth} htmlFor="dob">
          <input id="dob" name="date_of_birth" type="date" className={fieldClass} />
        </Field>
        <div className={compact ? "" : "sm:col-span-2"}>
          <Field label="Course interested in" htmlFor="course">
            {presetCourse ? (
              <div className="border-b border-border py-3 text-sm font-medium">
                {presetCourse.name}
              </div>
            ) : (
              <select id="course" name="course" className={fieldClass} defaultValue="">
                <option value="">Select a course</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} — {c.category}
                  </option>
                ))}
              </select>
            )}
          </Field>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <Field label="Message" error={errors.message} htmlFor="message">
            <textarea
              id="message"
              name="message"
              rows={3}
              className={`${fieldClass} resize-none`}
              placeholder="Tell us what you would like to learn"
            />
          </Field>
        </div>
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground disabled:opacity-60"
        >
          {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Send Enquiry
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <p className="text-xs text-muted-foreground">
          {done
            ? "Saved. Your enquiry is with the institute."
            : "Your enquiry is saved with the institute before WhatsApp opens."}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="eyebrow block">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
