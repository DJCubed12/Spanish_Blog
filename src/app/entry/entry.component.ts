import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { EntryService } from '../entry.service';
import { Entry } from 'src/models';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers: [EntryService],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class EntryComponent {
  public entries: Entry[] | null = null;

  entryForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private entryService: EntryService) {
    this.getEntries();
  }

  getEntries() {
    this.entryService.getEntries().then((entries) => {
      this.entries = entries;
    });
  }

  postEntry() {
    const entry: Entry = {
      title: this.entryForm.value.title ?? '',
      body: this.entryForm.value.body ?? '',
    };

    this.entryService.postEntries(entry).then(() => this.getEntries());
  }
}
