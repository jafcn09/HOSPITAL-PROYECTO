import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent implements OnInit {
  public labels1: string[] = ['Historial Medico', 'Enfermedad', 'Tratamiento'];
  public data1 = [
    [10, 15, 40],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
