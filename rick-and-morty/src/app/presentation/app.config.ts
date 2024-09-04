import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { notificationReducer } from '../application/state/notifications/notification.reducer';
import { authReducer, AuthEffects } from '../application/state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore({ 
      notifications: notificationReducer,
      auth: authReducer 
    }),
    provideEffects([AuthEffects])
  ]
};
