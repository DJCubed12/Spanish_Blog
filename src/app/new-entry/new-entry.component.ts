import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
export class NewEntryComponent implements OnChanges {
  @Input() public newGlossaryWord?: WordResult;
  public glossary: WordResult[] = [];

  public entryForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  @Output() private refreshEntriesEvent = new EventEmitter<void>();

  constructor(private readonly entryService: EntryService) {}

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'newGlossaryWord' && this.newGlossaryWord) {
        this.addWord(this.newGlossaryWord);
      }
    }
  }

  postEntry() {
    const entry: Entry = {
      title: this.entryForm.value.title ?? '',
      body: this.entryForm.value.body ?? '',
      glossary: this.glossary,
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

  addWord(word: WordResult) {
    this.glossary.push(word);
    this.glossary.sort((a, b) => {
      if (a.word > b.word) return 1;
      else if (a.word < b.word) return -1;
      else return 0;
    });
  }

  removeWord(glossaryIndex: number) {
    this.glossary.splice(glossaryIndex, 1);
  }

  clickedWord(glossaryIndex: number) {
    // NOTE: Clicking remove icon doesn't trigger this; Very good for my purposes of changing its color and showing definition
    console.log(`${this.glossary[glossaryIndex].word} was clicked.`);
  }
}
