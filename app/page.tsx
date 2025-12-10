import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <BlurFade>
      <section className="text-center flex flex-col max-w-4xl mx-auto mt-20 gap-4">
        <div>
          <Button className="rounded-full" variant="outline" asChild>
            <Link href="/work">
              <span className="font-bold">Movie discovery |</span>
              <span className="">featured project</span>
            </Link>
          </Button>
        </div>
        <h1 className="text-6xl font-semibold">
          Building fast, clean and <br /> reliable web experiences
        </h1>
        <p className="text-xl font-semibold px-12">
          I'm Adarsh, a full-stack MERN developer and Shopify/React intern at
          PulseX Media, building scalable systems and modern React apps. After
          hours, I ship my own projects and refine my craft.
        </p>
        <div>
          <Button className="rounded-full m-4" asChild>
            <Link href="/about">About- Adarsh Maurya</Link>
          </Button>
        </div>
        <Image
          src={"/projects/project-01/cover-01.jpg"}
          alt="logo"
          width={1200}
          height={400}
          className="mt-8 rounded-lg"
        />
      </section>
    </BlurFade>
  );
};

export default Home;
