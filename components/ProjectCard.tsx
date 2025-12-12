import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Book, BookOpen } from "lucide-react";

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
    image: "/projects/project-01/OpenGPT.png",
    title: "OpenGPT",
    description:
      "A free LLM hub allowing users to access multiple AI models in one interface. Built with a lightweight layout focused on speed, usability, and minimal distractions.",
    github: "https://github.com/codexadarsh",
    link: "https://opengpt-rosy.vercel.app/",
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
    image: "/projects/project-01/showcase.png",
    title: "Portfolio",
    description:
      "My personal portfolio showcasing projects, skills, and blogs. Designed for clarity, speed, and strong visual presentation.",
    github: "https://github.com/codexadarsh",
    link: "https://codexadarsh.vercel.app/",
  },
];

const ProjectCard = () => {
  return (
    <section className="max-w-4xl mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.map(({ image, title, description, github, link }, i) => (
          <div
            key={i}
            className="border rounded-xl overflow-hidden hover:bg-accent transition group"
          >
            <Image
              src={image}
              alt={title}
              width={1200}
              height={800}
              className="object-cover group-hover:scale-105 transition-all duration-300"
            />

            <div className="p-3">
              <h1 className="text-lg font-semibold">{title}</h1>
              <p className="text-sm">{description}</p>
              <div className="flex justify-between gap-2 mt-2">
                <Button size="sm" variant={"link"} asChild>
                  <Link href={github}>
                    <BookOpen />
                    source code
                  </Link>
                </Button>
                <Button size="sm" variant={"link"} asChild>
                  <Link href={link} className="">
                    live preview
                    <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
