import { Component, OnInit } from '@angular/core';
import {AddressService} from '../service/address.service';
import {CartypeService} from '../service/cartype.service';
import {Address} from '../model/address';
import {Cartype} from '../model/cartype';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../service/car.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
address: Address[];
cartype: Cartype[];
  carForm: FormGroup;
  constructor(private addressService: AddressService, private cartypeService: CartypeService, private carService: CarService) { }

  ngOnInit(): void {
    this.getAllAddress();
    this.getAllCarType();
    this.carForm = new FormGroup({
      id: new FormControl(),
      carType: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      departure: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      toHour: new FormControl('', [Validators.required]),
      formHour: new FormControl('', [Validators.required]),
    });
  }
  getAllAddress() {
    this.addressService.getAllAddress().subscribe(param => {
      this.address = param;
    });
  }
  getAllCarType() {
    this.cartypeService.getAll().subscribe(param => {
      this.cartype = param;
    });
  }

  save() {
    this.carService.save(this.carForm.value).subscribe(param => {
     alert('thành công');
    });
  }
}
