import { filter, map } from 'rxjs/operators';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styles: [
  ]
})
export class BreadComponent  implements OnDestroy {
public   titulo: string;
  public titulos: Subscription;
  constructor(private router: Router, private activated: ActivatedRoute) {
    this.titulos = this.getMostrar().subscribe(({titulo})  => {
      this.titulo = titulo;
      document.title = `Hospital ${titulo}`;
    });
   }
  ngOnDestroy(): void {
    this.titulos.unsubscribe();
  }
   // tslint:disable-next-line: typedef
   getMostrar(){
    return this.router.events.pipe(
    filter (event => event instanceof ActivationEnd),
    filter (( event: ActivationEnd) => event.snapshot.firstChild === null),
    // tslint:disable-next-line: variable-name
    map ( ( event: ActivationEnd) => event.snapshot.data), );
    }
}
