import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { EntryService } from '../entry.service';
import { Entry } from 'src/models';

@Component({
  selector: 'new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css'],
  standalone: true,
  providers: [EntryService],
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class NewEntryComponent {
  @Output() refreshEntriesEvent = new EventEmitter<void>();

  entryForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private readonly entryService: EntryService) {}

  postEntry() {
    const entry: Entry = {
      title: this.entryForm.value.title ?? '',
      body: this.entryForm.value.body ?? '',
    };
    if (!entry.title || !entry.body) return; // Empty post

    this.entryService.postEntries(entry).then((success: boolean) => {
      // TODO: Emit event so PastEntryList refreshes data
      if (success) {
        this.entryForm.reset();
        this.refreshEntriesEvent.emit();
      } else {
        // TODO: Error handling
      }
    });
  }
}
