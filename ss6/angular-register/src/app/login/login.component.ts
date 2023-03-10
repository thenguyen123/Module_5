import { Component, OnInit } from '@angular/core';
import {Login} from "../login";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.login=new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    })
  }

  loginUser() {
    debugger
    console.log(this.login.value)
  }
}
