import { Button } from "@/components/Button"
import { ContainerSingIn, Form } from "./style";
import img from "../../assets/Image.svg"
import Image from "next/image";
import { Input } from "@/components/Input";
import { Envelope, Password, User } from "@phosphor-icons/react";

export default function SignIn() {

    return (
        <ContainerSingIn>
            <Image src={img} alt="" />
            <div className="box">
                <Form>
                    <div className="formHeader">
                        <h1>Junte-se à comunidade Alem!</h1>
                        <p>Obtenha mais recursos e privilégios ingressando na comunidade mais útil!</p>
                    </div>
                    <div className="inputWrapper">
                        <Input placeholder="Name" type="text" icon={<User size={24} color="#6680b6" weight="bold" />} />
                        <Input placeholder="Email" type="email" icon={<Envelope size={24} color="#6680b6" weight="bold" />} />
                        <Input placeholder="Password" type="password" icon={<Password size={24} color="#6680b6" weight="bold" />} />
                    </div>
                    <Button title='Registrar' />
                </Form>
            </div>
        </ContainerSingIn>
    )
}