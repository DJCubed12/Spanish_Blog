import { Component } from '@angular/core';

import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
  standalone: true,
  imports: [MatInputModule],
})
export class DictionaryComponent {}
