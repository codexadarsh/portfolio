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
import { Logo } from "@/components/logo";
import { TextFlip } from "@/components/text-flip";

const Home = async () => {
  let rows: { id: number; title: string; content: string }[] = [];

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
        <section className="flex flex-col items-center text-center p-4 border-b">
          <Logo className="size-30" />

          <h1 className="text-2xl font-semibold">Adarsh Maurya</h1>
          <TextFlip>
            <span>Student</span>
            <span>Developer</span>
            <span>Builder</span>
          </TextFlip>

          {/* Socials */}
          <TooltipProvider delayDuration={80}>
            <div className="flex items-center gap-3 mt-4">
              {[
                {
                  href: "https://x.com/codexadarsh",
                  label: "X",
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
                      variant="ghost"
                      className="rounded-full hover:bg-muted transition"
                    >
                      <Link href={href} target="_blank">
                        {icon}
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
          <p className="text-muted-foreground mt-4 text-center tracking-tighter ">
            {about.intro}
          </p>
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
