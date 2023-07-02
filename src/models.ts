import { WordResult } from 'sdapi/lib/dictionary';

export interface Entry {
  title: string;
  body: string;
  glossary: WordResult[];
  createDate: string;
}
