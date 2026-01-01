"use server";

import { getDatabase } from "@/sqlite";
import { compare } from "bcryptjs";
import { cookies } from "next/headers";
import { sign, verify } from "jsonwebtoken";
import { redirect } from "next/navigation";
import { sanitize } from "./utils";

export async function login({ email, pass }: { email: string; pass: string }) {
  try {
    const cookie = await cookies();

    if (email.length === 0 || pass.length === 0) {
      return {
        error: "Email or Password is empty",
        data: null,
      };
    }

    const db = await getDatabase();

    const row = await db.sql`SELECT * from user WHERE email = ${email}`;
    console.log(row)
    if (!row || row.length === 0) {
      return {
        error: "User not found",
        data: null,
      };
    }

    const password = row[0]?.password;

    const match = await compare(pass, password);

    if (!match) {
      return {
        error: "Incorrect Password",
        data: null,
      };
    }

    const token = sign(
      {
        id: row[0]?.id,
        email: row[0]?.email,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1h",
      }
    );

    cookie.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
      path: "/",
    });

    db.close();

    return sanitize({
      error: null,
      data: row,
    });
  } catch (error) {
    console.warn(error);
    return {
      error: "Internal Server Error",
      data: null,
    };
  }
}

export async function authenticate(): Promise<null> {
  try {
    const cookie = await cookies();

    const token = cookie.get("token");

    if (!token) {
      return redirect("/login");
    }

    const verifyToken = verify(token.value, process.env.JWT_SECRET!);

    if (!verifyToken) {
      return redirect("/login");
    }

    return null;
  } catch (error) {
    return redirect("/login");
  }
}

export async function logout() {
  const cookie = await cookies();
  cookie.delete("token");
  return redirect("/login");
}

export async function createBlog({
  data,
}: {
  data: {
    title: string;
    content: string;
    author: string;
  };
}) {
  try {
    if (!data.title || !data.content || !data.author) {
      return {
        error: "All fields are required",
        data: null,
      };
    }

    const db = await getDatabase();

    const createdAt = Math.floor(Date.now() / 1000);

    const result =
      await db.sql`INSERT INTO blogs (title, content, author, createdAt) VALUES (${data.title}, ${data.content}, ${data.author}, ${createdAt})`;

    db.close();

    return {
      error: null,
      data: result,
    };
  } catch (error) {
    return {
      error: "Internal Server Error",
      data: null,
    };
  }
}

export async function updateBlog({
  data,
}: {
  data: {
    id: string;
    title: string;
    content: string;
    author: string;
  };
}) {
  try {
    if (!data.id || !data.title || !data.content || !data.author) {
      return {
        error: "All fields are required",
        data: null,
      };
    }

    const db = await getDatabase();

    const result =
      await db.sql`UPDATE blogs SET title = ${data.title}, content = ${data.content}, author = ${data.author} WHERE id = ${data.id}`;

    db.close();

    return {
      error: null,
      data: result,
    };
  } catch (error) {
    return {
      error: "Internal Server Error",
      data: null,
    };
  }
}

export async function deleteBlog({ id }: { id: string }) {
  try {
    if (!id) {
      return {
        error: "All fields are required",
        data: null,
      };
    }

    const db = await getDatabase();

    const result = await db.sql`DELETE FROM blogs WHERE id = ${id}`;

    db.close();

    return {
      error: null,
      data: result,
    };
  } catch (error) {
    return {
      error: "Internal Server Error",
      data: null,
    };
  }
}
