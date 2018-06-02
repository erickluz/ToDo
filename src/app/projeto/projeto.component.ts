import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Tarefa } from '../shared/tarefas.model'
import { TodoService } from '../todo.service'
import { Projeto } from '../shared/projetos.model';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css'],
  providers: [ TodoService ]
})

export class ProjetoComponent implements OnInit {

  public check: boolean = false
  public estilo: Array<string> = [""]
  public tarefas: Array<Tarefa>
  public projeto: Projeto

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTarefasDoProjeto(this.route.snapshot.params['id']).then((projeto: Projeto)=>{
      this.projeto = projeto  
      console.log(this.projeto)
      this.tarefas = this.projeto.itens

      this.tarefas.forEach((tarefa: Tarefa, i: number) => {
        if (tarefa.check == "t"){
          this.estilo[i] = "list-group-item list-group-item-action list-group-item-success"
        }else{
          this.estilo[i] = "list-group-item list-group-item-action"
        }
      })

    })
  }

  checkagemItem(valor: Event) : void {
    let index = parseInt((<HTMLInputElement>valor.target).attributes[1].value)
    let tarefa = this.tarefas[index]    

    if (tarefa.check == "t"){
      tarefa.check = "f"
    }else{
      tarefa.check = "t"
    }

    if (tarefa.check == "t"){
      this.estilo[index] = "list-group-item list-group-item-action list-group-item-success"
    }else{
      this.estilo[index] = "list-group-item list-group-item-action"
    }
  }
  
}