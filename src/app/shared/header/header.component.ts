import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { UsuarioService } from '../../service/usuario.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent  {
 public imgUrl = '';
  constructor( private service: UsuarioService) {
this.imgUrl = this.service.usuario.imagenUrl
  }
logout(){
  this.service.logout();
}


}
