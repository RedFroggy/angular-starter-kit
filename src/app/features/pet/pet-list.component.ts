import { Component, OnInit } from '@angular/core';
import { Pet, PetService } from 'app/shared/api';
import { PetsRepository } from 'app/features/pet/repository/pets.repository';
import { tap } from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
})
export class PetListComponent implements OnInit {
  pets: Pet[];
  status: 'available' | 'pending' | 'sold' = 'pending';
  constructor(private readonly petsRepository: PetsRepository, private readonly petService: PetService) {}

  ngOnInit() {
    this.loadPets();
  }

  selectStatus() {
    this.loadPets();
  }

  loadPets() {
    this.petService
      .findPetsByStatus(this.status)
      .pipe(tap((pets) => this.petsRepository.setPets(this.status, pets)))
      .subscribe((pets) => (this.pets = pets));
  }
}
