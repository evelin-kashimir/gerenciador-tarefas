import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

/** Serviço responsável pela regra de negócio do gerenciamento de tarefas
 *  Listagem, Cadastro, Atualização e Remoção. 
 * 
 * @author Evelin Ferraz
 * @since 20/12/2022
 */
@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /** Lista todas as tarefas cadastradas 
   * @return Tarefa
   */
  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /** Cadastra uma nova tarefa
   * @param Tarefa
   */
  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /** Faz uma busca de tarefa por id
   * @return Tarefa
   */
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  /** Atualiza uma determinada tarefa
   * @param Tarefa
   */
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    }); 
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /** Remove uma tarefa através do id
   * @param id
   */
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /** Altera o status de determinada tarefa para concluido ou não
   * @param id 
   */
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      objs[index].concluida = !obj.concluida;
    });
  }
}
