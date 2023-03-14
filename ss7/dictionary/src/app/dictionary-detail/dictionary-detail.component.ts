import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary-service';
import {ActivatedRoute} from '@angular/router';
import {Word} from '../word';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: Word;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const word = paramMap.get('word');
      console.log(word);
      this.word = this.dictionaryService.findById(word);
    });
  }

}
