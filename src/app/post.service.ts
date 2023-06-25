import { Injectable } from '@angular/core';

import { Post } from '../models';

const URL = 'http://localhost:3000/test';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  async getData(): Promise<Post | null> {
    const data = await fetch(URL);
    return await data.json();
  }
}
