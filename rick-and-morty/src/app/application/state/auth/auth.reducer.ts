// NgRx
import { createReducer, on } from '@ngrx/store';

// Actions
import { loginFailure, loginSuccess, logout } from '..';

// Models
import { UserModel } from '../../../domain/models';

export interface AuthState {
  user: UserModel | null;
  error: string | null;
}

export const initialStateAuth: AuthState = {
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialStateAuth,
  on(loginSuccess, (state, { user }) => {
    return { ...state, user, error: null };
  }),

  on(loginFailure, (state, { error }) => {
    return { ...state, user: null, error };
  }),

  on(logout, (state) => {
    return { ...state, user: null, error: null };
  })
);
