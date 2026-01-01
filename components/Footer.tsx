import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const DATA = {
    contact: {
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/codexadarsh",
          icon: BsGithub,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://linkedin.com/in/codexadarsh",
          icon: BsLinkedin,
        },
        X: {
          name: "X",
          url: "https://twitter.com/codexadarsh",
          icon: FaXTwitter,
        },
      },
    },
  };
  return (
    <div className="flex justify-center items-center max-w-3xl mx-auto py-2 px-4 mb-24 md:border">
      <div className="text-muted-foreground">
        <Link href="https://x.com/codexadarsh" target="_blank">
          <span>design and developed by codexadarsh</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
