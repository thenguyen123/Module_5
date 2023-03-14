import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contract} from '../../../model/contract/contract';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {
 contractForm: FormGroup;
contract: Contract;
  constructor() { }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      startDate: new FormControl(this.contract.startDate, [Validators.required]),
      endDate: new FormControl(this.contract.endDate, [Validators.required]),
      deposit: new FormControl(this.contract.deposit, [Validators.required, Validators.min(0)]),
      customerTypes: new FormControl(this.contract.customerTypes.name, [Validators.required]),
      facility: new FormControl(this.contract.facility.name, [Validators.required]),
    });
  }

  edit() {

  }
}
