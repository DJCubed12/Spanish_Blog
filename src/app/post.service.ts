import { Injectable } from '@angular/core';

import { Post } from '../models';

const URL = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  async getPosts(): Promise<Post[]> {
    const data = await fetch(URL);
    return await data.json();
  }
}
