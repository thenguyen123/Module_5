import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../model/customer/customer';
import {Facility} from '../../../model/facility/facility';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.min(0)]),
      customerTypes: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required]),
    });
  }

  save() {

  }
}
