import { Bookmark, ClipboardText, SignOut } from "@phosphor-icons/react"
import { BaseButton, ButtonMenu, ContainerNavBar } from "./style"
import { useRouter } from "next/router";

export function NavBar() {
    const router = useRouter();
    const isRouteActive = (route: string) => router.pathname === route;
    return (
        <ContainerNavBar>
            <div className="infoMenu">
                <ButtonMenu active={isRouteActive('/home')} onClick={() => router.push("/home")}><Bookmark size={24} weight="bold" />Projetos</ButtonMenu>
                <ButtonMenu active={isRouteActive('/dashboard')} onClick={() => router.push("/dashboard")}><ClipboardText size={24} color="currentColor" weight="bold" />Dashboard</ButtonMenu>
            </div>
            <BaseButton>
                <img src="https://github.com/matheussamancio.png" />
                <span>Matheus Amancio</span>
                <button><SignOut size={24} color="#0012b4" weight="bold" /></button>
            </BaseButton>
        </ContainerNavBar>
    )
}