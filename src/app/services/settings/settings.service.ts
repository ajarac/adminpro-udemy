import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

interface Ajustes {
	temaUrl: string;
	tema: string;
}

@Injectable()
export class SettingsService {
	ajustes: Ajustes = {
		temaUrl: 'assets/css/colors/default.css',
		tema: 'default'
	};

	constructor(@Inject(DOCUMENT) private _document) {
		this.cargarAjustes();
	}

	guardarAjustes() {
		localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
	}

	cargarAjustes() {
		const ajustes: string = localStorage.getItem('ajustes');
		if (ajustes) {
			this.ajustes = JSON.parse(ajustes);
		}
    this.aplicarTema(this.ajustes.tema);
	}

	aplicarTema(tema: string) {
		const url: string = `assets/css/colors/${tema}.css`;
		this._document.getElementById('tema').setAttribute('href', url);

		this.ajustes.tema = tema;
		this.ajustes.temaUrl = url;
		this.guardarAjustes();
	}
}
