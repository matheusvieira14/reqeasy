import { BookmarkSimple, DotsThreeVertical } from "@phosphor-icons/react";
import { ContainerCard, InfoFooter, InfoHeader, StyledHr } from "./style";
import { CardProps } from "@/interface";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalCard } from "../ModalCard";
import Link from "next/link";

export function Card(props: { data: CardProps }) {

    return (
        <ContainerCard>
            <InfoHeader>
                <Link href={`/task/${props.data.id}`}>
                    <div className="infoProject">
                        <BookmarkSimple size={32} color="#023af3" weight="bold" />
                        <div>
                            <h2>{props.data.title}</h2>
                            <span>{props.data.updated_at}</span>
                        </div>
                    </div>
                </Link>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <DotsThreeVertical size={24} color="#000000" weight="bold" cursor="pointer" />
                    </Dialog.Trigger>
                    <ModalCard />
                </Dialog.Root>
            </InfoHeader>
            <Link href={`/task/${props.data.id}`}>
                <InfoFooter>
                    <p>{props.data.description}</p>
                    <span><strong>Status: </strong>{props.data.status}</span>
                    <span><strong>Prioridade: </strong>{props.data.priority}</span>
                    <StyledHr priority={props.data.priority} />
                </InfoFooter>
            </Link>
        </ContainerCard >
    )
}