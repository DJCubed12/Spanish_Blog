import { WordResult } from 'sdapi/lib/dictionary';

export interface Entry {
  id?: number;
  title: string;
  body: string;
  glossary: WordResult[];
  createDate: string;
}
