import { Component } from '@angular/core';

import { Entry } from 'src/models';
import { EntryService } from './entry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
