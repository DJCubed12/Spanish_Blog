import { Component } from '@angular/core';

const URL = 'http://localhost:3000/test';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  public data: { value: string } | null = null;

  async getData(): Promise<void> {
    const data = await fetch(URL);
    this.data = (await data.json()) ?? null;
  }
}
