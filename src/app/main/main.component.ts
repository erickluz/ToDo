import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'
import { Projeto } from '../shared/projetos.model'
import { Tarefa } from '../shared/tarefas.model'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ TodoService ]
})
export class MainComponent implements OnInit {

  projetos: Array<Projeto> = []
  temProjetos : boolean = true

  constructor(private projetoService: TodoService) { }

  ngOnInit() {

    this.projetoService.getProjetos()
    
    .then((projetos: Projeto[]) => {
      this.projetos = projetos
      this.temProjetos = true
    })
    .catch((projetos: Projeto[]) => {

      //Mudar para uma mensagem de erro
      this.temProjetos = false
      console.log("Sem projetos")
      
    })
  }
}
