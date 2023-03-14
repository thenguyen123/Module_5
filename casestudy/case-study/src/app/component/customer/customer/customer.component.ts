import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../../service/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer [] ;


  constructor(private  customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.findAll();
  }
 findAll() {
    return this.customerService.findAll().subscribe(param =>{
      this.customers = param;
    });
}

}
