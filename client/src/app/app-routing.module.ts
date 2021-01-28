import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '**', component: OverviewComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
