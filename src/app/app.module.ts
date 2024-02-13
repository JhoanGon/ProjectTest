import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowersModule } from './module/flowers/flowers.module';
import { CartaModule } from './module/carta/carta.module';
import { TrolleoPreguntaRoutingModule } from './module/trolleo-pregunta/trolleo-pregunta-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlowersModule,
    CartaModule,
    TrolleoPreguntaRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
