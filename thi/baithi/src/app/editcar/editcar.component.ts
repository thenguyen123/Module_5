import {Component, OnInit} from '@angular/core';
import {CarService} from '../service/car.service';
import {AddressService} from '../service/address.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Address} from '../model/address';
import {Car} from '../model/car';

@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.css']
})
export class EditcarComponent implements OnInit {
  carForm: FormGroup;
  id: string;
  address: Address [];
  car: Car;

  constructor(private carService: CarService,
              private addressService: AddressService,
              private activatedRoute: ActivatedRoute,
              private rout: Router) {
  }

  ngOnInit(): void {
    this.getAllAddress();
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.carService.findById(this.id).subscribe(item => {
        // console.log(this.car);
        // console.log(this.car[0].id);
        // this.carService.findById(this.id);
        this.carForm = new FormGroup({
          id: new FormControl(item.id),
          typeCar: new FormControl(item.carType, [Validators.required]),
          name: new FormControl(item.name, [Validators.required]),
          departure: new FormControl('', [Validators.required]),
          destination: new FormControl('', [Validators.required]),
          phoneNumber: new FormControl(item.phoneNumber, [Validators.required]),
          email: new FormControl(item.email, [Validators.required]),
          toHour: new FormControl(item.toHour, [Validators.required]),
          formHour: new FormControl(item.formHour, [Validators.required]),
        });
      });
    });
  }


  getAllAddress() {
    this.addressService.getAllAddress().subscribe(param => {
      this.address = param;
    });
  }

  edit() {
    this.carService.edit(this.id, this.carForm.value).subscribe(() => {
      alert('thành công');
      this.rout.navigateByUrl('/car');
    });
  }
}
