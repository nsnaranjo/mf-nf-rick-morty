import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, LoginFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
