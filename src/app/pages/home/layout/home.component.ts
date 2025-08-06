import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../shared/components/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class Home {
  
  constructor(private router: Router, private dialog: MatDialog) { }

  funcionGuardarRol(rol: string): void {
    localStorage.setItem('rol', rol);
    this.router.navigate(['inventario'])
  }
  
  funcionModal():void{
    this.dialog.open(ModalComponent, {
      data: {
        mensaje: 'Estas tocando x parte de la pagina',
        btnNombre: 'Confirmar'
      }
    });
  }

}


