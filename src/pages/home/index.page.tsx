import { NavBar } from "@/components/NavBar";
import { ContainerHome, SectionTwo } from "./style";
import { Input } from "@/components/Input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { CARD_API } from "@/service/StaticApi";

export default function Home() {

    return (
        <ContainerHome>
            <Header />
            <main>
                <section>
                    <NavBar />
                </section>
                <SectionTwo >
                    <Input placeholder="Busque seu Projeto" icon={<MagnifyingGlass size={24} color="#001aff" weight="bold" />} />
                    {CARD_API.map(card => {
                        return (
                            <Card
                                key={card.id}
                                data={card}
                            />
                        )
                    })}
                </SectionTwo>
            </main>
        </ContainerHome>
    )
}