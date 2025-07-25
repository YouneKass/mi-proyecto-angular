import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './pages/nav/nav';
import { Footer } from './pages/footer/footer';
import { Inventario } from "./pages/inventario/inventario"; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer, Inventario],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Felipe');
}
