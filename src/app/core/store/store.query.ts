import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CategoryStore, CategoryState } from '../store/store';
import { CategoryModel } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class CategoryQuery extends QueryEntity<CategoryState, CategoryModel> {

  constructor(protected store: CategoryStore) {
    super(store);
  }

}
