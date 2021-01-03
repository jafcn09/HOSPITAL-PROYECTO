import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { environment } from '../../environments/environment';
const base_url = environment.base_url;
export class Usuario  {
  constructor(
  public nombre: string,
  public email: string,
  public img?: String,
  public google?: boolean,
  public role?: string,
  public uid?: string

  ){}
get imagenUrl(){
  if(this.img) {

  return `${base_url}/subir/usuarios/${this.img}`
  console.log('devolver');
}else{
  return `${base_url}/subir/usuarios/no-img`;
}
}
}
