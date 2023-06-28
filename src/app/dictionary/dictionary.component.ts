import { Component } from '@angular/core';

import { MatInputModule } from '@angular/material/input';

import sdapi from 'sdapi';
import { WordResult } from 'sdapi/lib/dictionary';

@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
  standalone: true,
  imports: [MatInputModule],
})
export class DictionaryComponent {
  public results: string = '';

  public translate(word: string): void {
    this.results = 'Searching...';
    sdapi.translate(word).then(
      (results) => this.showResults(results),
      (err) => console.log('Translate error: is CORS disabled?')
    );
  }

  private showResults(results: WordResult[]): void {
    this.results = JSON.stringify(results);
  }
}
