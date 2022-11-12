import { Timer } from "phosphor-react";
import { NoHistoryContainer } from "./styles";

export function NoHistory() {
  return (
    <NoHistoryContainer>
      <Timer size={100} />
      <div>
        <h1>Você ainda não possui tarefas</h1>
        <p>Gerencie seu tempo e aumente o foco <br/> e concentração nas suas tarefas</p>
      </div>
    </NoHistoryContainer>
  )
}
