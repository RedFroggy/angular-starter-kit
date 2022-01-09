import { createAction, props } from '@ngrx/store';
import { Pet } from 'app/shared/api';

export const loadPets = createAction('[PetList Component] Load pets', props<{ pets: Pet[] }>());

export const requestLoadPets = createAction(
  '[Product/API] Request Load Pets',
  props<{ status: 'available' | 'pending' | 'sold' }>()
);
