import { Tarefa } from "./tarefas.model";

export class Projeto{
    
    id: number
    nome: string
    descricao: string
    itens: Array<Tarefa>

}