import { SharedModule } from 'app/shared/shared.module';
import { PetListComponent } from 'app/features/pet/pet-list.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromPets from './store/pet.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PetEffect } from 'app/features/pet/store/pet.effect';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature(fromPets.petsFeatureKey, fromPets.reducer),
    EffectsModule.forFeature([PetEffect]),
  ],
  declarations: [PetListComponent],
  exports: [PetListComponent],
})
export class PetModule {}
