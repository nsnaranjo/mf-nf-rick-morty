import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/dashboard']);
  }

}
