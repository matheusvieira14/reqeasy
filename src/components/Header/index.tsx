import { BookBookmark } from "@phosphor-icons/react"
import { ContainerHeader } from "./style"

export function Header(props: any) {
    return (
        <ContainerHeader>
            <div>
                <BookBookmark size={32} color="#ffffff" weight="bold" />
                <h1>ReqEasy</h1>
            </div>
            <div>
                <strong>Matheus Amancio</strong>
                <img src="https://github.com/matheussamancio.png" />
            </div>
        </ContainerHeader>
    )
}