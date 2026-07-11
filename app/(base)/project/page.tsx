import ProjectCard from "@/components/ProjectCard";

const Page = () => {
  return (
    <section className="mx-auto max-w-3xl border-r border-l px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-lg font-semibold tracking-tight">Projects</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          A selection of projects focused on performance, usability, and
          real-world applications.
        </p>
      </div>

      {/* Content */}
      <ProjectCard />
    </section>
  );
};

export default Page;
