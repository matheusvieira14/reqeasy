import { Checks, Eraser, Link, Trash, X } from "@phosphor-icons/react";
import { ButtonClose, ButtonMenu, Content } from "./style";

export function ModalCard() {

    return (
        <Content>
            <ButtonClose>
                <X size={24} color="black" weight="bold" cursor="pointer" />
            </ButtonClose>
            <ButtonMenu active={false}><Link size={24} weight="bold" />Convidar</ButtonMenu>
            <ButtonMenu active={true}><Checks size={24} weight="bold" />Concluir</ButtonMenu>
            <ButtonMenu active={false}><Trash size={24} weight="bold" />Deletar</ButtonMenu>
            <ButtonMenu active={false}><Eraser size={24} weight="bold" />Editar</ButtonMenu>
        </Content>
    )
}