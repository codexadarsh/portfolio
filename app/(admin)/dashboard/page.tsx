import { Button } from "@/components/ui/button";
import { authenticate } from "@/lib/actions";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getDatabase } from "@/sqlite";
import { Actions } from "@/components/actions";
import { Logout } from "@/components/logout";

export default async function Dashboard() {
    
    await authenticate();

    const db = await getDatabase();

    const rows = await db.sql`SELECT * FROM blogs LIMIT 10`;

    return <div className="fixed inset-0 bg-white w-screen min-h-screen">
        <div className="max-w-screen-lg mx-auto border-x p-10">
            <div className="flex items-center justify-between border-b">
                <h1 className="text-xl pb-5"> Arch Events - Blog Panel </h1>
                <Logout />
            </div>
            <div>
                <div className="py-5 border-b flex items-center justify-end">
                    <Button asChild>
                        <Link href="/dashboard/new" className="flex items-center"> Create Blog </Link>
                    </Button>
                </div>
                <div>
                    <Table>
                        <TableCaption>All the blogs on the website.</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead>id</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="border-b">
                            {
                                rows.length === 0 ? 
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center"> No blogs found. </TableCell>
                                    </TableRow>
                                : rows.map((item: {
                                    id: string, 
                                    title: string, 
                                    author: string
                                }) => (
                                    <TableRow key={item.id}>
                                        <TableCell> {item.id} </TableCell>
                                        <TableCell> {item.title} </TableCell>
                                        <TableCell> {item.author} </TableCell>
                                        <TableCell>
                                            <Actions id={item.id} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    </div>
}