import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

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
  ],
})
export class NewEntryComponent {
  @Output() refreshEntriesEvent = new EventEmitter<void>();

  public entryForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  public glossary = ['Chip 1', 'Chip 2', 'Chip HIII', 'Chip 4'];

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

  removeWord(chipName: string) {
    const i = this.glossary.indexOf(chipName);

    if (i >= 0) {
      this.glossary.splice(i, 1);
    }
  }

  addWord(chipName: string) {
    if (chipName !== '') this.glossary.push(chipName);
  }

  clickedWord(chipName: string) {
    // NOTE: Clicking remove icon doesn't trigger this; Very good for my purposes of changing its color and showing definition
    console.log(chipName, 'was clicked.');
  }
}
