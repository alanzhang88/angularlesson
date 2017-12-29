import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from "app/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    SortPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
