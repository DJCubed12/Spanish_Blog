import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryComponent } from './entry/entry.component';

import { EntryService } from '../entry.service';
import { Entry } from '../../models';

@Component({
  selector: 'app-past-entry-list',
  templateUrl: './past-entry-list.component.html',
  styleUrls: ['./past-entry-list.component.css'],
  standalone: true,
  providers: [EntryService],
  imports: [CommonModule, EntryComponent],
})
export class PastEntryListComponent {
  public entries: Entry[] | null = null;

  constructor(private readonly entryService: EntryService) {
    this.getEntries();
  }

  getEntries() {
    this.entryService.getEntries().then((entries) => {
      this.entries = entries;
    });
  }
}
