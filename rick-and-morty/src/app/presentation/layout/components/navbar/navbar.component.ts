// Core
import { Component } from '@angular/core';

// NgRx
import { Store } from '@ngrx/store';

// Actions
import { logout } from '../../../../application/state';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private store: Store) {}

  onLogout() {
    this.store.dispatch(logout());
  }
}
