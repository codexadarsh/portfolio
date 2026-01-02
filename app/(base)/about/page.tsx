import { GitHubCalendar } from "react-github-calendar";
import { about, person } from "@/lib/constants";
import { BlurFade } from "@/components/ui/blur-fade";
import Contact from "@/components/Contact";
import Sidebar from "@/components/sidebar";

export const metadata = {
  title: "About | Adarsh Maurya",
  description: "Full-Stack Developer Portfolio",
};

export default function AboutPage() {
  return (
    <div>
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <Sidebar />
      </div>
      <BlurFade>
        <div className="max-w-3xl mx-auto border">
          {/* HEADER */}
          <div className="text-center p-4">
            <h1 className="text-3xl font-bold">{person.name}</h1>
            <p className=" text-md text-muted-foreground">{person.role}</p>
          </div>
          {/* INTRO */}
          <section>
            <hr />
            <h2 className="text-2xl font-semibold px-4" id="#intro">
              About{" "}
            </h2>
            <hr />
            <p className="p-4">{about.intro}</p>
          </section>

          {/* SKILLS */}
          <section>
            <hr />
            <h2 className="text-2xl font-semibold px-4 " id="#stack">
              Stack
            </h2>
            <hr />
            <div className="flex flex-col">
              <p className="p-4">
                <a href="https://skillicons.dev">
                  <img src="https://skillicons.dev/icons?i=js,ts,react,nextjs,mongodb,express,nodejs,supabase,git,github,figma,postman,vscode,vercel,netlify" />
                </a>
              </p>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section>
            <hr />
            <h2 className="text-2xl font-semibold px-4 " id="experience">
              Experience
            </h2>
            <hr />
            {about.work.map((job, i) => (
              <div key={i} className="p-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{job.company}</h3>
                    <p className="text-muted-foreground">{job.role}</p>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="text-muted-foreground">
                      {job.timeframe}
                    </span>
                    <p className="text-muted-foreground">{job.location}</p>
                  </div>
                </div>

                <ul className="list-disc list-inside pt-4 space-y-2">
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
            <h2 className="text-2xl font-semibold px-4 " id="education">
              Education
            </h2>
            <hr />
            {about.education.map((edu, i) => (
              <div key={i} className="p-4">
                <div className="flex flex-col md:flex-row justify-between ">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{edu.name}</h3>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <p className="text-muted-foreground">{edu.timeframe}</p>
                    <p className="text-muted-foreground">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Contributions */}
          <section>
            <div>
              <hr />
              <h2 className="text-2xl font-semibold px-4 " id="">
                Contributions
              </h2>
              <hr />
              <div className="p-4" id="github">
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
