import { Routes } from '@angular/router';
import { PetListComponent } from 'app/features/pet/pet-list.component';
import { PetComponent } from 'app/features/pet/pet.component';
import { CanAuthenticationGuard } from 'app/features/login/authentication.guard';

export const PETS_ROUTES: Routes = [
  {
    path: '',
    canActivate: [CanAuthenticationGuard],
    children: [
      {
        path: '',
        component: PetListComponent,
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: PetComponent,
      },
    ],
  },
];
