import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required]]
    });
  }
  tryLogin(value) {
    this.authService.doLogin(value)
      .then(res => {
        this.router.navigate(['/course-list']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }
}

