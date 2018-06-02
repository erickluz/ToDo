import { Tarefa } from './shared/tarefas.model'
import { Projeto } from './shared/projetos.model'

export const TAREFAS : Array<Tarefa> = [
    {id: 1, tarefa: "Tarefa 1", check: "t"},
    {id: 2, tarefa: "Tarefa 2", check: "t"},
    {id: 3, tarefa: "Tarefa 3", check: "t"},
    {id: 4, tarefa: "Tarefa 4", check: "t"},
    {id: 5, tarefa: "Tarefa 5", check: "t"}
]


export const PROJETOS : Array<Projeto> = [
    {
        id: 1,
        nome: "Projeto 1",
        descricao: "Breve descricao do projeto 1....",
        itens: [
                {id: 1, tarefa: "Tarefa 1", check: "t"},
                {id: 2, tarefa: "Tarefa 2", check: "t"},
                {id: 3, tarefa: "Tarefa 3", check: "f"},
                {id: 4, tarefa: "Tarefa 4", check: "f"},
                {id: 5, tarefa: "Tarefa 5", check: "f"}
        ]
    },
    {
        id: 2,
        nome: "Projeto 2",
        descricao: "Breve descricao do projeto 2....",
        itens: [
                {id: 6, tarefa: "Tarefa 1", check: "t"},
                {id: 7, tarefa: "Tarefa 2", check: "t"},
                {id: 8, tarefa: "Tarefa 3", check: "t"},
                {id: 9, tarefa: "Tarefa 4", check: "f"},
                {id: 10, tarefa: "Tarefa 5", check: "f"}
        ]
    },
    {
        id: 3,
        nome: "Projeto 2",
        descricao: "Breve descricao do projeto 2....",
        itens: [
                {id: 11, tarefa: "Tarefa 1", check: "t"},
                {id: 12, tarefa: "Tarefa 2", check: "t"},
                {id: 13, tarefa: "Tarefa 3", check: "t"},
                {id: 14, tarefa: "Tarefa 4", check: "f"},
                {id: 15, tarefa: "Tarefa 5", check: "f"}
        ]
    }
]