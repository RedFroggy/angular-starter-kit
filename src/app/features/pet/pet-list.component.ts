import { Component } from '@angular/core';

import * as fromActions from './store/pet.action';
import * as fromStore from './store/pet.reducer';
import * as fromSelector from './store/pet.selector';

import { Observable } from 'rxjs';
import { Pet } from 'app/shared/api';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
})
export class PetListComponent {
  pets$: Observable<Pet[]>;

  constructor(private store: Store<fromStore.PetState>) {
    this.store.dispatch(fromActions.requestLoadPets({ status: 'pending' }));
  }

  loadPets() {
    this.pets$ = this.store.select(fromSelector.pets);
  }
}
