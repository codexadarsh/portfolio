import ProjectCard from "@/components/ProjectCard";
const page = () => {
  return (
    <section className="max-w-3xl mx-auto flex flex-col gap-4">
      <hr />
      <h1 className="font-semibold text-2xl text-center mt-4">Projects</h1>
      <ProjectCard />
    </section>
  );
};

export default page;
