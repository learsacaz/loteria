import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalotaComponent } from './balota/balota.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { ParImparComponent } from './par-impar/par-impar.component';

@NgModule({
  declarations: [
    AppComponent,
    BalotaComponent,
    ContenedorComponent,
    ParImparComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
