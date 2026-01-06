import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <hr />
      <h3 className="text-2xl font-semibold px-4">Contact</h3>
      <hr />
      <div className="flex flex-col md:flex-row justify-center p-4 gap-2">
        <Button asChild variant={"outline"}>
          <Link
            href="https://x.com/codexadarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaXTwitter />
            <span>X.com</span>
          </Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link
            href="https://linkedin.com/in/codexadarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <BsLinkedin />
            <span>Linkedin</span>
          </Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link
            href="https://github.com/codexadarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <BsGithub />
            <span>Github</span>
          </Link>
        </Button>

        <Button asChild variant={"outline"}>
          <Link
            href="https://discord.com/users/codexadarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <BsDiscord />
            <span>Discord</span>
          </Link>
        </Button>
      </div>
      <hr />
      <div className="px-4 pb-4 rounded-xl">
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
