import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { loadPets, requestLoadPets } from './pet.action';
import { PetService } from 'app/shared/api';

@Injectable()
export class PetEffect {
  constructor(private actions$: Actions, private service: PetService) {}

  loadPets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLoadPets),
      switchMap((action) => this.service.findPetsByStatus(action.status).pipe(map((data) => loadPets({ pets: data }))))
    )
  );
}
