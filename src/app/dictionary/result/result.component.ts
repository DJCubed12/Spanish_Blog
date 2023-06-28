import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // For ngIf, ngFor...

import { WordResult } from 'sdapi/lib/dictionary';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ResultComponent {
  @Input() result: WordResult | null = null;
}
