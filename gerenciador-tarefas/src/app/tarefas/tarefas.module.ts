import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';

@NgModule({
  declarations: [],
  //modulos
  imports: [
    CommonModule
  ],
  //serviços
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
