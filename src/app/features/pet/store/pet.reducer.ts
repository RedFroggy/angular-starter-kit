import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as PetActions from './pet.action';
import { Pet } from 'app/shared/api';

export const petsFeatureKey = 'products';

export interface PetState extends EntityState<Pet> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Pet> = createEntityAdapter<Pet>();

export const initialState: PetState = adapter.getInitialState({
  isLoading: true,
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(PetActions.loadPets, (state, action) =>
    adapter.setAll(action.pets, {
      ...state,
      isLoading: false,
    })
  ),
  on(PetActions.requestLoadPets, (state) =>
    adapter.setAll([], {
      ...state,
      isLoading: true,
    })
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectIsLoading = (state: PetState) => state.isLoading;
export const selectError = (state: PetState) => state.error;
