import { Component } from '@angular/core';

import conjugate from 'sdapi';
import { ConjugationResult } from 'sdapi/lib/conjugation';

@Component({
  selector: 'conjugator',
  templateUrl: './conjugator.component.html',
  styleUrls: ['./conjugator.component.css'],
  standalone: true,
})
export class ConjugatorComponent {}
