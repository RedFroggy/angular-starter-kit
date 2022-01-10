import { createState, Store } from '@ngneat/elf';
import { deleteAllEntities, selectFirst, setEntities, withEntities } from '@ngneat/elf-entities';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AccountModel } from 'app/features/login/models/account.model';

import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';

const { state, config } = createState(withEntities<AccountModel>());

const store = new Store({ state, config, name: 'account' });

export const persist = persistState(store, {
  key: 'auth',
  storage: localStorageStrategy,
});

@Injectable()
export class AccountRepository {
  setAccount(account: AccountModel) {
    store.update(setEntities([account]));
  }

  hasAccount(): Observable<boolean> {
    return store.pipe(selectFirst()).pipe(map((account) => Boolean(account)));
  }

  getAccount(): Observable<AccountModel> {
    return store.pipe(selectFirst());
  }

  removeAccount() {
    store.update(deleteAllEntities());
  }
}
