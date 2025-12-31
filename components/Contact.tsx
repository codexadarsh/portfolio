import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto mt-14">
      <hr />
      <h3 className="text-2xl font-semibold">Contact</h3>
      <hr className="py-4" />
      <div className="flex flex-col md:flex-row gap-3">
        <Button asChild className="bg-black text-white">
          <Link
            href="https://x.com/codexadarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaXTwitter />
            <span>DM me on X</span>
          </Link>
        </Button>
        <Button asChild className="bg-blue-500 hover:bg-blue-400 text-white">
          <Link
            href="https://x.com/codexadarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <BsLinkedin />
            <span>Connect me on Linkedin</span>
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://x.com/codexadarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <BsGithub />
            <span>Follow me on Github</span>
          </Link>
        </Button>

        <Button
          asChild
          className="bg-indigo-500 text-white hover:bg-indigo-400"
        >
          <Link
            href="https://discord.com/users/codexadarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <BsDiscord />
            <span>Meet me on Discord</span>
          </Link>
        </Button>
      </div>
      <div className="px-4 pb-4 rounded-xl mt-6">
        <h2 className="py-4 text-muted-foreground">
          You can also reach me via email
        </h2>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="message">Message</Label>
              </div>
              <Textarea
                id="message"
                placeholder="Type your message here"
                required
              />
            </div>
            <Button>Send me</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
