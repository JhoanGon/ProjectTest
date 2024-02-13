import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrolleoPreguntaComponent } from './trolleo-pregunta.component';
import { TrolleoPreguntaRoutingModule } from './trolleo-pregunta-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TrolleoPreguntaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TrolleoPreguntaRoutingModule
  ],
  exports: [
    TrolleoPreguntaComponent
  ]
})
export class TrolleoPreguntaModule { }
