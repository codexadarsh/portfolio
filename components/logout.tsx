import { logout } from "@/lib/actions";
import { Button } from "./ui/button";

export function Logout() {
    return <Button variant={"link"} onClick={logout}>
        Logout
    </Button>
}   