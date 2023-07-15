import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { HelpfulLinksService } from './helpful-links.service';

import { Link } from 'src/models';

@Component({
  selector: 'helpful-links',
  templateUrl: './helpful-links.component.html',
  styleUrls: ['./helpful-links.component.css'],
  standalone: true,
  providers: [HelpfulLinksService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class HelpfulLinksComponent {
  public links: Link[] = [
    {
      name: 'Loading',
      url: 'https://www.google.com/search?q=span+to+eng',
    },
  ];

  public addLinkForm = new FormGroup({
    name: new FormControl(''),
    url: new FormControl(''),
  });

  constructor(private readonly helpfulLinksService: HelpfulLinksService) {
    this.getLinks();
  }

  public getLinks(): void {
    this.helpfulLinksService.getLinks().then((l) => (this.links = l));
  }

  public addLink() {
    const newLink: Link = {
      name: this.addLinkForm.value.name ?? '',
      url: this.addLinkForm.value.url ?? '',
    };
    if (!newLink.name || !newLink.url) return;

    this.links.push(newLink);
  }
}
