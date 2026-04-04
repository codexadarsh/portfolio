"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

type CardProps = {
  image: string;
  title: string;
  description: string;
  github: string;
  link: string;
};

const cards: CardProps[] = [
  {
    image: "/projects/project-01/arch.png",
    title: "Arch Events",
    description:
      "A full event-management platform showcasing services and past projects with a polished, high-end UI. Built to highlight credibility, seamless navigation, and strong visual storytelling.",
    github: "https://github.com/codexadarsh",
    link: "https://archeventsuae-com.vercel.app/",
  },
  {
    image: "/projects/project-01/Travels.png",
    title: "Jet Journey Travels",
    description:
      "A travel-booking website designed for quick exploration of packages, destinations, and itineraries. Optimized for clarity, fast browsing, and converting users into leads.",
    github: "https://github.com/codexadarsh",
    link: "https://jetjourneytravels-com-ten.vercel.app/",
  },
  {
    image: "/projects/project-01/Platform.png",
    title: "Dev Events",
    description:
      "A community platform for developers to discover tech events, share knowledge, and stay updated. Focused on clean information architecture and simple event discovery.",
    github: "https://github.com/codexadarsh",
    link: "https://devevent-beta.vercel.app/",
  },
  {
    image: "/projects/project-01/React.png",
    title: "Movie Discovery",
    description:
      "A movie and TV search app powered by live data, helping users explore trending titles, genres, and ratings. Designed for fast search and smooth content browsing.",
    github: "https://github.com/codexadarsh",
    link: "https://moodyflex.netlify.app/",
  },
  {
    image: "/projects/project-01/Jobs.png",
    title: "Job Portal",
    description:
      "A job-listing platform featuring role search, filters, and application flow. Built as a full-stack practice project to explore CRUD operations and clean UI patterns.",
    github: "https://github.com/codexadarsh",
    link: "https://reactportal.vercel.app/",
  },
  {
    image: "/projects/project-01/Home.png",
    title: "Django Blog App",
    description:
      "A full-stack blog application built with Django featuring authentication, post management, and a clean editorial layout.",
    github: "https://github.com/codexadarsh",
    link: "https://django-blog-app-kopn.onrender.com/",
  },
  {
    image: "/projects/project-01/OpenGPT.png",
    title: "OpenGPT",
    description:
      "A free LLM hub allowing users to access multiple AI models in one interface. Built with a lightweight layout focused on speed, usability, and minimal distractions.",
    github: "https://github.com/codexadarsh",
    link: "https://opengpt-rosy.vercel.app/",
  },
  {
    image: "/projects/project-01/showcase.png",
    title: "Portfolio",
    description:
      "My personal portfolio showcasing projects, skills, and blogs. Designed for clarity, speed, and strong visual presentation.",
    github: "https://github.com/codexadarsh",
    link: "https://codexadarsh.vercel.app/",
  },
];

type ProjectCardProps = {
  isHomePage?: boolean;
};

const truncate = (text: string, limit = 90) => {
  if (text.length <= limit) return text;
  const cut = text.lastIndexOf(" ", limit);
  return (cut === -1 ? text.slice(0, limit) : text.slice(0, cut)) + "…";
};

const ProjectCard = ({ isHomePage = false }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const router = useRouter();

  const displayedCards = isHomePage ? cards.slice(0, 4) : cards;

  return (
    <section className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {displayedCards.map((card) => {
          const isOpen = expanded === card.title;

          return (
            <article
              key={card.title}
              className="overflow-hidden rounded border bg-background transition hover:bg-accent"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="space-y-1 p-4">
                <h2 className="text-base font-semibold">{card.title}</h2>

                <p className="text-sm text-muted-foreground">
                  {isOpen ? card.description : truncate(card.description)}
                </p>

                <button
                  onClick={() => setExpanded(isOpen ? null : card.title)}
                  className="text-sm font-medium text-blue-400 hover:text-blue-500"
                >
                  {isOpen ? "Show less" : "Read more"}
                </button>

                <div className="flex justify-between pt-2">
                  <Button size="sm" variant="ghost" asChild>
                    <Link href={card.github} target="_blank">
                      <BookOpen className="size-3" />
                      <span className="text-sm"> Source</span>
                    </Link>
                  </Button>

                  <Button size="sm" variant="ghost" asChild>
                    <Link href={card.link} target="_blank">
                      <span className="text-sm"> Live</span>
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {isHomePage && cards.length > 4 && (
        <div className="flex justify-center pt-6">
          <Button variant="outline" onClick={() => router.push("/project")}>
            View all projects ({cards.length})
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
