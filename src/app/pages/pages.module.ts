import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgreComponent } from './progre/progre.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { AjustesComponent } from './ajustes/ajustes.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule({
  declarations: [
   DashboardComponent,
   ProgreComponent,
   GraficaComponent,
   PagesComponent,
   AjustesComponent,
   PromesaComponent,
   RxjsComponent,
  ],
  exports : [
    DashboardComponent,
    GraficaComponent,
    ProgreComponent,
   PagesComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
   RouterModule,
  ComponentsModule
  ]
})
export class PagesModule { }
