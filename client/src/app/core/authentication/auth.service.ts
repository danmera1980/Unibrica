import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { clearAuth, login } from './auth-store/auth.actions';
import { AuthState } from './auth.interfaces';
import { LoginData, LoginResponse } from '../http/http.interfaces';
import { HttpBaseService } from '../http/http.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpBaseService{

  constructor(private store: Store<AuthState>, private http: HttpClient) {super()}

  login (userData:LoginData):void {
    this.store.dispatch(login(userData));
  }


  postLogin (userData: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASIC_URL}/auth/login`, userData, this.httpOptions)
  }

  logout(): void {
    this.store.dispatch(clearAuth())
  }

}
