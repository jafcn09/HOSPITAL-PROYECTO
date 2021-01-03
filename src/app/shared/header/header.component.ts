import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { UsuarioService } from '../../service/usuario.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location, private usuario: UsuarioService) {
  }


  ngOnInit(): void {
  }

}
