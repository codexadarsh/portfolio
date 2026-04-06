import Image from "next/image";

const skills = [
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Supabase", icon: "supabase" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Figma", icon: "figma" },
  { name: "Postman", icon: "postman" },
  { name: "VS Code", icon: "vscode" },
  { name: "Vercel", icon: "vercel" },
  { name: "Netlify", icon: "netlify" },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-10 gap-4 max-w-2xl mx-auto py-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="group flex flex-col items-center"
        >
          <div className="relative w-12 h-12">
            <Image
              src={`https://skillicons.dev/icons?i=${skill.icon}`}
              alt={skill.name}
              fill
              sizes="48px"
              className="object-contain transition-transform duration-200 group-hover:scale-110"
            />
          </div>

          <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}