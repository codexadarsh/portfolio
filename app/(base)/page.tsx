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
    <section className="mx-auto max-w-3xl border-r border-l">
      <BlurFade>
        <div className="flex flex-col gap-6 p-8">
          {/* Header */}
          <section className="flex flex-col items-center md:flex-row md:justify-between">
            {/* Left */}
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Logo className="size-10" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Logo</p>
                </TooltipContent>
              </Tooltip>

              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">Adarsh Maurya</h1>
                <TextFlip className="text-muted-foreground text-sm font-medium">
                  <span>Student</span>
                  <span>Developer</span>
                  <span>Builder</span>
                </TextFlip>
              </div>
            </div>

            {/* Socials */}
            <TooltipProvider delayDuration={80}>
              <div className="flex items-center gap-2">
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
                        aria-label={label}
                        className="hover:bg-muted rounded-full transition"
                      >
                        <Link href={href} target="_blank">
                          {icon}
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </section>

          {/* About */}
          <section>
            <p className="leading-relaxed font-medium tracking-tight">
              {about.intro}
            </p>
          </section>
        </div>

        <section className="">
          <hr />
          <h1 className="px-4 text-xl font-semibold"> Projects </h1>
          <hr />
          <div className="p-4">
            <ProjectCard isHomePage={true} />
          </div>
        </section>
        <section className="">
          <hr />
          <h1 className="px-4 text-xl font-semibold">Blogs </h1>
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
