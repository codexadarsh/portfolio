// /resources/about.ts

export const person = {
  name: "Adarsh Maurya",
  role: "Full-Stack MERN Developer",
  avatar: "/avatar.png",
  location: "Mumbai, India",
};

export const about = {
  intro: `
Full-stack MERN developer with experience building scalable web applications using React, Next.js, Node.js, and MongoDB. Strong focus on clean architecture, modular component design, API performance, and optimized user experiences. Hands-on experience in Shopify theme development, custom sections, performance optimization, and component-driven UI engineering.
  `,

  work: [
    {
      company: "Pulsex Media Solutions LLP",
      role: "Shopify & React Web Developer Intern",
      timeframe: "July-2025 | Present",
      achievements: [
        "Built custom Shopify sections and reusable React components.",
        "Improved UI performance with lazy loading and memoization.",
        "Implemented responsive, pixel-perfect themes across devices.",
        "Optimized store load speeds and UX with modern frontend patterns.",
      ],
    },
  ],

  education: [
    {
      name: "University of Mumbai",
      description: "Bachelor of Computer Science (BSc CS) — In Progress",
    },
  ],

  skills: [
    {
      title: "Frontend Development",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "Shopify Liquid",
      ],
    },
    {
      title: "Backend Development",
      items: ["Node.js", "Express", "MongoDB", "Mongoose"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Postman", "Figma", "Vercel", "Netlify"],
    },
  ],
};
