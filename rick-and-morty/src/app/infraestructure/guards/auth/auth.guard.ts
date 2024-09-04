// Core
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

// NgRx
import { Store } from '@ngrx/store';

// Rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Reducer
import { AuthState } from '../../../application/state';

export const authGuard: CanActivateFn = (): Observable<boolean> => {
  const store = inject(Store) as Store<{ auth: AuthState }>;

  const router = inject(Router);

  return store.select((state) => state.auth.user).pipe(
    map((user) => {
      if (user) { 
        return true 
      } else {
        router.navigate(['/']);
          
        return false;
      }
    })
  );
};
