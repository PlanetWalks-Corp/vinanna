import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl  } from '@angular/forms';
import {CustomValidators} from '../../custom.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder) { }

  formErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
    'confirmPassword': '',
    'userName': '',
    'passwordGroup': ''
  };
  
  validationMessages = {
    'firstName': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be greater than 2 characters.',
    },
    'lastName': {
      'required': 'Last Name is required.',
      'minlength': 'Last Name must be greater than 2 characters.',
    },
    'email': {
      'required': 'Email is required.',
    },
    'userName': {
      'required': 'Please Enter your Username.',
    },
    'password': {
      'required': 'password is required.',
    },
    'confirmPassword': {
      'required': 'confirmPassword is required.',
    },
    'passwordGroup': {
      'passwordMismatch': 'Password and Confirm Password do not match.'
    }
  };
  logValidationErrors(group: FormGroup = this.signUpForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid
        && (abstractControl.touched || abstractControl.dirty)) {
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }
  
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }
  
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['',[Validators.required, Validators.minLength(2)]],
      lastName: ['',[Validators.required, Validators.minLength(2)]],
      userName: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      passwordGroup: this.fb.group({ password: ['',[Validators.required]], confirmPassword: ['',[Validators.required]]}, {validator: CustomValidators.matchPasswords})
    });

    this.signUpForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.signUpForm);
    });
  }
  onSubmit(): void {
    console.log(this.signUpForm.value);
  }




}
