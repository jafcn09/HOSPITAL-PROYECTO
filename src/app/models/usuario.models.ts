import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class Usuario  {
  constructor(
  public nombre: string,
  public email: string,
  public img?: String,
  public google?: boolean,
  public role?: string,
  public uid?: string

  ){}
}
