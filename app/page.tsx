import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

const Home = () => {
  return (
    <section className=" max-w-3xl mx-auto">
      <hr />
      <BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
          <div className="flex flex-col col-span-2">
            <h1 className="text-2xl font-semibold md:text-3xl">
              Adarsh Maurya
            </h1>
            <p className="text-muted-foreground">
              Hey! I'm Adarsh, a full-stack developer
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/projects/me.png"
              alt="Adarsh Maurya"
              width={100}
              height={100}
              className="rounded-xl object-cover hidden md:block"
              priority
            />
          </div>
        </div>

        <section className="my-8">
          <hr />
          <h1 className="text-2xl font-semibold"> Projects </h1>
          <hr className="py-2" />
          <div>
            <ProjectCard />
          </div>
        </section>
        <section className="my-8">
          <hr />
          <h1 className="text-2xl font-semibold">Blogs </h1>
          <hr className="py-2" />
          <p>nothing is here :)</p>
        </section>
        <section>
          <Contact />
        </section>
      </BlurFade>
    </section>
  );
};

export default Home;
