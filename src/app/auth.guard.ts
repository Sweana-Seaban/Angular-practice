import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const loggedIn = true;
  if (loggedIn) {
    router.navigate(['home-component']);
    return true;
  } else {
    router.navigate(['page-not-found']);
    return false;
  }
};
