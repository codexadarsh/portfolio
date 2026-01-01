import { LoginForm } from "@/components/login";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Login() {
    const exists = (await cookies()).has("token");
    return <div className="fixed inset-0 bg-white w-screen h-screen flex flex-col items-center justify-center">
        <LoginForm />
        {exists && 
            <Button asChild className="w-full max-w-sm my-5" variant={"link"}>
                <Link href={"/dashboard"}>
                    Go to Dashboard <ArrowRight />
                </Link>
            </Button>
        }
    </div>
}