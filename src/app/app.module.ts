import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

// Servicios
import { ServiceModule } from './services/service.module';

// temporal
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './login/register.component';

@NgModule({
	declarations: [ AppComponent, LoginComponent, RegisterComponent ],
	imports: [ BrowserModule, ServiceModule, APP_ROUTES, PagesModule, FormsModule ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
