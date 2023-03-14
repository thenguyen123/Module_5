import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypes} from '../../../model/customer/customer.types';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.customer = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^([\\p{L}\\s])+$')]),
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{11}$')]),
      // tslint:disable-next-line:max-line-length
      phone: new FormControl('', [Validators.required, Validators.pattern('^(090\\d{7}|091\\d{7}|\\(84\\)\\+91\\d{7}|\\(84\\)\\+90\\d{7})$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      delete: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required]),
    });
  }


  customerSave() {

  }
}
