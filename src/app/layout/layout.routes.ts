import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { Home } from '../pages/home/layout/home.component';
import { Inventario } from '../pages/inventario/inventario.component';
import { Contact } from '../pages/contact/contact.component';


export const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {path: '', component: Home},
        {path: 'inventario', component: Inventario},
        {path: 'contact', component: Contact},
    ]
  }
];