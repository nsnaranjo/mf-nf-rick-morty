import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { notificationReducer } from '../application/state/notifications/notification.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({ notifications: notificationReducer }),]
};
