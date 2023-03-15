import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from "../student";
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Output() onCreate = new EventEmitter<Student>()
  studentCreate: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.studentCreate = new FormGroup(
      {
        name :new FormControl('',[Validators.required,Validators.pattern('^[^0-9]+$')]),
        myGroup: new FormGroup({
          sroce :new FormControl(),
          id : new FormControl()
        },[this.check])

      }
    )
  }
  check(control: AbstractControl){
    const myGroup= control.value
    debugger
    if(myGroup.id<0 ){
      return {invalidId : true}
    }if(myGroup.sroce<0){
      return {invalidScore : true}
    }

    return null;
  }

  // create(value: string, value2: number, value3: number) {
  //   this.studentCreate = {
  //     name: value,
  //     id : value2,
  //     sroce : value3,
  //   }
  //   this.onCreate.emit(this.studentCreate);
  // }
  create() {
    console.log(this.studentCreate)
  }
}
