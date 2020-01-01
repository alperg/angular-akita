import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoryModel } from '../core/models/model';
import { CategoryQuery } from '../core/store/store.query';
import { CategoryStoreService } from '../core/services/store.service';

export type SearchEvent = {
  searchTerm: string,
  selectedCategory: CategoryModel
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() searchTerm: string;
  @Input() selectedCategoryId: number;
  @Output() search = new EventEmitter<SearchEvent>();
  selectedCategory: CategoryModel;
  categories$: Observable<CategoryModel[]>;

  constructor(private categoryStoreService: CategoryStoreService, private categoryQuery: CategoryQuery) { }

  ngOnInit() {
    this.fetchCategories();
    this.categories$ = this.categoryQuery.selectAll();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedCategoryId && changes.selectedCategoryId.currentValue !== null) {
      this.selectedCategory = this.categoryQuery.getEntity(changes.selectedCategoryId.currentValue);
    }
  }

  private fetchCategories() {
    this.categoryStoreService.search().subscribe();
  }

  private compareWith(category1: CategoryModel, category2: CategoryModel) {
    return category2 && category1.id === category2.id;
  }
}
