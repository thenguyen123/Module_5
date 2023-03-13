import {Component, OnInit} from '@angular/core';
import {Iword} from '../iword';
import {DictionaryServiceService} from '../service/dictionary-service.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word: Iword[];

  constructor(private  words: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.word = this.words.getAll();
  }

}
