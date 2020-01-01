import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { CategoryModel } from '../models/model';

export interface CategoryState extends EntityState<CategoryModel> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'category' })
export class CategoryStore extends EntityStore<CategoryState, CategoryModel> {

  constructor() {
    super();
  }

}
