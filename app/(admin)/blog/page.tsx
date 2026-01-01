import { Button } from "@/components/ui/button";
import { getDatabase } from "@/sqlite";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default async function BlogPage() {
  const db = await getDatabase();

  const rows = await db.sql`SELECT * FROM blogs LIMIT 10`;

  db.close();

  return (
    <section className="max-w-3xl mx-auto min-h-screen border">
      <div className="flex md:flex-row flex-col md:items-center md:justify-between p-4 gap-2">
        <div>
          <h1 className={`text-2xl font-semibold`}> Blogs </h1>
          <h1 className="text-muted-foreground text-sm font-mono mt-2">
            Writing about engineering, learning, and building things that
            matter.
          </h1>
        </div>
        <Button asChild variant={"outline"}>
          <Link href={"/"}>
            <Home className="size-3" />
            home
          </Link>
        </Button>
      </div>
      <hr />
      <div className="p-4 text-xl font-semibold text-center">
        {rows && rows.length === 0 ? (
          <div>
            <h1> No Blogs Found </h1>
          </div>
        ) : (
          <div className="">
            {rows.map((row: any) => {
              const date = new Date(row.createdAt * 1000);
              const format = new Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).format(date);
              return (
                <Link
                  href={`/blog/${row.id}`}
                  className=" flex md:items-center justify-between md:flex-row flex-col md:gap-2 p-4 hover:bg-accent"
                  key={row.id}
                >
                  <h1 className="hover:underline flex items-center gap-1">
                    {row.title}
                  </h1>
                  <span className="font-mono text-sm text-muted-foreground">
                    {row.author},{format}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
