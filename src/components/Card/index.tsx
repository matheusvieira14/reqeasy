import { BookmarkSimple, DotsThreeVertical } from "@phosphor-icons/react";
import { ContainerCard, InfoFooter, InfoHeader, StyledHr } from "./style";
import { CardProps } from "@/interface";

export function Card(props: { data: CardProps }) {

    return (
        <ContainerCard>
            <InfoHeader>
                <div className="infoProject">
                    <BookmarkSimple size={32} color="#023af3" weight="bold" />
                    <div>
                        <h2>{props.data.title}</h2>
                        <span>{props.data.updated_at}</span>
                    </div>
                </div>
                <DotsThreeVertical size={24} color="#000000" weight="bold" cursor="pointer" />
            </InfoHeader>
            <InfoFooter>
                <p>{props.data.description}</p>
                <span><strong>Status: </strong>{props.data.status}</span>
                <span><strong>Prioridade: </strong>{props.data.priority}</span>
                <StyledHr priority={props.data.priority} />
            </InfoFooter>
        </ContainerCard>
    )
}