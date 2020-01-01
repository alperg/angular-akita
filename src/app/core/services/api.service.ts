import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { CategoryModel } from '../models/model';

const categoriesMock: CategoryModel[] = [
  { id: 1, name: 'Hobbies' },
  { id: 2, name: 'Garening' },
  { id: 3, name: 'Home Appliances' },
  { id: 4, name: 'Consumer Electronics' },
  { id: 5, name: 'Clothing' },
  { id: 6, name: 'Gadgets' }
];

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {
  search() {
    return of(categoriesMock);
  }
}
