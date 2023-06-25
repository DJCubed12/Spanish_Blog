import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { PostService } from '../post.service';
import { Post } from 'src/models';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers: [PostService],
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
  public data: Post | null = null;

  postForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private postService: PostService) {
    this.postService.getData().then((post) => {
      this.data = post;
    });
  }

  submitPost() {
    console.log(this.postForm.value.title, this.postForm.value.body);
  }
}
