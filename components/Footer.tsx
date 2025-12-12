import Link from "next/link";
import { AnimatedShinyText } from "./ui/animated-shiny-text";

const Footer = () => {
  return (
    <AnimatedShinyText className="flex justify-center items-center py-6 gap-1">
      design and developed by
      <Link href="https://x.com/codexadarsh">
        <span className="hover:underline">codexadarsh</span>
      </Link>
    </AnimatedShinyText>
  );
};

export default Footer;
