import { getDatabase } from "@/sqlite";
import { redirect } from "next/navigation";
import "quill/dist/quill.snow.css";

export async function generateStaticParams() {
  const db = await getDatabase();
  const rows = await db.sql`SELECT id FROM blogs ORDER BY createdAt DESC LIMIT 100`;
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
    <section className="max-w-screen-xl mx-auto py-10">
      <div className="border-b px-5 flex items-start md:items-end justify-between pb-4 md:flex-row flex-col ">
        <div>
          <h1 className={`text-3xl text-chart-2`}> {result[0].title} </h1>
        </div>
        <div className="text-start md:block flex items-center justify-between md:w-auto w-full md:text-end">
          <span className="text-gray-500 font-mono">
            {new Date(result[0].createdAt * 1000).toDateString()}
          </span> <br />
          <span className="text-gray-500 font-mono">{result[0].author}</span>
        </div>
      </div>
      <div className="">
        <div
          className="blogContent"
          dangerouslySetInnerHTML={{ __html: result[0].content }}
        />
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const db = await getDatabase();
  const result = await db.sql`SELECT * FROM blogs WHERE id = ${id}`;
  db.close();
  return {
    title: result[0].title,
  };
}

