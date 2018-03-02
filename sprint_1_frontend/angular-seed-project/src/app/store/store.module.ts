import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreC1Component } from './store-c1/store-c1.component';
import { StoreC2Component } from './store-c2/store-c2.component';
import { StoreC3Component } from './store-c3/store-c3.component';
import { StoreC4Component } from './store-c4/store-c4.component';
import { StoreC5Component } from './store-c5/store-c5.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StoreC1Component, StoreC2Component, StoreC3Component, StoreC4Component, StoreC5Component]
})
export class StoreModule { }
