import { BlogPagination } from "@/components/blog-pagination";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { about } from "@/lib/constants";
import { getDatabase } from "@/sqlite";
import Image from "next/image";

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
        <div>
          <Image
            src="/projects/banner.png"
            alt="banner"
            width={1200}
            height={400}
          />
        </div>
        <div className="flex items-center p-4">
          <div className="flex flex-col justify-center ">
            <h1 className="text-2xl font-semibold">Adarsh Maurya</h1>
            <p className="text-muted-foreground">{about.intro}</p>
          </div>
        </div>

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
