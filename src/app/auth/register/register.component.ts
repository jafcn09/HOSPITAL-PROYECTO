import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css'
  ],
})
export class RegisterComponent  {
 public myForm:FormGroup;
  public formSubmitted = false;

  constructor(private fb: FormBuilder, private usuario: UsuarioService, private router: Router) {

    this.myForm = this.crearMyForm();
  }

  public crearMyForm(){
    return    this.fb.group({
      nombre: ['Jafet', [Validators.required]],
      email: ['jafetcanepamaceda05@gmail.com',[ Validators.required, Validators.email]],
      password:['12345678', [Validators.required, Validators.minLength(8)]],
      password2:['12345678',[Validators.required, Validators.minLength(8)]],
      termino: [true, [Validators.required]]
      }, {
        validators: this.passwordsIguales('password', 'password2')
      });
  }

  crearUsuario() {
    this.formSubmitted = true;
    console.log(this.myForm.value);
    if ( this.myForm.invalid ) {
      return;
    }

    // Realizar el posteo
    this.usuario.crearUsuario(this.myForm.value).subscribe( resp => {
     this.router.navigateByUrl('/');
    }, err => {
      Swal.fire('Error', err.error.msg, 'error');
    });


  }
Novalido( campo: string ): boolean {

  if ( this.myForm.get(campo).invalid && this.formSubmitted ) {
    return true;
  } else {
    return false;
  }

}
contrasenasNoValidas() {
  const pass1 = this.myForm.get('password').value;
  const pass2 = this.myForm.get('password2').value;

  if ( (pass1 !== pass2) && this.formSubmitted ) {
    return true;
  } else {
    return false;
  }

}

aceptar() {
 this.myForm.get('terminos').value && this.formSubmitted;
}
passwordsIguales(pass1Name: string, pass2Name: string ) {

  return ( formGroup: FormGroup ) => {

    const pass1Control = formGroup.get(pass1Name);
    const pass2Control = formGroup.get(pass2Name);

    if ( pass1Control.value === pass2Control.value ) {
      pass2Control.setErrors(null)
    } else {
      pass2Control.setErrors({ noEsIgual: true })
    }


  }
}
}


