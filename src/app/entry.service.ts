import { Injectable } from '@angular/core';

import { Entry } from '../models';

const URL = 'http://localhost:3000/entries?_sort=id&_order=desc';
// Later paginate with ...&_page=# and prev/next buttons

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  async getEntries(): Promise<Entry[]> {
    const data = await fetch(URL);
    return await data.json();
  }

  /**
   * Send POST request with entry to backend server
   * @returns true if successful, false if an error occured.
   */
  async postEntries(entry: Entry): Promise<boolean> {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });

    if (!response.ok) {
      console.log(`EntryService error: Bad post ${response.status}`);
      return false;
    }
    return true;
  }
}
