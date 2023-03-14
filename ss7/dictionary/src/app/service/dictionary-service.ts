import {Injectable} from '@angular/core';
import {Word} from '../word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = [
    {
      word: 'hello',
      mean: 'xin chào '
    },
    {
      word: 'hi',
      mean: 'xin chao'
    },
    {
      word: 'what',
      mean: 'cái gì'
    },
    {
      word: 'how',
      mean: 'thế nào'
    },
    {
      word: 'do',
      mean: 'làm'
    },
    {
      word: 'have',
      mean: 'có'
    }

  ];

  constructor() {
  }

  getAll() {
    return this.words;
  }

  findById(word: string) {
    return this.words.filter(item => item.word === word)[0];
  }
}
