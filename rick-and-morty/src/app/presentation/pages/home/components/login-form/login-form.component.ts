import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { LoginUseCase } from '../../../../../application/use-cases';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginUseCase: LoginUseCase
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login() {
    console.log(this.loginForm.value);
    
    if (this.loginForm.valid) {
      this.loginUseCase.execute(this.loginForm.value)

      this.router.navigate(['/dashboard']);
    }
  }
}
 