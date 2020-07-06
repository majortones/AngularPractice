import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent }, //Refer in HTML <a routerLink="/">Home</a>
  { path: 'list', component: ListComponent } //Refer in HTML <a routerLink="/list">List</a>
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
