import { Component, OnInit } from '@angular/core';
import { AjustesService } from '../../service/ajustes.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {
  linkTheme =  document.querySelector('#theme');

  constructor(private service: AjustesService) { }

  ngOnInit(): void {

    this.service.checkCurrentTheme();
  }
  // tslint:disable-next-line: typedef
  changeTheme( theme: string) {
    this.service.changeTheme(theme);
  }
  // tslint:disable-next-line: typede

}
