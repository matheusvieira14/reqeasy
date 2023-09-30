import { ContainerButton } from "./style"
import { buttonProps } from "@/interface"

export function Button(props: buttonProps) {
    return (
        <ContainerButton>
            {props.title}
        </ContainerButton>
    )
}