import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../../service/customer/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer [];
  name: string;
  id: number;
  page = 0;

  constructor(private  customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    return this.customerService.findAll().subscribe(param => {
      this.customers = param;
    });
  }

  delete(id: number, name: string) {
    this.name = name;
    this.id = id;

  }

  deleteNow() {
    this.customerService.delete(this.id).subscribe(() => {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      });
      this.ngOnInit();
    });
  }

  search(value: string) {
    if (value !== '') {
      this.customerService.search( value ).subscribe(param => {
        this.customers = param;
      });
    }
    this.findAll();
  }
}
