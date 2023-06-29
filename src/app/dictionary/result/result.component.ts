import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { WordResult } from 'sdapi/lib/dictionary';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule],
})
export class ResultComponent {
  @Input() result: WordResult | null = null;
}
