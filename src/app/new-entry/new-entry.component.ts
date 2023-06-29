import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { WordResult } from 'sdapi/lib/dictionary';
import { Language } from 'sdapi/lib/constants';

import { EntryService } from '../entry.service';
import { Entry } from 'src/models';

const EXAMPLE_WORDS: WordResult[] = [
  {
    lang: Language.English,
    word: 'hermano',
    context: '(relative)',
    meaning: 'brother',
    part: 'noun',
    examples: [],
    regions: [],
  },
  {
    lang: Language.English,
    word: 'leche',
    context: '(liquid)',
    meaning: 'milk',
    part: 'noun',
    examples: [],
    regions: [],
  },
  {
    lang: Language.English,
    word: 'perro',
    context: '(animal)',
    meaning: 'dog',
    part: 'noun',
    examples: [],
    regions: [],
  },
];

@Component({
  selector: 'new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css'],
  standalone: true,
  providers: [EntryService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class NewEntryComponent {
  @Output() refreshEntriesEvent = new EventEmitter<void>();

  public entryForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  public glossary: WordResult[] = EXAMPLE_WORDS;

  constructor(private readonly entryService: EntryService) {}

  postEntry() {
    const entry: Entry = {
      title: this.entryForm.value.title ?? '',
      body: this.entryForm.value.body ?? '',
    };
    if (!entry.title || !entry.body) return; // Empty post

    this.entryService.postEntries(entry).then((success: boolean) => {
      if (success) {
        this.entryForm.reset();
        this.refreshEntriesEvent.emit();
      } else {
        // TODO: Error handling
      }
    });
  }

  removeWord(glossaryIndex: number) {
    this.glossary.splice(glossaryIndex, 1);
  }

  addWord(word: WordResult) {
    this.glossary.push(word);
  }

  clickedWord(glossaryIndex: number) {
    // NOTE: Clicking remove icon doesn't trigger this; Very good for my purposes of changing its color and showing definition
    console.log(`${this.glossary[glossaryIndex].word} was clicked.`);
  }
}
