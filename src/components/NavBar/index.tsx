import { Binoculars, Bookmark, ChartLineUp, SignIn, SignOut, User } from "@phosphor-icons/react"
import { BaseButton, ButtonMenu, ContainerNavBar } from "./style"
import { useRouter } from "next/router";

export function NavBar(props: any) {
    const router = useRouter();
    const isRouteActive = (route: string) => router.pathname === route;
    return (
        <ContainerNavBar>
            <div className="infoMenu">
                <ButtonMenu active={isRouteActive('/home')}><ChartLineUp size={24} weight="bold" />Início</ButtonMenu>
                <ButtonMenu active={isRouteActive('/report')}><Bookmark size={24} weight="bold" />Relatórios</ButtonMenu>
            </div>
            <BaseButton>
                <img src="https://github.com/matheussamancio.png" />
                <span>Matheus Amancio</span>
                <button><SignOut size={24} color="#0012b4" weight="bold" /></button>
            </BaseButton>
        </ContainerNavBar>
    )
}