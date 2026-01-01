import { Button } from "@/components/ui/button";
import { getDatabase } from "@/sqlite";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import "quill/dist/quill.snow.css";

export async function generateStaticParams() {
  const db = await getDatabase();
  const rows =
    await db.sql`SELECT id FROM blogs ORDER BY createdAt DESC LIMIT 100`;
  db.close();

  return rows.map((row: any) => ({
    id: String(row.id),
  }));
}

export default async function IdPage(params: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params.params).id;

  const db = await getDatabase();

  const result = await db.sql`SELECT * FROM blogs WHERE id = ${id}`;

  db.close();

  if (!result) {
    return redirect("/blog");
  }

  return (
    <section className="max-w-3xl mx-auto border">
      <div className="flex items-center md:items-end justify-between p-4 md:flex-row flex-col ">
        <h1 className={`text-lg `}> {result[0].title} </h1>
        <div className="text-start md:block flex items-center justify-between md:w-auto w-full md:text-end">
          <span className="text-muted-foreground font-mono">
            {result[0].author},
            {new Date(result[0].createdAt * 1000).toDateString()}
          </span>
          <br />
          <span className="text-gray-500 font-mono"></span>
        </div>
      </div>
      <hr />

      <div className="p-4">
        <div
          className="blogContent"
          dangerouslySetInnerHTML={{ __html: result[0].content }}
        />
      </div>
      <div className="flex justify-between">
        <div className="p-4">
          <Button asChild variant={"outline"}>
            <Link href={"/blog"}>
              <ArrowLeft />
              Back to blogs
            </Link>
          </Button>
        </div>
        <div className="p-4">
          <Button asChild>
            <Link href={"/"}>
              Go to home
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const db = await getDatabase();
  const result = await db.sql`SELECT * FROM blogs WHERE id = ${id}`;
  db.close();
  return {
    title: result[0].title,
  };
}
