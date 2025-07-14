import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Extra } from './pages/extra/extra';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'extra', component: Extra},
];
