import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { ResultComponent } from './result/result.component';

import sdapi from 'sdapi';
import { WordResult } from 'sdapi/lib/dictionary';
import { Language } from 'sdapi/lib/constants';

@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
  standalone: true,
  imports: [CommonModule, MatInputModule, MatCardModule, ResultComponent],
})
export class DictionaryComponent {
  public results: WordResult[] = [];
  public loading = false;

  @Output() private addToGlossaryEvent = new EventEmitter<WordResult>();

  public translate(word: string): void {
    this.loading = true;
    sdapi.translate(word).then(
      (results) => this.showResults(results),
      (err) => console.log('Translate error: is CORS disabled?')
    );
  }

  public addToGlossary(word: WordResult) {
    // Glossary should only be spanish words (swap word and meaning)
    if (word.lang === Language.English) {
      word = {
        lang: word.lang,
        word: word.meaning,
        gender: word.gender,
        pronunciation: word.pronunciation,
        context: word.context,
        meaning: word.word,
        part: word.part,
        examples: word.examples, // These need to be flipped internally if used
        regions: word.regions,
      };
    }

    this.addToGlossaryEvent.emit(word);
  }

  public groupByWordAndPart() {
    let groups: WordResult[][] = [];
    let lastWord: string = '';
    let lastPart: string = '';
    for (const result of this.results) {
      if (result.word !== lastWord || result.part !== lastPart) {
        groups.push([]);
        lastWord = result.word;
        lastPart = result.part;
      }

      groups.at(-1)!.push(result);
    }

    return groups;
  }

  private showResults(results: WordResult[]): void {
    this.results = results;
    this.loading = false;
  }
}
