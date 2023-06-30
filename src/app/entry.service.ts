import { Injectable } from '@angular/core';

import { Entry } from '../models';

const URL = 'http://localhost:3000/entries?_sort=id&_order=desc';
// Later paginate with ...&_page=# and prev/next buttons

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  private nextId?: number;

  constructor() {
    this.getEntries().then((entries) => {
      this.nextId = entries.length;
    });
  }

  async getEntries(): Promise<Entry[]> {
    const data = await fetch(URL);
    return await data.json();
  }

  /**
   * Send POST request with entry to backend server
   * @returns true if successful, false if an error occured.
   */
  async postEntries(entry: Entry): Promise<boolean> {
    if (this.nextId === undefined) {
      console.log('EntryService error: nextId is undefined');
      return false;
    }

    entry.id = this.nextId;

    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });

    if (response.ok) {
      this.nextId++;
      return true;
    } else {
      console.log(`EntryService error: Bad post ${response.status}`);
      return false;
    }
  }
}
