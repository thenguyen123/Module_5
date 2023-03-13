import {Component, OnInit} from '@angular/core';
import {Contract} from '../../../model/contract/contract';
import {Customer} from '../../../model/customer/customer';
import {Facility} from '../../../model/facility/facility';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contract: Contract[] = [
    {
      id: 1,
      startDate: '12/12/2023',
      endDate: '13/12/2023',
      deposit: 15000,
      customerTypes: {
        id: 1,
        name: 'nguyên Va a'
      },
      facility: {
        id : 1,
        name : 'room'
      },
      delete: false
    },
    {
      id: 2,
      startDate: '12/12/2023',
      endDate: '13/12/2023',
      deposit: 15000,
      customerTypes: {
        id: 2,
        name: 'nguyên NGoc '
      },
      facility: {
        id : 2,
        name : 'room'
      },
      delete: false
    },
    {
      id: 3,
      startDate: '12/12/2023',
      endDate: '13/12/2023',
      deposit: 15000,
      customerTypes: {
        id: 3,
        name: 'Nguyễn Sơn'
      },
      facility: {
        id : 3,
        name : 'room'
      },
      delete: false
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
