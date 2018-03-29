import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
	imports: [ RouterModule, CommonModule ],
	declarations: [ BreadcrumbsComponent, HeaderComponent, NopagefoundComponent, SidebarComponent ],
	exports: [ BreadcrumbsComponent, HeaderComponent, NopagefoundComponent, SidebarComponent ]
})
export class SharedModule {}
