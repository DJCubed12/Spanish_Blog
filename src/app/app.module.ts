import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { PastEntryListComponent } from './past-entry-list/past-entry-list.component';
import { DictionaryComponent } from './dictionary/dictionary.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NewEntryComponent,
    PastEntryListComponent,
    DictionaryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
