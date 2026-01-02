import Link from "next/link";

const Sidebar = () => {
  const header = [
    { name: "Intro", path: "#intro" },
    { name: "Experience", path: "#experience" },
    { name: "Education", path: "#education" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <div className="flex flex-col gap-2">
      {header.map(({ name, path }) => (
        <Link href={path} className="text-lg">
          - {name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
