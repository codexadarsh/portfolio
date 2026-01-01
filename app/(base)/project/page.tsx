import ProjectCard from "@/components/ProjectCard";
const page = () => {
  return (
    <section className="max-w-3xl mx-auto flex flex-col border">
      <h1 className="font-semibold text-2xl text-center">Projects</h1>
      <hr />
      <div className="p-4">
        <ProjectCard />
      </div>
    </section>
  );
};

export default page;
