import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EucountriesComponent } from './eucountries.component';

const routes: Routes = [{ path: '', component: EucountriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EucountriesRoutingModule { }
