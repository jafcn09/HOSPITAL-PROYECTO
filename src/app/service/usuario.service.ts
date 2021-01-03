import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { RegisterForm } from '../auth/interface/register-form.interface';
import { LoginForm } from '../auth/interface/login-form.interface';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.models';
const base_url = environment.base_url;
declare const gapi: any;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

   public auth2: any;
   public usuario:Usuario;

  constructor(private http: HttpClient, private router: Router , private ngZone: NgZone) {
    this.googleInit();
  }
  googleInit(){
    return new Promise(resolve => {
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '784797177132-svq53dvino2343otb2b8l866eghg4dml.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',

        });

      });
    })

  }
  logout(){
    localStorage.removeItem('token');

    this.auth2.signOut().then( ()  => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      })

    });
  }
validar():Observable<boolean>{
  const token= localStorage.getItem('token') || '';
  return this.http.get(`${base_url}/login/renew`, {
    headers: {
      'x-token': token
    }
  }).pipe(
    tap( (resp: any) => {
      console.log(resp);
      const{ email, google, nombre, role,img, uid } = resp.usuario;
   this.usuario = new Usuario(nombre, email,  img, google, role, uid);
      localStorage.setItem('token', resp.token);
    }),
    map(resp => true),
    catchError(error => of(false))
  );
}

  crearUsuario(formData: RegisterForm){
return this.http.post(`${base_url}/usuarios`, formData).pipe( tap((resp:any)=> {
  localStorage.setItem('token', resp.token);
}))
  }
  login(formData: LoginForm){
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    )
      }
      loginGoogle(token){
        return this.http.post(`${base_url}/login/google`, token).pipe(
          tap((resp: any) => {
            localStorage.setItem('token', resp.token);
          })
        )
          }
}
