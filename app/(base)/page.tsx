import { BlogPagination } from "@/components/blog-pagination";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { getDatabase } from "@/sqlite";
import Image from "next/image";

const Home = async () => {

  let rows;

  const db = await getDatabase();
  try {
    rows = await db.sql`SELECT * FROM blogs LIMIT 10`;
  } catch (error) {
    console.log(JSON.stringify(error))
  } finally {
    db.close();
  }

  return (
    <section className=" max-w-3xl mx-auto">
      <BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center col-span-2">
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
              width={80}
              height={80}
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
            <ProjectCard isHomePage={true} />
          </div>
        </section>
        <section className="my-8">
          <hr />
          <h1 className="text-2xl font-semibold">Blogs </h1>
          <hr className="py-2" />
          <BlogPagination rows={JSON.parse(JSON.stringify(rows))} pageSize={5} />
        </section>
        <section>
          <Contact />
        </section>
      </BlurFade>
    </section>
  );
};

export default Home;
