import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css']
})
export class CadastrarTarefasComponent {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService,
    private router: Router) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if(this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
