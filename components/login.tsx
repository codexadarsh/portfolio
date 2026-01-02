"use client";

import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  async function handleLogin() {
    setLoader(true);
    try {
      const { error } = await login({
        email: data.email,
        pass: data.password,
      });

      if (error) {
        toast.error(error, { duration: 2000 });
        router.refresh();
        return;
      }
      toast.success("Login successful", { duration: 2000 });
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { duration: 2000 });
    } finally {
      setLoader(false);
    }
  }

  return (
    <div className="">
      <Card className="w-screen max-w-sm">
        <CardHeader>
          <CardTitle>Admin</CardTitle>
          <CardDescription>
            Login to continue to blog dashboard.
          </CardDescription>
          {/* <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            type="email"
            name="email"
            value={data.email}
            placeholder="Username"
            onChange={handleChange}
            className="w-full"
          />
          <Input
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            onChange={handleChange}
            className="w-full"
          />
          <Button onClick={handleLogin} className="w-full">
            {loader ? "Logging..." : "Login"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
