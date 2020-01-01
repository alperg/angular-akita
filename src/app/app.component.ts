import { Component } from '@angular/core';

import { SearchEvent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  category: number;
  searchEvent: SearchEvent;
}
