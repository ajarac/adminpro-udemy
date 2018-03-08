import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
	{
		path: '',
		component: PagesComponent,
		children: [
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'progress', component: ProgressComponent },
			{ path: 'graficas1', component: ProgressComponent },
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }
		]
	}
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
