import { logout } from "@/lib/actions";
import { Button } from "./ui/button";

export function Logout() {
    return <Button variant={"outline"} onClick={logout}>
        Logout
    </Button>
}   