import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
//const routes: Routes = [];

//for lazy loading
const routes: Routes = [
  {
    path: 'eucountries',
    loadChildren: () => import('./eucountries/eucountries.module').then(m => m.EucountriesModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

