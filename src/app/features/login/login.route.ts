import { CanActivate, Routes } from '@angular/router';
import { LoginComponent } from 'app/features/login/login.component';
import { Injectable } from '@angular/core';
import { AccountRepository } from 'app/features/login/repository/account.repository';

@Injectable()
export class CanLoginGuard implements CanActivate {
  constructor(private accountRepository: AccountRepository) {}
  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.accountRepository
        .hasAccount()
        .pipe()
        .subscribe((authenticated) => {
          if (authenticated) {
            reject(true);
          } else {
            resolve(true);
          }
        });
    });
  }
}

export const LOGIN_ROUTES: Routes = [
  {
    path: '',
    canActivate: [CanLoginGuard],
    component: LoginComponent,
  },
];
