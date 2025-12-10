import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

type CardProps = {
  image: string;
  title: string;
  description: string;
  github: string;
  link: string;
};

const cards: CardProps[] = [
  {
    image: "/projects/project-01/cover-02.jpg",
    title: "Arch Events",
    description:
      "Arch Events is a leading event management company that specializes in creating unforgettable experiences. The website features a sleek and professional design, with a focus on showcasing their portfolio of successful events and services offered.",
    github: "https://github.com/codexadarsh",
    link: "https://archeventsuae-com.vercel.app/",
  },
  {
    image: "/projects/project-01/cover-03.jpg",
    title: "Jet Journey Travels",
    description:
      "Jet Journey Travels is a premier travel agency that specializes in creating personalized travel experiences. The website features a modern and user-friendly design, with a focus on showcasing their range of travel packages and services offered.",
    github: "https://github.com/codexadarsh",
    link: "https://jetjourneytravels-com-ten.vercel.app/",
  },
  {
    image: "/projects/project-01/cover-04.jpg",
    title: "Dev Events",
    description:
      "Dev event is build for the developers community to share their knowledge and experiences in the tech world and to learn from each other.",
    github: "https://github.com/codexadarsh",
    link: "https://devevent-beta.vercel.app/",
  },
  {
    image: "/projects/project-01/image-01.jpg",
    title: "OpenGPT",
    description:
      "Open GPT is a website that allows to use all LLM models for free. The website features a clean and modern design",
    github: "https://github.com/codexadarsh",
    link: "https://opengpt-rosy.vercel.app/",
  },
  {
    image: "/projects/project-01/cover-01.jpg",
    title: "Movie Discovery",
    description:
      "Movie Discovery is a website that allows users to search for movies and TV shows. The website features a clean and modern design, with a focus on showcasing the latest releases and popular movies.",
    github: "https://github.com/codexadarsh",
    link: "https://moodyflex.netlify.app/",
  },
  {
    image: "/projects/project-01/image-02.jpg",
    title: "Portfolio",
    description:
      "that's the portfolio of me which you are currently seeing right now :) ",
    github: "https://github.com/codexadarsh",
    link: "https://codexadarsh.vercel.app/",
  },
];

const ProjectCard = () => {
  return (
    <section className="max-w-4xl mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.map(({ image, title, description, github, link }, i) => (
          <div
            key={i}
            className="border rounded-xl overflow-hidden hover:bg-accent transition group"
          >
            <Image
              src={image}
              alt={title}
              width={800}
              height={800}
              className="object-cover group-hover:scale-105 transition-all duration-300"
            />

            <div className="p-4">
              <h1 className="text-lg font-semibold">{title}</h1>
              <p className="text-sm">{description}</p>
              <div className="flex gap-2">
                <Link href={github}>
                  <Button className="mt-2">github</Button>
                </Link>
                <Link href={link}>
                  <Button className="mt-2">view</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
