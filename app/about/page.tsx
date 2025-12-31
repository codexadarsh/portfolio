import { GitHubCalendar } from "react-github-calendar";
import { about, person } from "@/lib/constants";
import { BlurFade } from "@/components/ui/blur-fade";
import Contact from "@/components/Contact";

export const metadata = {
  title: "About | Adarsh Maurya",
  description: "Full-Stack Developer Portfolio",
};

export default function AboutPage() {
  return (
    <BlurFade>
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">{person.name}</h1>
          <p className=" text-md text-muted-foreground">{person.role}</p>
        </div>
        {/* INTRO */}
        <section className="my-6">
          <hr />
          <h2 className="text-2xl font-semibold">About </h2>
          <hr className="py-2" />
          <p className="">{about.intro}</p>
        </section>

        {/* SKILLS */}
        <section className="my-6">
          <hr />
          <h2 className="text-2xl font-semibold ">Stack</h2>
          <hr className="py-2" />
          <div className="flex flex-col">
            <p>
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=js,ts,react,nextjs,mongodb,express,nodejs,supabase,git,github,figma,postman,vscode,vercel,netlify" />
              </a>
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="my-6">
          <hr />
          <h2 className="text-2xl font-semibold ">Experience</h2>
          <hr className="py-2" />
          {about.work.map((job, i) => (
            <div key={i}>
              <div className="flex flex-col md:flex-row justify-between ">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                  <p className="text-muted-foreground">{job.role}</p>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="text-muted-foreground">{job.timeframe}</span>
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
        <section className="my-6">
          <hr />
          <h2 className="text-2xl font-semibold ">Education</h2>
          <hr className="py-2" />
          {about.education.map((edu, i) => (
            <div key={i}>
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
        <section className="my-6">
          <div>
            <hr />
            <h2 className="text-2xl font-semibold ">Contributions</h2>
            <hr className="py-2" />
            <GitHubCalendar username="codexadarsh" />
          </div>
        </section>
        <Contact />
      </div>
    </BlurFade>
  );
}
