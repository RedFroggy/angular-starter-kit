import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'app/shared/api';
import { map, Observable } from 'rxjs';
import { AccountRepository } from 'app/features/login/repository/account.repository';
import { PetsRepository } from 'app/features/pet/repository/pets.repository';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
})
export class PetComponent {
  pet: Pet;
  accountFullName$: Observable<string>;
  constructor(
    route: ActivatedRoute,
    private readonly petsRepository: PetsRepository,
    private readonly accountRepository: AccountRepository
  ) {
    route.params.subscribe((params) => {
      if (params.id) {
        this.petsRepository.findById(params.id).subscribe((pet) => (this.pet = pet));
      }
    });

    this.accountFullName$ = accountRepository
      .getAccount()
      .pipe(map((account) => `${account.firstName} ${account.lastName}`));
  }
}
