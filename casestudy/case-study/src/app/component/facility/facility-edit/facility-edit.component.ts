import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Facility} from '../../../model/facility/facility';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm: FormGroup;
  facility: Facility;

  constructor() {
  }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      name: new FormControl(this.facility.name, [Validators.required]),
      cost: new FormControl(this.facility.cost, [Validators.required, Validators.min(0)]),
      area: new FormControl(this.facility.area, [Validators.required, Validators.min(0)]),
      maxPeople: new FormControl(this.facility.maxPeople, [Validators.required, Validators.min(0)]),
      standRoom: new FormControl(this.facility.standRoom, [Validators.required]),
      descriptionOtherConvenience: new FormControl(this.facility.descriptionOtherConvenience, [Validators.required]),
      poolArea: new FormControl(this.facility.poolArea, [Validators.min(0)]),
      numberOfFloors: new FormControl(this.facility.numberOfFloors, [Validators.min(0)]),
      facilityFree: new FormControl(this.facility.facilityFree, [Validators.required]),
      rentType: new FormControl(this.facility.rentType.name, [Validators.required]),
      facilityType: new FormControl(this.facility.facilityType.name, [Validators.required]),
    });
  }

  edit() {

  }
}
