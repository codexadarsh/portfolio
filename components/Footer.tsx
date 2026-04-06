import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl border p-2">
      <div className="text-muted-foreground flex flex-col items-center justify-center gap-1 text-sm font-medium sm:flex-row">
        {/* Left */}
        <p className="text-center sm:text-left">
          Built by{" "}
          <Link
            href="https://x.com/codexadarsh"
            target="_blank"
            className="underline-offset-4 hover:underline hover:text-primary"
          >
            codexadarsh
          </Link>
          .
        </p>

        {/* Right */}
        <p className="text-center sm:text-right">
          The source code is available on{" "}
          <Link
            href="https://github.com/codexadarsh"
            target="_blank"
            className="underline-offset-4 hover:underline hover:text-primary"
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
