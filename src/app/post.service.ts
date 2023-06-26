import { Injectable } from '@angular/core';

import { Post } from '../models';

const URL = 'http://localhost:3000/posts?_sort=id&_order=desc';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private nextId: number | undefined;

  constructor() {
    this.getPosts().then((posts) => {
      this.nextId = posts.length;
    });
  }

  async getPosts(): Promise<Post[]> {
    const data = await fetch(URL);
    return await data.json();
  }

  async postPost(post: Post): Promise<void> {
    if (this.nextId === undefined) {
      console.log('PostService error: nextId is undefined');
      return;
    }

    post.id = this.nextId;

    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });

    if (response.ok) {
      this.nextId++;
    } else {
      console.log(`PostService error: Bad post ${response.status}`);
    }
  }
}
