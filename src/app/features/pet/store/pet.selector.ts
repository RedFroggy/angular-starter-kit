import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './pet.reducer';

const petsSelector = createFeatureSelector<fromStore.PetState>(fromStore.petsFeatureKey);
export const pets = createSelector(petsSelector, fromStore.selectAll);
