import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from '../service/dictionary-service.service';
import {ActivatedRoute} from '@angular/router';
import {Iword} from '../iword';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: Iword;

  constructor(private dictionaryService: DictionaryServiceService,
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
