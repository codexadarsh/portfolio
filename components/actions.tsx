"use client"

import { deleteBlog } from "@/lib/actions";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function Actions({id}: {
    id: string
}) {
    const router = useRouter();
    if(!id) return null;

    async function deleteAction() {
        const repsonse = await deleteBlog({id});

        if(repsonse.error) {
            toast.error(repsonse.error, { duration: 2000 });
            return;
        }
        toast.success("Blog deleted successfully", { duration: 2000 });
        router.refresh();
    }

    return <div className="flex items-center gap-2">
        <Trash onClick={deleteAction} size={15} className="hover:cursor-pointer text-red-500" />
        <Link href={`/dashboard/new?id=${id}`}>
            <Pencil size={15} className="hover:cursor-pointer text-green-500" />
        </Link>
    </div>
}