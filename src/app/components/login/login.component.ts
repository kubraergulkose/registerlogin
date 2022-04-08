import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; //giriş formu
  submitted = false; //submit tusuna basılması
  isPasswordVisible = false;
  public isLoginSuccess = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  get f() { return this.loginForm.controls; }

  onSubmitLogin() { //Login fonksiyonu

    this.submitted = true; //subnit değerini true yap.
    if (this.loginForm.invalid) {
      return;
    }

    if (this.submitted) {
      alert('You login successfully');
    }

  }

  changePasswordVisible() {
   this.isPasswordVisible=!this.isPasswordVisible;

  }
  ngOnInit(): void {
    //Form validasyonları login form için eklendi.
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}
