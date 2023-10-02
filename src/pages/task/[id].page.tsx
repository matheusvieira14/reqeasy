import { NavBar } from "@/components/NavBar";
import { ContainerTask, SectionTwo, CheckboxContainer, CheckboxInput, CheckboxLabel, ButtonTaks, StyledSpan } from "./style";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Bookmark, TextAa, Trash } from "@phosphor-icons/react";
import { Button } from "@/components/Button";
import { TASK_API } from "@/service/StaticApi";
import { TaskProps } from "@/interface";

export default function Task() {

    return (
        <ContainerTask>
            <Header />
            <main>
                <section>
                    <NavBar />
                </section>
                <SectionTwo>
                    <div className="infoHeader">
                        <Bookmark size={32} color="currentColor" weight="bold" />
                        <h1>Projeto</h1>
                    </div>
                    <div className="createTask">
                        <Input type="text" icon={<TextAa size={24} color="currentColor" weight="bold" />} placeholder="Crie as tasks do seu projeto" />
                        <select>
                            <option disabled selected value="daefault">Prioridade</option>
                            <option value="veryHigh">Muito Alta</option>
                            <option value="high">Alta</option>
                            <option value="medium">Média</option>
                            <option value="low">Baixa</option>
                            <option value="veryLow">Muito Baixa</option>
                        </select>
                    </div>
                    <div className="task">
                        <h1>Tasks do seu Projeto</h1>
                        {TASK_API.map((task: TaskProps) => {
                            return (
                                <CheckboxContainer key={task.id}>
                                    <div>
                                        <CheckboxInput
                                            type="checkbox" />
                                        <StyledSpan priority={task.priority} />
                                        <CheckboxLabel>
                                            {task.description}
                                        </CheckboxLabel>
                                    </div>
                                    <ButtonTaks
                                    // onClick={handleDeletedTask}
                                    >
                                        <Trash size={20} />
                                    </ButtonTaks>
                                </CheckboxContainer>
                            )
                        })}
                    </div>
                    <Button title="Criar relatório" />
                </SectionTwo>
            </main>
        </ContainerTask >
    )
}