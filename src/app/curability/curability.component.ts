import { Component, OnInit } from '@angular/core';
import {CONDITION_DATA} from '../model/condition';
import {SurveyService} from '../survey.service';

@Component({
  selector: 'app-curability',
  templateUrl: './curability.component.html',
  styleUrls: ['./curability.component.scss']
})
export class CurabilityComponent implements OnInit {
  notSureAllowed = false;

  constructor(private survey: SurveyService) { }

  ngOnInit() {
  }

  get prev(): number {
    return this.survey.selections.preventability;
  }

  set prev(value: number) {
    this.survey.selections.preventability = value;
  }
}
