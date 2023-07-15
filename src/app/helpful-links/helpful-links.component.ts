import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HelpfulLinksService } from './helpful-links.service';

import { Link } from 'src/models';

@Component({
  selector: 'helpful-links',
  templateUrl: './helpful-links.component.html',
  styleUrls: ['./helpful-links.component.scss'],
  standalone: true,
  providers: [HelpfulLinksService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
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

    this.helpfulLinksService.postLink(newLink).then((success: boolean) => {
      if (success) {
        this.addLinkForm.reset();
        this.getLinks();
      } else {
        // Error Handling
      }
    });
  }
}
