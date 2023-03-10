import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.register = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
      country: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required,this.checkAge]),
      gender: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required,Validators.pattern('^\\+84\\d{9,10}$')])

    })


    }
  checkAge(control:AbstractControl) {
    const age=control.value;
    if(age<18){
      return {invalidAge :true };
    }
    return null;
  }

  add() {
    debugger
    console.log(this.register.value)
  }
}


