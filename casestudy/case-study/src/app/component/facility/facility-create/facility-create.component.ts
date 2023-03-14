import {Component, OnInit} from '@angular/core';
import {RentTypes} from '../../../model/facility/rent-types';
import {FacilityTypes} from '../../../model/facility/facility-types';
import {Facility} from '../../../model/facility/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required, Validators.min(0)]),
      area: new FormControl('', [Validators.required, Validators.min(0) ]),
      maxPeople: new FormControl('', [Validators.required, Validators.min(0)]),
      standRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.min(0)]),
      numberOfFloors: new FormControl('', [Validators.min(0)]),
      facilityText: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      facilityType: new FormControl('', [Validators.required]),

    });
  }

  save() {}

}
