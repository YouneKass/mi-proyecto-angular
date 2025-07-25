import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  constructor(private router: Router) { }

  guardarRol(rol: string) {
    localStorage.setItem('rol', rol);
    this.router.navigate(['inventario'])
  }

}


