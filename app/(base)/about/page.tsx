import { GitHubCalendar } from "react-github-calendar";
import { about, person } from "@/lib/constants";
import { BlurFade } from "@/components/ui/blur-fade";
import Contact from "@/components/Contact";
import Skills from "@/components/skills";

export const metadata = {
  title: "About | Adarsh Maurya",
  description: "Full-Stack Developer Portfolio",
};

export default function AboutPage() {
  return (
    <div>
      {/* <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <Sidebar />
      </div> */}
      <BlurFade>
        <div className="mx-auto max-w-3xl border-r border-l">
          {/* HEADER */}
          <div className="p-4 text-center">
            <h1 className="text-xl font-bold">{person.name}</h1>
            <p className="text-md text-muted-foreground">{person.role}</p>
          </div>
          {/* INTRO */}
          <section>
            <hr />
            <h2 className="px-4 text-xl font-medium" id="#intro">
              About{" "}
            </h2>
            <hr />
            <p className="p-4 font-medium">{about.intro}</p>
          </section>

          {/* SKILLS */}
          <section>
            <hr />
            <h2 className="px-4 text-xl font-medium" id="#stack">
              Stack
            </h2>
            <hr />
            <div className="flex flex-col">
              <Skills />
            </div>
          </section>

          {/* EXPERIENCE */}
          <section>
            <hr />
            <h2 className="px-4 text-xl font-medium" id="experience">
              Experience
            </h2>
            <hr />
            {about.work.map((job, i) => (
              <div key={i} className="p-4">
                <div className="flex flex-col justify-between md:flex-row">
                  <div className="flex flex-col">
                    <h3 className="text font-medium">{job.company}</h3>
                    <p className="text-muted-foreground text-sm font-medium">
                      {job.role}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="text-muted-foreground text-sm font-medium">
                      {job.timeframe}
                    </span>
                    <p className="text-muted-foreground text-sm font-medium">
                      {job.location}
                    </p>
                  </div>
                </div>

                <ul className="list-inside list-disc space-y-2 pt-4 font-medium">
                  {job.achievements.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* EDUCATION */}
          <section>
            <hr />
            <h2 className="px-4 text-xl font-medium" id="education">
              Education
            </h2>
            <hr />
            {about.education.map((edu, i) => (
              <div key={i} className="p-4">
                <div className="flex flex-col justify-between md:flex-row">
                  <div className="flex flex-col">
                    <h3 className="text font-medium">{edu.name}</h3>
                    <p className="text-muted-foreground text-sm font-medium">
                      {edu.description}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <p className="text-muted-foreground text-sm font-medium">
                      {edu.timeframe}
                    </p>
                    <p className="text-muted-foreground text-sm font-medium">
                      {edu.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Contributions */}
          <section>
            <div>
              <hr />
              <h2 className="px-4 text-xl font-medium" id="">
                Contributions
              </h2>
              <hr />
              <div className="p-4">
                <GitHubCalendar username="codexadarsh" />
              </div>
            </div>
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </BlurFade>
    </div>
  );
}
