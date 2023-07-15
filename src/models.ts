import { WordResult } from 'sdapi/lib/dictionary';

export interface Entry {
  title: string;
  body: string;
  glossary: WordResult[];
  createDate: string;
}

export interface Link {
  name: string;
  url: string;
}
