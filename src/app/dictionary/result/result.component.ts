import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { WordResult } from 'sdapi/lib/dictionary';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class ResultComponent {
  @Input() public result: WordResult | null = null;
  @Output() private addToGlossaryEvent = new EventEmitter<WordResult>();

  public addToGlossary() {
    this.addToGlossaryEvent.emit(this.result!);
  }
}
