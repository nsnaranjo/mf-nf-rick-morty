// Core
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// NgRx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Rxjs
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

// Actions
import { loginFailure, loginSuccess, login, logout } from '..';

// Services
import { AuthService, NotificationService } from '../../../infraestructure/services';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),

      switchMap((action) =>
        this.authService.login(action.loginDTO).pipe(
          map((user) => {
            return loginSuccess({ user });
          }),

          catchError((error) => {
            this.notificationService.createNotification(
              'error',
              'Login failed: ' + error.message
            );

            return of(loginFailure({ error: error.message }));
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),

      tap(() => {
        this.router.navigate(['/']);
      })
    ),

    { dispatch: false }
  );
}
