import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, SidebarComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
