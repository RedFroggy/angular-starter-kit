import { createState, Store } from '@ngneat/elf';
import { selectAll, selectEntity, setEntities, withEntities } from '@ngneat/elf-entities';
import { Injectable } from '@angular/core';
import { createRequestDataSource, withRequestsStatus } from '@ngneat/elf-requests';
import { Pet } from 'app/shared/api';
import { Observable } from 'rxjs';

const { state, config } = createState(withEntities<any>(), withRequestsStatus());

const store = new Store({ state, config, name: 'pet' });

@Injectable()
export class PetsRepository {
  dataSource;
  constructor() {
    this.dataSource = createRequestDataSource({
      store,
      data$: () => store.pipe(selectAll()),
      requestKey: 'pets',
      dataKey: 'pets',
      idleAsPending: true,
    });
  }

  findById(id: number): Observable<Pet> {
    return store.pipe(selectEntity(id));
  }

  findAll(): Observable<Pet[]> {
    return store.pipe(selectAll());
  }

  setPets(status: string, pets: Pet[]) {
    store.update(setEntities(pets), this.dataSource.setSuccess());
  }
}
