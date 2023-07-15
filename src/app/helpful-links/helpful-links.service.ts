import { Injectable } from '@angular/core';

import { API_BASE_URL } from 'src/constants';
import { Link } from 'src/models';

const URL = API_BASE_URL + 'helpful-links';

@Injectable({
  providedIn: 'root',
})
export class HelpfulLinksService {
  async getLinks(): Promise<Link[]> {
    const data = await fetch(URL);
    return data.json();
  }

  /**
   * POST new link to database
   * @returns true if successful, false if an error occured.
   */
  async postLink(link: Link): Promise<boolean> {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(link),
    });

    if (!response.ok) {
      console.log(`EntryService error: Bad post ${response.status}`);
      return false;
    }
    return true;
  }
}
