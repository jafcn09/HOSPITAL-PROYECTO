import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesRoutingModule} from './pages/pages.routing';
import { ErrorComponent } from './auth/error/error.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule

  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
