import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgRoutingModule } from './img-routing.module';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ImgSlideComponent } from './img-slide/img-slide.component';


@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],
  exports: [
    ImgSliderComponent,
    ImgSlideComponent
  ],
  imports: [
    CommonModule,
    ImgRoutingModule
  ]
})
export class ImgModule { }
