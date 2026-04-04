import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto p-2  border mb-20">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
        {/* Left */}
        <p className="font-mono text-center sm:text-left">
          Built by{" "}
          <Link
            href="https://x.com/codexadarsh"
            target="_blank"
            className="hover:underline underline-offset-4"
          >
            codexadarsh
          </Link>
          .
        </p>

        {/* Right */}
        <p className="font-mono text-center sm:text-right">
          The source code is available on{" "}
          <Link
            href="https://github.com/codexadarsh"
            target="_blank"
            className="hover:underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
