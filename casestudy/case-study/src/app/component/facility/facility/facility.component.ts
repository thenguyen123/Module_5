import {Component, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility/facility';
import {FacilityService} from '../../../service/facility/facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facility?: Facility[];
  id?: number;
  name?: string;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(param => {
      this.facility = param;
    });
  }

  delete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  action() {
    this.facilityService.delete(this.id).subscribe(() => {
      alert('thành công');
      this.ngOnInit();
    });
  }
}
