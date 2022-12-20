import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  //modulos
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  //serviços
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
