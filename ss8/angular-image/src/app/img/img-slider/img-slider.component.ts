import {Component, OnInit} from '@angular/core';
import {ImgService} from '../service/img.service';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  imgList: string [];
  temp = 0;
  slide: string;

  constructor(private imgService: ImgService) {
  }

  ngOnInit(): void {
    this.imgList = this.imgService.listImg;
  }

  next() {
    this.temp++;
    if (this.temp > this.imgList.length-1) {
      this.temp = 0;
    }
    this.slide = this.imgList[this.temp];

  }

  previos() {
    this.temp--;
    if (this.temp < 0) {
      this.temp = this.imgList.length - 1;
    }
    this.slide = this.imgList[this.temp];

  }
}
