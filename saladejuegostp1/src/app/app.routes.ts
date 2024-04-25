import { Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { QuienSoyComponent } from './Componentes/quien-soy/quien-soy.component';
import { NotFoundComponent } from './Componentes/not-found/not-found.component';

export const routes: Routes = 
[
    {path:'', redirectTo:'Login', pathMatch:'full'},
    {path:'Login', component: LoginComponent},
    {path:'Home', component: HomeComponent},
    {path:'QuienSoy', component: QuienSoyComponent},



    {path:'**', component: NotFoundComponent},
];
