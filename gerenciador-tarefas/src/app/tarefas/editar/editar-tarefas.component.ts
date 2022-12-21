import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    ngOnInit(){
      const id = +this.route.snapshot.params['id']; //o '+' converte a string para número
      this.tarefa = this.tarefaService.buscarPorId(id);
    }

    atualizar(): void {
      if(this.formTarefa.form.valid) {
        this.tarefaService.atualizar(this.tarefa);
        this.router.navigate(['/tarefas'])
      }
    }
}
