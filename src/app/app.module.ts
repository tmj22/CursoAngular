import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ListadoCochesComponent } from './listado-coches/listado-coches.component';
import { RatingComponent } from 'app/rating-star.component';
import { filtradoCoches } from 'app/filtrado-coches.pipe';
import { QuienesSomos } from 'app/quienes_somos.component';
import { Detalle } from 'app/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoCochesComponent,
    filtradoCoches,
    RatingComponent,
    QuienesSomos,
    Detalle
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'listado', component: ListadoCochesComponent },
      { path: 'listado/:id', component: Detalle },
      { path: 'quienessomos', component: QuienesSomos },
      { path: '', redirectTo: 'listado', pathMatch: 'full' },
      { path: '**', component: ListadoCochesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
