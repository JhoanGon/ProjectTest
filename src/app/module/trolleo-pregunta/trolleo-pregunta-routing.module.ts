import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrolleoPreguntaComponent } from './trolleo-pregunta.component';

const routes: Routes = [
  { path: '', component: TrolleoPreguntaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrolleoPreguntaRoutingModule { }
