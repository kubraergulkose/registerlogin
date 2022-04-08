import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {


  registerForm: FormGroup; //kayıt formu
  isAcceptClick : boolean = false;
  registered = false; //register tusuna basılması
  isRegisterSuccess = false;

  constructor(private formBuilder: FormBuilder) { }

  get f_register() { return this.registerForm.controls; }

  onSubmitRegister() { //Kayıt olunmuş mu?
    if (this.registerForm.invalid) {
      return;
    }
  }
  controlPasswordMatch() {
    if (this.registerForm.value.password != this.registerForm.value.password2) //password iki kere aynı girilmediyse;
    {
      this.registerForm.controls['password2'].setErrors({ mustMatch: true });
    }
  }

  acceptClickEvent() {
    this.isAcceptClick = !this.isAcceptClick;
    return this.isAcceptClick;

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(24), Validators.pattern('[a-zA-Z0-9]*')]],
      lastname: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(24), Validators.pattern('[a-zA-Z0-9]*')]],
      tel: ['', [Validators.required,Validators.minLength(11), Validators.pattern('[0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      password2: ['', [Validators.required]],


    }
    );
  }
}
