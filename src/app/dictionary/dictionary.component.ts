import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';

import { ResultComponent } from './result/result.component';

import sdapi from 'sdapi';
import { WordResult } from 'sdapi/lib/dictionary';

@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
  standalone: true,
  imports: [CommonModule, MatInputModule, ResultComponent],
})
export class DictionaryComponent {
  public results: WordResult[] = [];
  public message: string = '';

  @Output() private addToGlossaryEvent = new EventEmitter<WordResult>();

  public translate(word: string): void {
    this.message = 'Searching...';
    sdapi.translate(word).then(
      (results) => this.showResults(results),
      (err) => console.log('Translate error: is CORS disabled?')
    );
  }

  public addToGlossary(word: WordResult) {
    this.addToGlossaryEvent.emit(word);
  }

  private showResults(results: WordResult[]): void {
    this.message = '';
    this.results = results;
  }
}
