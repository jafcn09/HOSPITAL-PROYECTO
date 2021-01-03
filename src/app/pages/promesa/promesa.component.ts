import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: [
  ]
})
export class PromesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario().then( usuarios => {
      console.log(usuarios);
    });
    /*const promesa = new Promise((resolve) =>  {

    });
    console.log('fin');*/

  }
  // tslint:disable-next-line: typedef
  getUsuario() {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise (resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json()).then(body => resolve (body.data));
    });

  }
}

