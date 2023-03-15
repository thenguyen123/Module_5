import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ProductRoutingModule} from '../product/product/product-routing.module';



@NgModule({
  declarations: [NavBarComponent],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class SharedRoutingModule { }
