import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
	selector: 'app-rxjs',
	templateUrl: './rxjs.component.html',
	styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
	subscription: Subscription;
	intervalo: any;
	constructor() {
		this.subscription = this.regresaObservable().subscribe(
			(num: any) => console.log('Subs', num),
			(err) => console.error('Err', err),
			() => console.log('Observable completado')
		);
	}

	ngOnInit() {}

	ngOnDestroy() {
		console.log('se va a cerrar');
		this.subscription.unsubscribe();
		clearInterval(this.intervalo);
	}

	regresaObservable(): Observable<any> {
		return new Observable((observer) => {
			let contador = 0;
			this.intervalo = setInterval(() => {
				contador += 1;
				const salida = {
					valor: contador
				};
				observer.next(salida);
			}, 500);
		})
			.retry(2)
			.map((resp: any) => resp.valor)
			.filter((valor: number, index) => valor % 2 === 1);
	}
}
