import { Component, Input } from '@angular/core';

export interface DataGrafico {
	data: number[];
	labels: string[];
	type: string;
	leyenda: string;
}

@Component({
	selector: 'app-grafico-dona',
	templateUrl: './grafico-dona.component.html',
	styles: []
})
export class GraficoDonaComponent {
	@Input() data: DataGrafico;
}
