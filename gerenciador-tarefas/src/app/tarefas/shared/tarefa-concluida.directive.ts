import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective {

  @Input() tarefaConcluida: boolean;

  constructor(private element: ElementRef) { }


  ngOnInit() {
    if (this.tarefaConcluida){
      this.element.nativeElement.style.textDecoration = "line-through";
      this.element.nativeElement.style.backgroundColor = "#94d2bd";
    }
  }
}
