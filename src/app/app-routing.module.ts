import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'flowers', loadChildren: () => import ('../app/module/flowers/flowers.module').then(m => m.FlowersModule)},
  // { path: 'carta', loadChildren: () => import ('../app/module/carta/carta.module').then(m => m.CartaModule)},
  { path: 'Pregunta_Final', loadChildren: () => import ('../app/module/trolleo-pregunta/trolleo-pregunta.module').then(m => m.TrolleoPreguntaModule)},
  { path: '**', redirectTo: 'Pregunta_Final', pathMatch: 'full' },
  { path: '', redirectTo: 'Pregunta_Final', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
