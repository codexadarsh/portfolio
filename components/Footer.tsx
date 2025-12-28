import Link from "next/link";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
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
    <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center py-4 max-w-4xl px-4 mx-auto">
      <div>
        <AnimatedShinyText>
          design and developed by
          <Link href="https://x.com/codexadarsh" target="_blank">
            <span className="px-1 hover:underline">codexadarsh</span>
          </Link>
        </AnimatedShinyText>
      </div>
      <div>
        <TooltipProvider>
          <div className="flex">
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      target="_blank"
                      href={social.url}
                      aria-label={social.name}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Footer;
