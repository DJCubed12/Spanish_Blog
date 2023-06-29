import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { Entry } from 'src/models';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule],
})
export class EntryComponent {
  @Input() entry: Entry | null = null;
}
