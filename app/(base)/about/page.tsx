import { GitHubCalendar } from "react-github-calendar";
import { about } from "@/lib/constants";
import { BlurFade } from "@/components/ui/blur-fade";
import Contact from "@/components/Contact";
import Skills from "@/components/skills";

export const metadata = {
  title: "About | Adarsh Maurya",
  description: "Full-Stack Developer Portfolio",
};

export default function AboutPage() {
  return (
    <BlurFade>
      <main className="mx-auto max-w-3xl border-x">
        {/* HERO */}
        <section className="px-6 py-8">
          <div className="max-w-xl">
            {/* Name + role (light, not loud) */}
            <p className="text-foreground text-md font-medium">
              Adarsh Maurya · Full-Stack Developer
            </p>

            {/* Intro (main content, not oversized) */}
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {about.intro}
            </p>
          </div>
        </section>

        {/* EXPERIENCE (PRIMARY PROOF) */}
        <section className="px-6 py-10">
          <SectionLabel index="01" title="Experience" />

          <div className="mt-6 space-y-8">
            {about.work.map((job, i) => (
              <div key={i}>
                <div className="flex flex-col justify-between md:flex-row">
                  <div>
                    <h3 className="font-medium">{job.company}</h3>
                    <p className="text-muted-foreground text-sm">{job.role}</p>
                  </div>

                  <div className="text-muted-foreground text-sm md:text-right">
                    <p>{job.timeframe}</p>
                    <p>{job.location}</p>
                  </div>
                </div>

                <ul className="text-muted-foreground mt-3 list-disc space-y-1 pl-5 text-sm">
                  {job.achievements.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="px-6 py-10">
          <SectionLabel index="02" title="Skills" />

          <div className="mt-6">
            <Skills />
          </div>
        </section>

        {/* EDUCATION */}
        <section className="px-6 py-10">
          <SectionLabel index="03" title="Education" />

          <div className="mt-6 space-y-6">
            {about.education.map((edu, i) => (
              <div
                key={i}
                className="flex flex-col justify-between md:flex-row"
              >
                <div>
                  <h3 className="font-medium">{edu.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {edu.description}
                  </p>
                </div>

                <div className="text-muted-foreground text-sm md:text-right">
                  <p>{edu.timeframe}</p>
                  <p>{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GITHUB (LOW PRIORITY) */}
        <section className="px-6 py-10">
          <SectionLabel index="04" title="Contributions" />

          <div className="mt-6 overflow-x-auto">
            <GitHubCalendar username="codexadarsh" />
          </div>
        </section>

        {/* CONTACT */}
        <section className="px-6 py-10">
          <Contact />
        </section>
      </main>
    </BlurFade>
  );
}

/* Reuse your clean label */
function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
        {title}
      </h2>
      <div className="bg-border/40 h-px flex-1" />
      <span className="text-muted-foreground/50 text-[10px] font-medium tracking-widest">
        {index}
      </span>
    </div>
  );
}
