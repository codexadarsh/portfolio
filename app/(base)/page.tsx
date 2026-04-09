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
    <main className="mx-auto min-h-screen max-w-3xl border-r border-l">
      <BlurFade>
        {/* ── Hero ── */}
        <header className="px-6 pt-10 pb-8 md:px-10 md:pt-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            {/* Identity */}
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="">
                    <Logo className="size-9" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Logo</p>
                </TooltipContent>
              </Tooltip>

              <div>
                <h1 className="text-foreground text-lg font-semibold tracking-tight">
                  Adarsh Maurya
                </h1>
                <TextFlip className="text-muted-foreground text-sm font-medium">
                  <span>Student</span>
                  <span>Developer</span>
                  <span>Builder</span>
                </TextFlip>
              </div>
            </div>

            {/* Socials */}
            <TooltipProvider delayDuration={80}>
              <div className="flex items-center gap-1">
                {[
                  {
                    href: "https://x.com/codexadarsh",
                    label: "X / Twitter",
                    icon: <FaXTwitter className="h-3.5 w-3.5" />,
                  },
                  {
                    href: "https://linkedin.com/in/codexadarsh",
                    label: "LinkedIn",
                    icon: <BsLinkedin className="h-3.5 w-3.5" />,
                  },
                  {
                    href: "https://github.com/codexadarsh",
                    label: "GitHub",
                    icon: <BsGithub className="h-3.5 w-3.5" />,
                  },
                  {
                    href: "https://discord.com/users/codexadarsh",
                    label: "Discord",
                    icon: <BsDiscord className="h-3.5 w-3.5" />,
                  },
                ].map(({ href, label, icon }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <Button
                        asChild
                        size="icon"
                        variant="ghost"
                        aria-label={label}
                        className="text-muted-foreground hover:bg-muted hover:text-foreground h-8 w-8 rounded-full transition"
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
          </div>

          {/* Bio */}
          <p className="text-muted-foreground mt-6 max-w-xl text-sm leading-relaxed">
            {about.intro}
          </p>
        </header>

        {/* <div className="border-border/50 border-t" /> */}

        {/* ── Projects ── */}
        <section className="px-6 py-8 md:px-10">
          <SectionLabel index="01" title="Projects" />
          <div className="mt-6">
            <ProjectCard isHomePage={true} />
          </div>
        </section>

        {/* <div className="border-border/50 border-t" /> */}

        {/* ── Blogs ── */}
        <section className="px-6 py-8 md:px-10">
          <SectionLabel index="02" title="Writing" />
          <div className="mt-6">
            <BlogPagination
              rows={JSON.parse(JSON.stringify(rows))}
              pageSize={5}
            />
          </div>
        </section>

        {/* <div className="border-border/50 border-t" /> */}

        {/* ── Contact ── */}
        <section className="px-6 py-8 md:px-10">
          <SectionLabel index="03" title="Contact" />
          <div className="mt-6">
            <Contact />
          </div>
        </section>
      </BlurFade>
    </main>
  );
};

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
        {title}
      </h2>
      <div className="bg-border/40 h-px flex-1" />
      <span className="text-muted-foreground/50 text-[10px] font-medium tracking-widest">
        {index}
      </span>
    </div>
  );
}

export default Home;
