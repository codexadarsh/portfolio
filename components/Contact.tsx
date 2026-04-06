import { Button } from "./ui/button";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const details = [
  {
    href: "https://linkedin.com/in/codexadarsh",
    label: "LinkedIn",
    icon: <BsLinkedin className="size-4" />,
  },
  {
    href: "https://github.com/codexadarsh",
    label: "Github",
    icon: <BsGithub className="size-4" />,
  },
  {
    href: "https://x.com/codexadarsh",
    label: "X",
    icon: <FaXTwitter className="size-4" />,
  },
  {
    href: "",
    label: "Discord",
    icon: <BsDiscord className="size-4" />,
  },

  {
    href: "mailto:mauryaadarsh793@gmail.com",
    label: "Email",
    icon: <IoMdMail className="size-4" />,
  },
];
const Contact = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <hr />
      <h2 className="px-4 text-xl font-semibold">Connect</h2>
      <hr />
      <div className="flex flex-col justify-center gap-2 p-4 md:flex-row">
        {details.map(({ href, label, icon }) => (
          <Button asChild key={label} variant="ghost" size="sm">
            <Link
              key={label}
              href={href}
              target="_blank"
              className="hover:text-primary flex items-center gap-2 text-sm font-medium"
            >
              {icon} {label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Contact;
