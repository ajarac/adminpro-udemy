import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-promesas',
	templateUrl: './promesas.component.html',
	styles: []
})
export class PromesasComponent implements OnInit {
	constructor() {
		this.contarTres().then((data) => console.log(`Terminado ${data}`)).catch((err) => console.log('Err', err));
	}

	ngOnInit() {}

	contarTres(): Promise<any> {
		return new Promise((resolve, reject) => {
			let contador = 0;
			const intervalo = setInterval(() => {
				contador += 1;
				console.log(contador);
				if (contador === 3) {
					resolve('OK');
					clearInterval(intervalo);
				}
			}, 1000);
		});
	}
}
