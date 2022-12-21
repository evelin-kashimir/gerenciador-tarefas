import { Component } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(){
    this.tarefas = this.listarTarefas();
  }

  listarTarefas() {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault(); //desabilitando função de atualização de página
    if(confirm('Deseja remover a tarefa "' + tarefa.nome + ' "?')) { //confirm é uma função de alerta do navegador
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTarefas();
    }
  }

  atualizarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTarefas();
    }
  }
}
