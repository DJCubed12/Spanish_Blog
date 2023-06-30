import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Entry } from 'src/models';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatTooltipModule],
})
export class EntryComponent {
  @Input() public entry!: Entry;

  public clickedWord(glossaryIndex: number) {
    // NOTE: Clicking remove icon doesn't trigger this; Very good for my purposes of changing its color and showing definition
    console.log(`${this.entry!.glossary[glossaryIndex].word} was clicked.`);
  }
}
