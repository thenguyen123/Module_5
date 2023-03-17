import {Component, OnInit} from '@angular/core';
import {Car} from '../model/car';
import {CarService} from '../service/car.service';
import Swag from 'sweetalert2';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[];
  page: number;
  id: string;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.carService.getAll().subscribe(param => {
      this.cars = param.content;
    });
  }

  delete(id) {
    this.id = id;
  }

  deleteNow() {
    this.carService.delete(this.id).subscribe(() => {
      Swag.fire({
        title: 'xóa thành công',
        icon: 'success'
      });
      this.ngOnInit();
    });
  }
}
