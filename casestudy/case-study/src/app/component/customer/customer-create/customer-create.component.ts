import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypes} from '../../../model/customer/customer.types';
import {CustomerService} from '../../../service/customer/customer.service';
import {CustomerTypesService} from '../../../service/customer/customer-types.service';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer: FormGroup;
  customerTypes: CustomerTypes[];
customerNew: Customer;
  constructor(private customerService: CustomerService, private customerTypesService: CustomerTypesService) {
  }

  ngOnInit(): void {
    this.findAllCustomerTypes();
    this.customer = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[^0-9]+$')]),
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
    this.customerNew = this.customer.value;
    this.customerService.save(this.customerNew).subscribe(() => {
      alert('Bạn đã thêm thành công');
      this.customer.reset();
    });
  }

  findAllCustomerTypes() {
    return this.customerTypesService.findAll().subscribe(param => {
      this.customerTypes = param;
    });
  }
}
