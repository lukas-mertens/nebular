import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@devsaur-nebular/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate() {
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['auth/login']);
          }
        }),
      );
  }
}
