import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountRepository } from 'app/features/login/repository/account.repository';

@Injectable()
export class CanAuthenticationGuard implements CanActivate {
  constructor(protected readonly router: Router, private readonly accountRepository: AccountRepository) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.accountRepository
        .hasAccount()
        .pipe()
        .subscribe((authenticated) => {
          console.log('Already authenticated, skip login page', authenticated);
          if (!authenticated) {
            console.warn('Not authenticated, please log in', authenticated);
            this.router.navigate(['login']);
            reject(true);
          } else {
            resolve(true);
          }
        });
    });
  }
}
