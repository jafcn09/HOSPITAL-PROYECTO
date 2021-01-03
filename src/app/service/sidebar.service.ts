import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
 menu: any [] = [

 {
   titulo: 'Monitoreo',
   icono: 'mdi mdi-gauge',
   submenu: [


   {  titulo: 'Main', url: '/'},
   { titulo: 'progres', url: 'progre'},
   {titulo: 'Grafica', url: 'grafica'},
   {titulo: 'Eliga su tema', url: 'ajustes'},
   {titulo: 'promesa', url: 'promes'},
   {titulo: 'rx', url: 'rxj'}
  ]
 }
];
  constructor() { }
}
