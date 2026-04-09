import { Button } from "./ui/button";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const primary = {
  href: "mailto:mauryaadarsh793@gmail.com",
  label: "Email Me",
  icon: <IoMdMail className="size-4" />,
};

const secondary = [
  {
    href: "https://linkedin.com/in/codexadarsh",
    label: "LinkedIn",
    icon: <BsLinkedin className="size-4" />,
  },
  {
    href: "https://github.com/codexadarsh",
    label: "GitHub",
    icon: <BsGithub className="size-4" />,
  },
  {
    href: "https://x.com/codexadarsh",
    label: "X",
    icon: <FaXTwitter className="size-4" />,
  },
];

const Contact = () => {
  return (
    <div className="mx-auto max-w-4xl px-4">
      {/* Message */}
      <div className="mb-6 max-w-md">
        <h3 className="text-base font-semibold tracking-tight">
          Have a project in mind?
        </h3>
        <p className="text-muted-foreground mt-1 text-sm">
          I’m open to building products, collaborations, or freelance work.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        {/* Primary CTA */}
        <Button asChild size="sm">
          <Link
            href={primary.href}
            className="flex items-center gap-2 text-sm font-medium"
          >
            {primary.icon}
            {primary.label}
          </Link>
        </Button>

        {/* Secondary links */}
        <div className="flex items-center gap-3">
          {secondary.map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition"
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
