import { Component, OnInit } from '@angular/core';
import {DataUntilService} from "../service/data-until.service";

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: DataUntilService) { }

  ngOnInit(): void {
  }
  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
