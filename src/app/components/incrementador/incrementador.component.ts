import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-incrementador',
	templateUrl: './incrementador.component.html',
	styles: []
})
export class IncrementadorComponent {
	@Input() leyenda: string = 'Leyenda';

	@Input() progreso: number = 50;

	@Output() cambioValor: EventEmitter<number> = new EventEmitter<number>();

	@ViewChild('txtProgress') txtProgress: ElementRef;

	constructor() {}

	onChanges(newValue: number) {
		if (newValue >= 100) {
			this.progreso = 100;
		} else if (newValue <= 0) {
			this.progreso = 0;
		} else {
			this.progreso = newValue;
		}

		this.txtProgress.nativeElement.value = this.progreso;
		this.cambioValor.emit(this.progreso);
	}

	cambiarValor(valor): void {
		valor = Number(this.progreso) + valor;
		if (0 <= valor && valor <= 100) {
			this.progreso = valor;
		}

		this.cambioValor.emit(this.progreso);
	}
}
