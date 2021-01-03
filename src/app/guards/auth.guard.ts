import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../service/usuario.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private usuario: UsuarioService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
     return this.usuario.validar().pipe(
       tap(validando => {
         if(!validando){
           this.router.navigateByUrl('/login');
         }
       })
     )

  }

}
