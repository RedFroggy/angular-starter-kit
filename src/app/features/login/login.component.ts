import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/features/login/services/login.service';
import { AccountRepository } from 'app/features/login/repository/account.repository';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(
    private readonly loginService: LoginService,
    private readonly accountRepository: AccountRepository,
    private router: Router
  ) {}

  authenticate() {
    this.loginService
      .authenticate(this.username, this.password)
      .pipe(tap((account) => this.accountRepository.setAccount(account)))
      .subscribe(() => this.router.navigate(['pets']));
  }
}
