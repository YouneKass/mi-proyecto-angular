import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav.component';
import { Footer } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Nav, Footer],
  standalone: true,
  template: `
    <app-nav></app-nav>
    <main>
      <router-outlet />
    </main>
    <app-footer></app-footer>
  `
})
export class LayoutComponent {

}
