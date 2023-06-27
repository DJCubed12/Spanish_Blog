import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { PastEntryListComponent } from './past-entry-list/past-entry-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EntryComponent,
    PastEntryListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
