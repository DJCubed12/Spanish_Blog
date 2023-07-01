import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ConjugatorComponent } from './conjugator/conjugator.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { EntryComponent } from './entry/entry.component';
import { DictionaryComponent } from './dictionary/dictionary.component';

import { EntryService } from './entry.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConjugatorComponent,
    NewEntryComponent,
    EntryComponent,
    DictionaryComponent,
  ],
  providers: [EntryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
