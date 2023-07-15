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
}
