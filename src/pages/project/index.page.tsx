import { NavBar } from "@/components/NavBar";
import { ContainerProject, SectionTwo } from "./style";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Bookmark, TextAa } from "@phosphor-icons/react";
import { Button } from "@/components/Button";

export default function Report() {

    return (
        <ContainerProject>
            <Header />
            <main>
                <section>
                    <NavBar />
                </section>
                <SectionTwo>
                    <div className="infoHeader">
                        <Bookmark size={32} color="currentColor" weight="bold" />
                        <h1>Crie seu Projeto</h1>
                    </div>
                    <Input type="text" icon={<TextAa size={24} color="currentColor" weight="bold" />} placeholder="Titulo" />
                    <select defaultValue="default">
                        <option disabled value="default">Prioridade</option>
                        <option value="veryHigh">Muito Alta</option>
                        <option value="high">Alta</option>
                        <option value="medium">Média</option>
                        <option value="low">Baixa</option>
                        <option value="veryLow">Muito Baixa</option>
                    </select>
                    <textarea placeholder="Descricão" />
                    <Button title="Criar projeto" />
                </SectionTwo>
            </main>
        </ContainerProject >
    )
}