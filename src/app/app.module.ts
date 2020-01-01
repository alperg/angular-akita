import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSelectModule, MatOptionModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule],
  declarations: [
    AppComponent,
    SearchComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
