import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService} from '../../service/usuario.service';
import Swal from 'sweetalert'
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css'],
})
export class LoginComponent  implements OnInit  {
   public loginForm: FormGroup;
   public auth2: any;
  constructor(private router: Router, private fb: FormBuilder, private usuario: UsuarioService) {
   this.loginForm = this.crearMyForm();
   }
  ngOnInit(): void {


  }
  public crearMyForm(){
    return    this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['',[ Validators.required, Validators.email]],
      password:[localStorage.getItem('email') || '', [Validators.required, Validators.minLength(8)]],
      password2:['',[Validators.required, Validators.minLength(8)]],
      recordarme: [false, [Validators.required]]
      });
  }
login(){
  this.usuario.login(this.loginForm.value).subscribe( resp => {
    console.log(resp);
    Swal("Usuario creado correctamente", "bien", "success")
    if(this.loginForm.get('recuerdame').value){
      localStorage.setItem('email', this.loginForm.get('email').value)
    }else{
      localStorage.removeItem('email');
    }
    this.router.navigateByUrl('/');
  }, err => {
    swal.fire('Error', err.error.msg, 'error');
  });

}
//

renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
  });
}
startApp()  {
  gapi.load('auth2', () => {
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    this.auth2 = gapi.auth2.init({
      client_id: '784797177132-svq53dvino2343otb2b8l866eghg4dml.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      // Request scopes in addition to 'profile' and 'email'
      //scope: 'additional_scope'
    });
    this.attachSignin(document.getElementById('g-signin2'));
  });

}
attachSignin(element) {
  console.log(element.id);
  this.auth2.attachClickHandler(element, {},
     (googleUser) => {
      const id_token = googleUser.getAuthResponse().id_token;
    this.usuario.loginGoogle(id_token).subscribe(res => {
      this.router.navigateByUrl('/');
    })

      }, (error)  => {
        alert(JSON.stringify(error, undefined, 2));
      });
}
}
