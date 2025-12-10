import Link from "next/link";
import { AnimatedShinyText } from "./ui/animated-shiny-text";

const Footer = () => {
  return (
    <AnimatedShinyText className="flex justify-center items-center py-4">
      <Link href="https://github.com/codexadarsh">
        design and developed by adarsh
      </Link>
    </AnimatedShinyText>
  );
};

export default Footer;
