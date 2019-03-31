import { Tarefa } from './shared/tarefas.model'
import { Projeto } from './shared/projetos.model'
import { Http } from '@angular/http'
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService{

    private url_api = 'http://localhost:8080/'

    tarefas: Array<Tarefa>
    projetos: Array<Projeto>

    constructor(private http: Http){}

    public getTarefas(): Promise<Tarefa[]>{
        return this.http.get(`${this.url_api}tarefas/`)
        .toPromise()
        .then((resposta: any) => {
            console.log("Teste:  " + resposta.json())
            return resposta.json()
        })
        .catch((resposta: any) => {
            console.log("Deu problema nessa bosta")
        })
    }

    public getProjetos(): Promise<Projeto[]>{
        return this.http.get(`${this.url_api}projetos/`)
        .toPromise()
        .then((resposta: any) => {
            console.log("Teste: " + resposta)
            return resposta.json()
        })
    }

    public getTarefasDoProjeto(id: number): Promise<Projeto>{
        return this.http.get(`${this.url_api}projetos/${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta.json()
        })
    }

}