// Core
import { Injectable } from '@angular/core';

// Rxjs
import { Observable, of, throwError } from 'rxjs';

// Models
import { UserModel } from '../../../domain/models';

// DTOs
import { LoginDTO } from '../../../application/dtos';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(loginDTO: LoginDTO): Observable<UserModel> {
    const user: UserModel = {
      id: '1',
      email: loginDTO.email,
      token: 'fake-jwt-token',
    };

    if (loginDTO.email === 'prueba@correo.com' && loginDTO.password === '123') {
      return of(user);
    } else {
      return throwError(() => new Error('Contraseña o email incorrecto'));
    }
  }
}
