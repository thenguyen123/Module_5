import {Component, OnInit} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentDetail: Student = undefined;
  students: Student[] = [{
    id: 1,
    name: 'NGuyen Van A',
    sroce: 7,
    vote: 0
  },
    {
      id: 2,
      name: 'Nguyen VAn b',
      sroce: 10,
      vote: 10
    }]

  constructor() {
  }

  ngOnInit(): void {
  }

  change(st: Student) {
    this.studentDetail = st;
    console.log(st)
  }

  createStudent(student: Student) {
    this.students.push({...student, vote: 0})
  }
}
