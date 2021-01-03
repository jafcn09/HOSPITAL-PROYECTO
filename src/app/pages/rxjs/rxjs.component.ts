import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import {filter, map, retry, take} from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent  implements OnDestroy {

  public subs: Subscription;
  constructor()  {
   /*this.retornar().pipe(
     retry(1)
   ).subscribe(
     dato => console.log('mostrar:', dato),
     err => console.warn('error:', err),
    // tslint:disable-next-line: no-console
    () => console.info('se ha terminado')
   );
   */
  this.subs = this.retormando().subscribe(console.log);
  }
  ngOnDestroy(): void {
   this.subs.unsubscribe();
  }
// tslint:disable-next-line: typedef
retormando(): Observable<number>{
return  interval(2000).pipe(
    map(   dato => dato + 3 ),
    filter(dato => true),
    take(8)
  );
}

retornar(): Observable<number> {
  let i = -3;
  return new Observable <number> (observer => {
    const intervalo = setInterval (() => {
      i++;
      observer.next(i);
      if ( i === 3) {
 clearInterval(intervalo);
 observer.complete();
      }
      if ( i  === 4) {
        i = 0;
        observer.error('llego al tope de 2');
      }
    }, 1000);
  });
}
  }

