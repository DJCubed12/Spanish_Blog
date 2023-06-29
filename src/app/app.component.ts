import { Component, Input } from '@angular/core';

import { WordResult } from 'sdapi/lib/dictionary';

import { Entry } from 'src/models';
import { EntryService } from './entry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public entries?: Entry[];
  public newGlossaryWord?: WordResult;

  constructor(private readonly entryService: EntryService) {
    this.getEntries();
  }

  public getEntries() {
    this.entryService.getEntries().then((entries) => {
      this.entries = entries;
    });
  }

  public addToGlossary(word: WordResult) {
    console.log(`Added ${word.word} to glossary`);
    this.newGlossaryWord = word;
  }
}
