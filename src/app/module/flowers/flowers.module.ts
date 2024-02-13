import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersComponent } from './flowers.component';
import { FlowersRoutingModule } from './flowers-routing.module';



@NgModule({
  declarations: [
    FlowersComponent
  ],
  imports: [
    CommonModule,
    FlowersRoutingModule
  ],
  exports: [
    FlowersComponent
  ]
})
export class FlowersModule { }
