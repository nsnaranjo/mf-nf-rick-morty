// Core
import { Routes } from '@angular/router';

// Guards
import { authGuard } from '../infraestructure/guards';

// Components
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [authGuard]
      }
    ]
  }
];
