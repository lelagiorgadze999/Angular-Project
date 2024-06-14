import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/user.service';

export const restrictDashboardGuard: CanActivateFn = (route, state) => {
  if (!inject(UserService).loggedUser) {
    inject(Router).navigateByUrl('/login');
  }
  return inject(UserService).loggedUser ? true : false;
};
