import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Extra } from './pages/extra/extra';
import { Inventario } from './pages/inventario/inventario';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'inventario', component: Inventario},
];
