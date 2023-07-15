import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { WordResult } from 'sdapi/lib/dictionary';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule],
})
export class ResultComponent {
  @Input() public result!: WordResult;

  @Output() private addToGlossaryEvent = new EventEmitter<WordResult>();

  public addToGlossary() {
    this.addToGlossaryEvent.emit(this.result);
  }
}
