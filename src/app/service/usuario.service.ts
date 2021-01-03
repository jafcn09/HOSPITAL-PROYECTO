import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../auth/interface/register-form.interface';
import { LoginForm } from '../auth/interface/login-form.interface';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  logout(){
    localStorage.removeItem('token');
  }
validar():Observable<boolean>{
  const token= localStorage.getItem('token') || '';
  return this.http.get(`${base_url}/login/renew`, {
    headers: {
      'x-token': token
    }
  }).pipe(
    tap( (resp: any) => {
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
