import { InputProps } from "@/interface"
import { ContainerInput } from "./style"

export function Input(props: InputProps) {
    return (
        <ContainerInput>
            {props.icon}
            <input type={props.type} placeholder={props.placeholder} />
        </ContainerInput>
    )
}