import {Component, OnInit} from '@angular/core';
import {Word} from '../word';
import {DictionaryService} from '../service/dictionary-service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word: Word[];

  constructor(private  words: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.word = this.words.getAll();
    return this.word;
  }

}
