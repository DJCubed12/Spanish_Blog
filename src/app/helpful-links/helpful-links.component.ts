import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpfulLinksService } from './helpful-links.service';

@Component({
  selector: 'helpful-links',
  templateUrl: './helpful-links.component.html',
  styleUrls: ['./helpful-links.component.css'],
  standalone: true,
  providers: [HelpfulLinksService],
  imports: [],
})
export class HelpfulLinksComponent {
  constructor() {}
}
