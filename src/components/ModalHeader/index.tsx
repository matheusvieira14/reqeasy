import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { ButtonClose, Content } from "./style";

export function ModalHeader() {

    return (
        <Content>
            <ButtonClose>
                <X size={20} color="black" weight="bold" cursor="pointer" />
            </ButtonClose>
            <form>
                <input type="text" placeholder="cole seu código de convite aqui!" />
                <button><MagnifyingGlass size={16} color="#001aff" weight="bold" /></button>
            </form>
        </Content>
    )
}