import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class Home {
  
  constructor(private router: Router) { }

  funcionGuardarRol(rol: string): void {
    localStorage.setItem('rol', rol);
    this.router.navigate(['inventario'])
  }

}


