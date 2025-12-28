import React from "react";

// app/about/page.tsx

import Image from "next/image";
import { about, person } from "@/lib/constants";
import { BlurFade } from "@/components/ui/blur-fade";

export const metadata = {
  title: "About | Adarsh Maurya",
  description: "Full-Stack MERN Developer Portfolio",
};

export default function AboutPage() {
  return (
    <BlurFade>
      <div className="max-w-4xl mx-auto w-full px-6 md:px-14 py-20 ">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-2 text-center">
          <Image
            src={person.avatar}
            alt={person.name}
            width={120}
            height={120}
            className="rounded-full border border-gray-700"
          />

          <h1 className="text-4xl font-bold">{person.name}</h1>
          <p className=" text-lg">{person.role}</p>

          <p className="">{person.location}</p>
        </div>

        {/* INTRO */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className=" leading-relaxed whitespace-pre-line">{about.intro}</p>
        </section>
        <section></section>
        {/* SKILLS */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

          <div className="flex flex-col">
            <p>
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=js,ts,react,nextjs,mongodb,express,nodejs,supabase,git,github,figma,postman,vscode,vercel,netlify,python,django" />
              </a>
            </p>
          </div>
        </section>
        {/* EXPERIENCE */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          {about.work.map((job, i) => (
            <div key={i} className="mb-8">
              <div className="flex justify-between flex-wrap gap-2">
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <span className="">{job.timeframe}</span>
              </div>
              <p className="text-blue-400 mt-1">{job.role}</p>

              <ul className="list-disc list-inside mt-3  space-y-2">
                {job.achievements.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* EDUCATION */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          {about.education.map((edu, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">{edu.name}</h3>
                <p className="">{edu.timeframe}</p>
              </div>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>
        {/* Contributions */}
        <section className="mt-14">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contributions</h3>
            <img src="./contributions.png" alt="contributions" />
          </div>
        </section>
      </div>
    </BlurFade>
  );
}
