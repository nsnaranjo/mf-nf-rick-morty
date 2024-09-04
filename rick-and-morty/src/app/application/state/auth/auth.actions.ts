// NgRx
import { createAction, props } from '@ngrx/store';

// DTOs
import { LoginDTO } from '../../dtos';

// Models
import { UserModel } from '../../../domain/models';

export const login = createAction(
  '[Auth] Login',
  props<{ loginDTO: LoginDTO }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: UserModel }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
