"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useState } from "react";
import { redirect } from "next/navigation";

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



const ProjectCard = ({ isHomePage }:{isHomePage:boolean} ) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const displayedCards = isHomePage ? cards.slice(0, 4) : cards;

  return (
    <section className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayedCards.map((card, i) => {
          const isOpen = expanded === i;
          const desc = isOpen
            ? card.description
            : card.description.substring(0, 80) + "...";

          return (
            <div
              key={i}
              className="border rounded-xl overflow-hidden hover:bg-accent transition group"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={1200}
                height={800}
                className="object-cover group-hover:scale-105 transition-all duration-300"
              />

              <div className="px-3 py-4">
                <h1 className="text-md font-semibold">{card.title}</h1>
                <p className="text-sm">{desc}</p>
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="text-blue-400 mb-4 hover:text-blue-500"
                >
                  {isOpen ? "less" : "more"}
                </button>

                <div className="flex justify-between">
                  <Button size="sm" variant="default" asChild>
                    <Link href={card.github} target="_blank">
                      <BookOpen />
                      source code
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={card.link} target="_blank">
                      live preview
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All / Show Less Button - Only on Home Page */}
      {isHomePage && cards.length > 4 && (
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => redirect("/project")}
          >
            {`View All Projects (${cards.length})`}
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
