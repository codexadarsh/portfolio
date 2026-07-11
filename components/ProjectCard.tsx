"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { useRouter } from "next/navigation";

type CardProps = {
  image: string;
  title: string;
  description: string;
  github?: string;
  link: string;
  tag: string;
  stack: string[];
  index: number;
};

const cards: CardProps[] = [
  {
    image: "/projects/arch.png",
    title: "Arch Events",
    description:
      "Full event-management platform with polished UI, seamless navigation, and strong visual storytelling.",
    link: "https://archeventsuae.com/",
    tag: "Web app",
    stack: ["Next.js", "Tailwind"],
    index: 1,
  },
  {
    image: "/projects/Travels.png",
    title: "Jet Journey Travels",
    description:
      "Travel-booking site optimised for fast package browsing and converting visitors into leads.",
    link: "https://jetjourneytravels.com/",
    tag: "Web app",
    stack: ["Next.js", "Tailwind"],
    index: 2,
  },
  {
    image: "/projects/pulsex.png",
    title: "Pulsex Media Solutions",
    description:
      "Pulsex Media Solutions is a comprehensive platform for all your media needs.",
    link: "https://revamped-gopulsex-in.vercel.app/",
    tag: "SaaS",
    stack: ["Next.js", "Tailwind"],
    index: 3,
  },
  {
    image: "/projects/fame.png",
    title: "Fameforge",
    description:
      "Fameforge is a one-stop platform for all your creative needs.",
    link: "https://fameforge.vercel.app/",
    tag: "SaaS",
    stack: ["Next.js", "Tailwind"],
    index: 4,
  },
  // {
  //   image: "/projects/opengpt.png",
  //   title: "OpenGPT",
  //   description:
  //     "Free LLM hub allowing users to access multiple AI models in one lightweight, distraction-free interface.",
  //   github: "https://github.com/codexadarsh/opengpt",
  //   link: "https://opengpt-rosy.vercel.app/",
  //   tag: "AI tool",
  //   stack: ["Next.js", "AI SDK"],
  //   index: 5,
  // },
];

function ProjectCardItem({ card }: { card: CardProps }) {
  const num = String(card.index).padStart(2, "0");

  return (
    <article className="group border-border/50 bg-background hover:border-border relative flex flex-col overflow-hidden rounded-xl border transition-colors duration-200">
      {/* Thumbnail */}
      <div className="bg-muted relative aspect-16/10 overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* Index badge */}
        <span className="border-border/60 bg-background/90 text-muted-foreground absolute top-3 left-3 rounded-full border px-2.5 py-0.5 text-[10px] font-medium tracking-widest backdrop-blur-sm">
          {num}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Title + tag */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-foreground text-sm leading-snug font-semibold">
            {card.title}
          </h2>

          <span className="shrink-0 rounded-full bg-violet-50 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-violet-700 dark:bg-violet-950/40 dark:text-violet-300">
            {card.tag}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-xs leading-relaxed">
          {card.description}
        </p>

        {/* Divider */}
        <div className="border-border/50 border-t" />

        {/* Footer */}
        <div className="flex items-center justify-between gap-2">
          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {card.stack.map((s) => (
              <span
                key={s}
                className="border-border/60 bg-muted text-muted-foreground rounded-full border px-2 py-0.5 text-[10px]"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1.5">
            {card.github && (
              <Link
                href={card.github}
                target="_blank"
                className="border-border/60 text-muted-foreground hover:border-border hover:text-foreground flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors"
              >
                <Github className="h-2.5 w-2.5" />
                Source
              </Link>
            )}

            <Link
              href={card.link}
              target="_blank"
              className="border-border/60 text-muted-foreground hover:border-border hover:text-foreground flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors"
            >
              Live
              <ArrowUpRight className="h-2.5 w-2.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

type ProjectCardProps = {
  isHomePage?: boolean;
};

const ProjectCard = ({ isHomePage = false }: ProjectCardProps) => {
  const router = useRouter();

  const displayedCards = isHomePage ? cards.slice(0, 4) : cards;

  return (
    <section className="mx-auto max-w-3xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {displayedCards.map((card) => (
          <ProjectCardItem key={card.title} card={card} />
        ))}
      </div>

      {isHomePage && cards.length > 4 && (
        <div className="flex justify-center pt-8">
          <button
            onClick={() => router.push("/project")}
            className="border-border/60 text-muted-foreground hover:border-border hover:text-foreground flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-colors"
          >
            View all projects
            <span className="bg-muted rounded-full px-2 py-0.5 text-xs">
              {cards.length}
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
