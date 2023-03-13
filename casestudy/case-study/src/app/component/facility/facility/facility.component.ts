import {Component, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facility: Facility[] = [
    {
      img: '../../../assets/img/kien-truc-furama-resort-da-nang-1024x680.jpg',
      name: 'room',
      cost: 100000,
      area: 100,
      maxPeople: 3
    },
    {
      img: '../../../assets/img/kien-truc-furama-resort-da-nang-1024x680.jpg',
      name: 'Villa',
      cost: 1000020,
      area: 100,
      maxPeople: 3
    },
    {
      img: '../../../assets/img/kien-truc-furama-resort-da-nang-1024x680.jpg',
      name: 'Villa',
      cost: 1000020,
      area: 100,
      maxPeople: 3
    }
  ]

  ;

  constructor() {
  }

  ngOnInit(): void {
  }

}
