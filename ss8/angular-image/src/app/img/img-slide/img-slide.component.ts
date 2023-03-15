import {Component, Input, OnInit} from '@angular/core';
import {ImgService} from '../service/img.service';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.css']
})
export class ImgSlideComponent implements OnInit {

 @Input() slide: string;

  constructor(private imgService: ImgService) {
  }

  ngOnInit(): void {
  this.showSlide();
  }

  showSlide() {
    this.slide = this.imgService.listImg[0];
  }
}
