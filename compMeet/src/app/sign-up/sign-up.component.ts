import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  fullName: String ="";
  email: String ="";
  gender: String ="";
  password: String="";
  confirmPassword: String="";
  constructor() { }

  ngOnInit(): void {
  }
  saveDetail(signupForm : NgForm): void
  {
    console.log(signupForm.value);
  }


}
