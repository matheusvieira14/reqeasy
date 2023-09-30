import { Button } from "@/components/Button"
import { ContainerSingIn, Form } from "./style";
import img from "../../assets/Image.svg"
import Image from "next/image";
import { Input } from "@/components/Input";
import { Password, User } from "@phosphor-icons/react";

export default function SignIn() {

    return (
        <ContainerSingIn>
            <div className="box">
                <Form>
                    <div className="formHeader">
                        <h1>Sentimos sua falta!</h1>
                        <p>Mais de 150 perguntas aguardam suas sábias sugestões!</p>
                    </div>
                    <div className="inputWrapper">
                        <Input placeholder="Name" type="text" icon={<User size={24} color="#6680b6" weight="bold" />} />
                        <Input placeholder="Password" type="password" icon={<Password size={24} color="#6680b6" weight="bold" />} />
                    </div>
                    <Button title='Entrar' />
                </Form>
            </div>
            <Image src={img} alt="" />
        </ContainerSingIn>
    )
}