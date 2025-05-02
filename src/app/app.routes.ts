import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProdactComponent } from './prodact/prodact.component';
import { ProdactDetalsComponent } from './prodact/prodact-detals/prodact-detals.component';



export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'prodact', component: ProdactComponent},
    {path: 'prodact/:id', component: ProdactDetalsComponent}
];
