import { BlogForm } from "@/components/blog-form";
import { authenticate } from "@/lib/actions";
import { sanitize } from "@/lib/utils";
import { getDatabase } from "@/sqlite";
import { redirect } from "next/navigation";

export default async function NewBlog({searchParams}: {
    searchParams : Promise<{id: string}>
}) {
  await authenticate();

  const id = (await searchParams).id;

  let data;

  if(id) {
    const db = await getDatabase();
    const rows = await db.sql`SELECT * FROM blogs WHERE id = ${id}`;
    
    if(rows.length === 0) {
        return redirect("/dashboard")
    }
    data = rows[0];
  }

  return <div className="fixed inset-0 w-screen min-h-screen">
    <BlogForm data={ data ? sanitize(data): null} />
  </div>;
}
