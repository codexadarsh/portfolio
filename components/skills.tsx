"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  {
    name: "JavaScript",
    icon: "js",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: "ts",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: "react",
    href: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    href: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    icon: "nodejs",
    href: "https://nodejs.org/",
  },
  {
    name: "Express",
    icon: "express",
    href: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    href: "https://www.mongodb.com/",
  },
  {
    name: "Supabase",
    icon: "supabase",
    href: "https://supabase.com/",
  },
  {
    name: "Git",
    icon: "git",
    href: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: "github",
    href: "https://github.com/",
  },
  {
    name: "Figma",
    icon: "figma",
    href: "https://www.figma.com/",
  },
  {
    name: "Postman",
    icon: "postman",
    href: "https://www.postman.com/",
  },
  {
    name: "VS Code",
    icon: "vscode",
    href: "https://code.visualstudio.com/",
  },
  {
    name: "Vercel",
    icon: "vercel",
    href: "https://vercel.com/",
  },
  {
    name: "Netlify",
    icon: "netlify",
    href: "https://www.netlify.com/",
  },
];

export default function Skills() {
  return (
    <div className="py-6">
      <TooltipProvider delayDuration={100}>
        <Marquee pauseOnHover speed={40}>
          <div className="flex items-center gap-10 px-4">
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={skill.href}
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <div className="relative h-10 w-10">
                      <Image
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        fill
                        sizes="40px"
                        className="object-contain opacity-80 transition hover:opacity-100"
                      />
                    </div>
                  </Link>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </Marquee>
      </TooltipProvider>
    </div>
  );
}
