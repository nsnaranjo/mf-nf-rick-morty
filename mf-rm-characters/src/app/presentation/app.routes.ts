import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CharactersTableComponent } from './shared/components/characters-table/characters-table.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CharactersTableComponent
      }
    ]
  }
];
