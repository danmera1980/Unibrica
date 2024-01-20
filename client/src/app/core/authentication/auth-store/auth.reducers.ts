import { createReducer, on } from '@ngrx/store';

import { login, loginSuccess, loginFailure, clearAuth } from './auth.actions';
import { AuthState } from '../auth.interfaces';


export const initialAuthState: AuthState = {
  error: null,
  isLoading: false,
  user: null
};

export const AuthReducer = createReducer(initialAuthState,
  on(login, state => ({ ...state, isLoading: true })), 
  on(loginSuccess, (state, { user }) => ({ ...state, error:null, user, isLoading: false })),
  on(loginFailure, (state, { error }) => ({ error, token:null, isLoading: false, user:null })),
  on(clearAuth, () => (initialAuthState))
);