"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlog, updateBlog } from "@/lib/actions";
import { toast } from "sonner";

export function BlogForm({
  data,
}: {
  data: { id: string; title: string; content: string; author: string } | null;
}) {
  const [type, setType] = useState<"new" | "edit">("new");
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const [content, setContent] = useState("");
  const [form, setForm] = useState({
    title: "",
    author: "",
  });
  const [loader, setLoader] = useState(false);

  async function handleSubmit() {
    setLoader(true);
    try {
      if (type === "new") {
        const { error, data } = await createBlog({
          data: {
            title: form.title,
            content,
            author: form.author,
          },
        });

        if (error) {
          toast.error(error, { duration: 2000 });
          return;
        }

        toast.success("Blog created successfully", { duration: 2000 });
        console.log(data);
      }
      if(type === "edit") {
        const { error } = await updateBlog({
          data: {
            id: (data as any).id,
            title: form.title,
            content,
            author: form.author,
          },
        });
        
        if (error) {
          toast.error(error, { duration: 2000 });
          return;
        };

        toast.success("Blog updated successfully", { duration: 2000 });
        console.log(data);
      }
    } catch (error) {
      toast.error("Something went wrong", { duration: 2000 });
      console.log(error);
    } finally {
      setLoader(false);
    }
  }

  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Start writing here...",
      });

      quillRef.current.on("text-change", () => {
        const html = editorRef.current?.querySelector(".ql-editor")?.innerHTML;
        setContent(html || "");
      });
    }
  }, []);

useEffect(() => {
  if (data) {
    setType("edit");
    setContent(data.content);
    setForm({
      title: data.title,
      author: data.author
    })
    if (quillRef.current && data.content) {
      quillRef.current.clipboard.dangerouslyPasteHTML(data.content);
    }
  }
}, [data]);

  return (
    <div className="space-y-4 max-w-screen-xl mx-auto py-10 border-x px-10">
      <h1 className="text-xl border-b pb-5">
        {" "}
        {type === "new" ? "Create Blog" : "Update Blog"}{" "}
      </h1>
      <Input
        type="text"
        name="title"
        placeholder="Enter Title"
        defaultValue={data?.title}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="author"
        placeholder="Enter Name"
        defaultValue={data?.author}
        onChange={handleChange}
      />
      <div ref={editorRef} className="h-[60vh] border rounded" />
      <div className="flex items-center justify-between gap-2 my-4">
        <Button asChild variant={"ghost"}>
          <Link className="flex items-center gap-2" href="/dashboard">
            {" "}
            <ArrowLeft /> Back to dashboard{" "}
          </Link>
        </Button>
        <Button
          onClick={handleSubmit}
        >
          {type === "new"
            ? loader
              ? "Creating..."
              : "Create Blog"
            : loader
            ? "Updating..."
            : "Update Blog"}
        </Button>
      </div>
    </div>
  );
}
