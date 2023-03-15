import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../model/customer/customer';
import {CustomerTypesService} from '../../../service/customer/customer-types.service';
import {CustomerType} from '../../../model/customer/customerType';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer;
  customerTypes: CustomerType[];
  id: number;

  constructor(private customerTypesService: CustomerTypesService,
              private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = +param.get('id');
    });
    this.customerService.findById(this.id).subscribe(param => {
      this.findAllCustomerTypes() ;
      this.customer = param;
      this.customerForm = new FormGroup({
        name: new FormControl(this.customer.name, [Validators.required, Validators.pattern('^([\\p{L}\\s])+$')]),
        birthday: new FormControl(this.customer.birthday, [Validators.required]),
        gender: new FormControl(this.customer.gender, [Validators.required]),
        idCard: new FormControl(this.customer.idCard, [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{11}$')]),
        // tslint:disable-next-line:max-line-length
        phone: new FormControl(this.customer.phone, [Validators.required, Validators.pattern('^(090\\d{7}|091\\d{7}|\\(84\\)\\+91\\d{7}|\\(84\\)\\+90\\d{7})$')]),
        email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
        address: new FormControl(this.customer.address, [Validators.required]),
        customerType: new FormControl(this.customerTypes),
      });

    });
  }

  customerSave() {
    return this.customerService.update(this.customerForm.value, this.id).subscribe(() => {
      alert('thành Công');
    });
  }

  findAllCustomerTypes() {
    return this.customerTypesService.findAll().subscribe(param => {
      this.customerTypes = param;
    });
  }
}
