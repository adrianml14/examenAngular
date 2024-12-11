import { Routes } from '@angular/router';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SaludoComponent } from './saludo/saludo.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path:'', component: MenuComponent},
    { path:'cronometro', component: CronometroComponent},
    { path:'saludo', component: SaludoComponent},
    { path:'menu', component: MenuComponent}
];
