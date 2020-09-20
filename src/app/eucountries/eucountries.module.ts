import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EucountriesRoutingModule } from './eucountries-routing.module';
import { EucountriesComponent } from './eucountries.component';


@NgModule({
  declarations: [EucountriesComponent],
  imports: [
    CommonModule,
    EucountriesRoutingModule
  ]
})
export class EucountriesModule { }
