import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  imports: [CommonModule],
  styleUrls: ['./button.component.scss'],
  template:`
    <button class="custom-button" (click)="funcionGuardarRol(rolName)">{{rolName}}</button>
  `
})
export class ButtonComponent {
  @Input() rolName: string = '';

  @Output() devolverRol: EventEmitter<string> = new EventEmitter<string>();

  funcionGuardarRol(rolName:string){
    this.devolverRol.emit(rolName);
  }
}
