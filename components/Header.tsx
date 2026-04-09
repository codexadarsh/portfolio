"use client";

import React from "react";
import Link from "next/link";
import { CircleUserRound, HomeIcon, PencilIcon, Grid2X2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DockIcon } from "@/components/ui/dock";
import { useState, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { ModeToggle } from "./theme-toggle";

export type IconProps = React.HTMLAttributes<SVGElement>;
type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-IN",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/about", icon: CircleUserRound, label: "About" },
    { href: "/project", icon: Grid2X2, label: "Project" },
    { href: "/blog", icon: PencilIcon, label: "Blog" },
  ],
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

      theme: {
        name: "Toggle Theme",
        url: "#",
        icon: ModeToggle,
      },
    },
  },
};

export function Header() {
  return (
    <div className="bg-background/80 sticky top-0 z-50 px-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between md:border">
        <p className="text-muted-foreground hidden px-4 py-2 text-sm font-medium md:block">
          Asia/Kolkata
        </p>
        <div className="">
          <TooltipProvider>
            <div className="flex items-center">
              {DATA.navbar.map((item) => (
                <DockIcon key={item.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        aria-label={item.label}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full",
                        )}
                      >
                        <item.icon className="size-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              <Separator orientation="vertical" className="h-full" />
              {Object.entries(DATA.contact.social).map(([name, social]) => (
                <DockIcon key={name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={social.url}
                        aria-label={social.name}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full",
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
        <p className="text-muted-foreground hidden px-4 py-2 text-sm font-medium md:block">
          {<TimeDisplay timeZone="Asia/Kolkata" />}
        </p>
      </div>
    </div>
  );
}
