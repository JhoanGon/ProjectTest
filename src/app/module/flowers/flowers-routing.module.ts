import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowersComponent } from './flowers.component';

const routes: Routes = [
  { path: '', component: FlowersComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowersRoutingModule { }
