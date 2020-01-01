import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { CategoryStore } from '../store/store';
import { CategoryApiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })
export class CategoryStoreService {

  constructor(private categoryStore: CategoryStore,
    private categoryApiService: CategoryApiService) {
  }

  search() {
    return this.categoryApiService.search()
      .pipe(
        tap(categories => this.categoryStore.set(categories))
      );
  }
}
