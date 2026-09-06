import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero, SectionHead } from "@/components/site/pieces";
import { Reveal } from "@/components/site/motion";
import { COURSE_CATEGORIES } from "@/lib/brand";

function Block({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="grid gap-6 border-t border-border py-14 md:grid-cols-[8rem_1fr] md:gap-16">
        <div>
          <span className="eyebrow">{index}</span>
          <h2 className="mt-3 font-display text-xl tracking-tight md:sticky md:top-28">{title}</h2>
        </div>
        <div className="max-w-2xl space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        title="About Protech"
        lead="A dedicated computer education institute based in Bolgarh, Khordha, driven by the belief that high-quality technology education should be accessible locally."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
        bgImages={[
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
        ]}
      />

      <div className="shell pb-10">
        <Block index="01" title="Our Story">
          <p>
            Protech Computer Education was created around a simple idea: technology is best learned by
            doing it. The institute teaches the same fundamentals that underpin professional software
            work — markup and layout, programming languages, databases, and the emerging tools built on
            top of them.
          </p>
          <p>
            The institute operates from Bolgarh Bus Stand in Khordha, Odisha, and is open to learners
            starting from the very beginning as well as those extending skills they already have.
          </p>
        </Block>

        <Block index="02" title="Our Approach">
          <p>
            Every course follows the same rhythm — <strong className="text-foreground">learn, practice,
            build, grow</strong>. Concepts are introduced in class, applied immediately in exercises,
            and consolidated into a project that the student completes themselves.
          </p>
          <p>
            Courses are organised by level so that progress is honest: Beginner courses assume nothing,
            Intermediate courses assume the fundamentals, and Advanced courses assume working ability.
          </p>
        </Block>

        <Block index="03" title="What We Teach">
          <p>The curriculum is organised into four tracks:</p>
          <ul className="space-y-3">
            {COURSE_CATEGORIES.map((c) => (
              <li key={c} className="flex items-baseline gap-3 border-b border-border pb-3">
                <span className="h-1 w-1 shrink-0 translate-y-[-2px] bg-teal" aria-hidden />
                <span className="text-foreground">{c}</span>
              </li>
            ))}
          </ul>
          <p>
            Alongside these, highlight subjects such as computer fundamentals, software engineering,
            cyber security, data structures, networking, cloud computing and computer graphics provide
            the theoretical grounding.
          </p>
        </Block>

        <Block index="04" title="Practical Learning">
          <p>
            Classroom time is spent at the machine. Students write code, break it, read the errors and
            fix them — because debugging is the skill that separates people who have read about
            programming from people who can do it.
          </p>
          <p>
            Assignments are graded on working output, not on notes copied from a board.
          </p>
        </Block>

        <Block index="05" title="Technology & Programming">
          <p>
            Programming is taught as a progression rather than a list of languages. C establishes memory
            and control flow; C++ introduces object-oriented design; Java extends that into
            enterprise-scale structure; Python and R open the door to automation, data and AI.
          </p>
          <p>
            Web technologies run in parallel — HTML, CSS and JavaScript on the front, PHP and MySQL
            behind it — so students understand a full application, not just one half of it.
          </p>
        </Block>

        <Block index="06" title="Projects & Internship Exposure">
          <p>
            Each course concludes with practical work: mini projects during the course and a larger
            practical programming project at the end. Internship exposure is included as part of the
            highlight subjects so students experience how the work is organised outside a classroom.
          </p>
          <p>
            For details on current project and internship arrangements, please contact the institute
            directly.
          </p>
        </Block>
      </div>

      <section className="shell pb-24">
        <SectionHead eyebrow="Next step" title="Find the course that fits where you are." />
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/courses"
            className="inline-flex items-center border border-foreground bg-foreground px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
          >
            Explore Courses
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center border border-border px-6 py-3.5 text-sm transition-colors hover:border-foreground"
          >
            Talk to Protech
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

export default AboutPage;
