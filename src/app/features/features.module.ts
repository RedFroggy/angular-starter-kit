import { NgModule } from '@angular/core';
import { PetModule } from 'app/features/pet/pet.module';

@NgModule({
  imports: [PetModule],
  exports: [PetModule],
})
export class FeaturesModule {}
