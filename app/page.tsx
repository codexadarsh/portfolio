import ProjectCard from "@/components/ProjectCard";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <BlurFade>
      <section className="text-center flex flex-col max-w-4xl mx-auto mt-20 gap-4">
        <div>
          <Button className="rounded-full" variant="outline" asChild>
            <Link href="/work">
              <AnimatedShinyText>
                <span className="font-bold"> 🎉 Movie discovery | </span>
                featured project
              </AnimatedShinyText>
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl font-semibold">
            Building fast, clean and <br /> reliable web experiences
          </h1>
          <p className="text-lg font-semibold px-12">
            I'm Adarsh, a full-stack MERN developer and Shopify/React intern at
            PulseX Media, building scalable systems and modern React apps. After
            hours, I ship my own projects and refine my craft.
          </p>
        </div>
        <div>
          <Button className="rounded-full m-4" asChild>
            <Link href="/about">About- Adarsh Maurya</Link>
          </Button>
        </div>
        <div>
          <Image
            src={"/projects/project-01/cover-02.png"}
            alt="logo"
            width={1200}
            height={400}
            className="mt-8 rounded-lg"
          />
        </div>
        <div className="text-start flex flex-col gap-2 mt-10">
          <h1 className="text-2xl font-semibold"> Recent Posts </h1>
          <p>Nothing for now :)</p>
        </div>
        <div className="text-start flex flex-col gap-2 mt-10">
          <h1 className="text-2xl font-semibold"> About Me </h1>
          <p>{about.intro}</p>
        </div>
        <div className="text-start flex flex-col gap-2 mt-10">
          <h1 className="text-2xl font-semibold"> Works </h1>
          <ProjectCard />
        </div>
      </section>
    </BlurFade>
  );
};

export default Home;
