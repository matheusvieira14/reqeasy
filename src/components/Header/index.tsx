import { BookBookmark, Link, PlusCircle } from "@phosphor-icons/react"
import { ContainerHeader } from "./style"
import { useRouter } from "next/router";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalHeader } from "../ModalHeader";

export function Header() {
    const router = useRouter();

    return (
        <ContainerHeader>
            <div>
                <BookBookmark size={32} color="#ffffff" weight="bold" />
                <h1>ReqEasy</h1>
            </div>
            <div>
                <button className="project" onClick={() => router.push("/project")}><PlusCircle size={24} color="currentColor" weight="bold" cursor="pointer" /></button>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button className="invite"><Link size={24} weight="bold" cursor="pointer" /></button>
                    </Dialog.Trigger>
                    <ModalHeader />
                </Dialog.Root>
                <strong>Matheus Amancio</strong>
                <img src="https://github.com/matheussamancio.png" />
            </div>
        </ContainerHeader>
    )
}