import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages.component';
import { ProgreComponent } from './progre/progre.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';
const routes: Routes = [
  {path: 'dashboard', component: PagesComponent,
  canActivate: [AuthGuard],
  children: [
    {path: '', component: DashboardComponent, data: {titulo:'dash'}},
    {path: 'progre', component: ProgreComponent, data: {titulo: 'progresso'}},
    {path: 'grafica', component: GraficaComponent, data: {titulo: 'graficas'}},
    {path: 'ajustes', component: AjustesComponent, data: {titulo: 'ajustes'}},
    {path: 'promes', component: PromesaComponent, data: {titulo: 'promesas'}},
    {path: 'rxj', component: RxjsComponent, data: {titulo: 'rx'}}
  ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
