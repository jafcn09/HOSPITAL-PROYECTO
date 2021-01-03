import { Component, OnInit } from '@angular/core';
import { AjustesService } from '../service/ajustes.service';
declare function  custom();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private service: AjustesService) { }

  ngOnInit(): void {
    custom();
}
}
