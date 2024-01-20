import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NotificationsService } from './notifications.service';

import { Store } from '@ngrx/store';
import { AuthState } from '../authentication/auth.interfaces';
import { clearAuth } from '../authentication/auth-store/auth.actions';

@Injectable()
export class ErrorHandlerService implements ErrorHandler{

  constructor(
    private notifications:NotificationsService,
    private router: Router,
    private injector: Injector,
  ) { }

  handleError (error: Error):void {
    let authStore = this.injector.get(Store<AuthState>)
    if (error instanceof HttpErrorResponse) {
      this.notifications.emitNotification(error.error.message, 'error');
      if (error.status === 401 && error.error.message.includes('expired')) {
        authStore.dispatch(clearAuth());
        this.router.navigate(['/login']);
      }
    } else {
      this.notifications.emitNotification(error.message, 'error');
      console.error(error)
    }
  }
}
