import { BlogPagination } from "@/components/blog-pagination";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { about } from "@/lib/constants";
import { getDatabase } from "@/sqlite";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Home = async () => {
  let rows;

  const db = await getDatabase();
  try {
    rows = await db.sql`SELECT * FROM blogs LIMIT 10`;
  } catch (error) {
    console.log(JSON.stringify(error));
  } finally {
    db.close();
  }

  return (
    <section className=" max-w-3xl mx-auto border">
      <BlurFade>
        <div className="">
          <h1 className="text-2xl text-center text-muted-foreground hover:text-foreground font-semibold py-16">
            I don’t control privilege or luck. I control expertise.
          </h1>
          <hr />
        </div>

        <section className="flex flex-col gap-4 p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">Adarsh Maurya</h1>
              <p className="font-mono text-muted-foreground">
                Full-stack developer
              </p>
            </div>
            <div>
              {/* Socials */}
              <TooltipProvider delayDuration={80}>
                <div className="flex items-center gap-2">
                  {[
                    {
                      href: "https://x.com/codexadarsh",
                      label: "X (Twitter)",
                      icon: <FaXTwitter className="h-4 w-4" />,
                    },
                    {
                      href: "https://linkedin.com/in/codexadarsh",
                      label: "LinkedIn",
                      icon: <BsLinkedin className="h-4 w-4" />,
                    },
                    {
                      href: "https://github.com/codexadarsh",
                      label: "GitHub",
                      icon: <BsGithub className="h-4 w-4" />,
                    },
                    {
                      href: "https://discord.com/users/codexadarsh",
                      label: "Discord",
                      icon: <BsDiscord className="h-4 w-4" />,
                    },
                  ].map(({ href, label, icon }) => (
                    <Tooltip key={label}>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          size="icon"
                          variant="outline"
                          className="rounded-full hover:scale-105 transition"
                        >
                          <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                          >
                            {icon}
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">{label}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </div>
          </div>
          <p className=" text-muted-foreground">{about.intro}</p>
        </section>

        <section className="">
          <hr />
          <h1 className="text-2xl font-semibold px-4"> Projects </h1>
          <hr />
          <div className="p-4">
            <ProjectCard isHomePage={true} />
          </div>
        </section>
        <section className="">
          <hr />
          <h1 className="text-2xl font-semibold px-4">Blogs </h1>
          <hr />
          <BlogPagination
            rows={JSON.parse(JSON.stringify(rows))}
            pageSize={5}
          />
        </section>
        <section>
          <Contact />
        </section>
      </BlurFade>
    </section>
  );
};

export default Home;
