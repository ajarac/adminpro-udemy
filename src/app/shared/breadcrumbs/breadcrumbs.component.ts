import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styles: []
})
export class BreadcrumbsComponent implements OnInit {
	label: string = '';

	constructor(private router: Router, public title: Title, public meta: Meta) {
		this.getDataRoute().subscribe((data) => {
			this.label = data.titulo;
			this.title.setTitle(this.label);
			const metaTag: MetaDefinition = {
				name: 'description',
				content: this.label
			};
			this.meta.updateTag(metaTag);
		});
	}

	getDataRoute(): Observable<any> {
		return this.router.events
			.filter((event) => event instanceof ActivationEnd)
			.filter((event: ActivationEnd) => event.snapshot.firstChild === null)
			.map((event: ActivationEnd) => event.snapshot.data);
	}

	ngOnInit() {}
}
