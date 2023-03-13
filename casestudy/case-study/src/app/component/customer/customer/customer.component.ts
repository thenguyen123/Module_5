import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer [] = [
    {
      id: 1,
      name: 'Nguyễn Văn Nga',
      birthday: '22-12-2001',
      idCard: '26535457',
      phone: '093743553',
      email : 'nguyen@gmail.com',
      gender : true
    },
    {
      id: 2,
      name: 'Nguyễn Ngọc Sơn',
      birthday: '01-02-1999',
      idCard: '444777722',
      phone: '06458724',
      email : 'son@gmail.com',
      gender : true

    },
    {
      id: 3,
      name: 'Nguyễn Thị Hồng',
      birthday: '03-05-1998',
      idCard: '26535457',
      phone: '02454577414',
    email : 'hong@gmail.com',
      gender : false
    },
    {
      id: 4,
      name: 'Nguyễn Văn Diệp',
      birthday: '22-12-1988',
      idCard: '03565555',
      phone: '078546545',
      email : 'dipe@gmail.com',
      gender : true
    },
    {
      id: 5,
      name: 'Nguyễn Hương ',
      birthday: '03-12-1998',
      idCard: '03242411414',
      phone: '09888777776',
      email : 'huong@gmail.com',
      gender : false
    },
    {
      id: 6,
      name: 'Nguyễn Văn Hoàng',
      birthday: '22-12-1987',
      idCard: '3252524',
      phone: '098765454',
      email : 'hoang@gmail.com',
      gender : true
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
