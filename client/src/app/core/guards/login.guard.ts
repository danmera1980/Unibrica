import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../authentication/auth.interfaces';
import { selectUser } from '../authentication/auth-store/auth.selectors';

@Injectable({
  providedIn: 'root'	
})
class LoginPermissions {
  
  constructor ( private authStore: Store<AuthState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authStore.select(selectUser).pipe(map(user => {
      if (user) {
        this.router.navigate(['/dashboard'])
        return false
      } else {
        return true
      }
    }))
  }
}

export const canActivateLogin: CanActivateFn = (route, state): Observable<boolean> => {
  return inject(LoginPermissions).canActivate();
};
